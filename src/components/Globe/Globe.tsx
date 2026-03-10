import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../ThemeProvider";

const NODE_COUNT = 42;
const ARC_COUNT = 20;
const PHI = (1 + Math.sqrt(5)) / 2;

function getCSSColor(cssVar: string): string {
  if (typeof document === "undefined") return "#2563eb";
  const s = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  if (s.startsWith("#")) return s;
  const m = s.match(/[\d.]+/g);
  if (m && m.length >= 3) {
    return "#" + [m[0], m[1], m[2]].map((x) => parseInt(x, 10).toString(16).padStart(2, "0")).join("");
  }
  return "#2563eb";
}

export function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globeGroup: THREE.Group;
    wireMat: THREE.MeshBasicMaterial;
    atmMat: THREE.MeshBasicMaterial;
    ringMat: THREE.LineBasicMaterial;
    nodeSprites: THREE.Sprite[];
    nodeCores: THREE.Mesh[];
    arcs: THREE.Line[];
    pulses: THREE.Sprite[];
  } | null>(null);
  const scrollProgRef = useRef(0);
  const targetScrollRef = useRef(0);
  const rafRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const wireColor = new THREE.Color(getCSSColor("--globe-wire"));
    const wireMat = new THREE.MeshBasicMaterial({
      color: wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 3), wireMat);
    globeGroup.add(sphere);

    const atmMat = new THREE.MeshBasicMaterial({
      color: wireColor.clone(),
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    globeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.76, 32, 32), atmMat));

    const ringMat = new THREE.LineBasicMaterial({
      color: wireColor.clone(),
      transparent: true,
      opacity: 0.12,
    });
    function makeCircle(r: number, segs: number) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
      }
      return new THREE.BufferGeometry().setFromPoints(pts);
    }
    [-60, -30, 0, 30, 60].forEach((lat) => {
      const r = 1.8 * Math.cos((lat * Math.PI) / 180);
      const line = new THREE.Line(makeCircle(r, 64), ringMat);
      line.position.y = 1.8 * Math.sin((lat * Math.PI) / 180);
      globeGroup.add(line);
    });
    [0, 30, 60, 90, 120, 150].forEach((lon) => {
      const line = new THREE.Line(makeCircle(1.8, 64), ringMat);
      line.rotation.x = Math.PI / 2;
      line.rotation.y = (lon * Math.PI) / 180;
      globeGroup.add(line);
    });

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gr = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.15, "rgba(255,255,255,0.8)");
    gr.addColorStop(0.4, "rgba(255,255,255,0.3)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 64, 64);
    const glowTex = new THREE.CanvasTexture(canvas);

    const nodePos: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (2 * i) / (NODE_COUNT - 1);
      const rr = Math.sqrt(1 - y * y);
      const th = (2 * Math.PI * i) / PHI;
      nodePos.push(
        new THREE.Vector3(
          rr * Math.cos(th) * 1.82,
          y * 1.82,
          rr * Math.sin(th) * 1.82
        )
      );
    }

    const nodeColor = new THREE.Color(getCSSColor("--globe-node"));
    const nodeSprites: THREE.Sprite[] = [];
    const nodeCores: THREE.Mesh[] = [];
    nodePos.forEach((p) => {
      const sm = new THREE.SpriteMaterial({
        map: glowTex,
        color: nodeColor.clone(),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      const sp = new THREE.Sprite(sm);
      sp.position.copy(p);
      const bs = 0.07 + Math.random() * 0.06;
      sp.scale.set(bs, bs, bs);
      (sp as THREE.Sprite & { userData: Record<string, unknown> }).userData = {
        baseScale: bs,
        po: Math.random() * Math.PI * 2,
        ps: 0.8 + Math.random() * 1.2,
      };
      globeGroup.add(sp);
      nodeSprites.push(sp);

      const cm = new THREE.MeshBasicMaterial({ color: nodeColor.clone() });
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), cm);
      core.position.copy(p);
      globeGroup.add(core);
      nodeCores.push(core);
    });

    const arcColor = new THREE.Color(getCSSColor("--globe-arc"));
    const arcs: THREE.Line[] = [];
    const arcUserData: { pts: THREE.Vector3[]; prog: number; spd: number; si: number; ei: number }[] = [];
    const pulses: THREE.Sprite[] = [];
    const usedPairs: Record<string, boolean> = {};

    for (let a = 0; a < ARC_COUNT; a++) {
      let i1: number, i2: number, key: string;
      do {
        i1 = Math.floor(Math.random() * NODE_COUNT);
        i2 = Math.floor(Math.random() * NODE_COUNT);
        key = Math.min(i1, i2) + "-" + Math.max(i1, i2);
      } while (i1 === i2 || usedPairs[key]);
      usedPairs[key] = true;

      const p1 = nodePos[i1];
      const p2 = nodePos[i2];
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(1.82 + dist * 0.35);
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const pts = curve.getPoints(40);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: arcColor.clone(),
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geo, mat);
      const ud = {
        pts,
        prog: Math.random(),
        spd: 0.002 + Math.random() * 0.004,
        si: i1,
        ei: i2,
      };
      line.userData = ud;
      globeGroup.add(line);
      arcs.push(line);
      arcUserData.push(ud);

      const pm = new THREE.SpriteMaterial({
        map: glowTex,
        color: arcColor.clone(),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });
      const ps = new THREE.Sprite(pm);
      ps.scale.set(0.06, 0.06, 0.06);
      globeGroup.add(ps);
      pulses.push(ps);
    }

    const clock = new THREE.Clock();

    sceneRef.current = {
      scene,
      camera,
      renderer,
      globeGroup,
      wireMat,
      atmMat,
      ringMat,
      nodeSprites,
      nodeCores,
      arcs,
      pulses,
    };

    const onScroll = () => {
      const mx = document.body.scrollHeight - window.innerHeight;
      targetScrollRef.current = mx > 0 ? window.scrollY / mx : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    function animate() {
      rafRef.current = requestAnimationFrame(animate);
      const data = sceneRef.current;
      if (!data) return;

      const t = clock.getElapsedTime();
      scrollProgRef.current += (targetScrollRef.current - scrollProgRef.current) * 0.04;
      const scrollProg = scrollProgRef.current;

      data.globeGroup.position.x = 2.0 - scrollProg * 1.8;
      data.globeGroup.position.y = 0.2 - scrollProg * 2.2;
      data.globeGroup.rotation.y = t * 0.07 + scrollProg * Math.PI * 1.6;
      data.globeGroup.rotation.x = 0.35 + scrollProg * 0.5;
      data.globeGroup.rotation.z = Math.sin(t * 0.04) * 0.04;

      const sc = 1.0 + scrollProg * 0.3;
      data.globeGroup.scale.set(sc, sc, sc);

      data.wireMat.opacity = 0.14 + scrollProg * 0.14;

      nodeSprites.forEach((ns) => {
        const ud = (ns as THREE.Sprite & { userData: { baseScale: number; po: number; ps: number } }).userData;
        const pv = 0.6 + 0.4 * Math.sin(t * ud.ps + ud.po);
        const s = ud.baseScale * pv * (1 + scrollProg * 0.3);
        ns.scale.set(s, s, s);
        (ns.material as THREE.SpriteMaterial).opacity = 0.55 + 0.45 * pv;
      });

      arcs.forEach((arc, a) => {
        const ud = arcUserData[a];
        ud.prog += ud.spd * (1 + scrollProg * 2.5);
        if (ud.prog > 1) ud.prog = 0;
        (arc.material as THREE.LineBasicMaterial).opacity = 0.2 + 0.22 * Math.sin(t * 0.4 + a);

        const ps = pulses[a];
        const idx = Math.floor(ud.prog * (ud.pts.length - 1));
        const pt = ud.pts[idx];
        if (pt) {
          ps.position.copy(pt);
          const sinP = Math.sin(ud.prog * Math.PI);
          (ps.material as THREE.SpriteMaterial).opacity = 0.5 + 0.5 * sinP;
          const psc = 0.04 + 0.04 * sinP;
          ps.scale.set(psc, psc, psc);
        }

        if (ud.prog < 0.08 || ud.prog > 0.92) {
          const ni = ud.prog < 0.08 ? ud.si : ud.ei;
          const bns = nodeSprites[ni];
          if (bns) {
            const bud = (bns as THREE.Sprite & { userData: { baseScale: number } }).userData;
            const boost = bud.baseScale * 2.8;
            bns.scale.set(boost, boost, boost);
            (bns.material as THREE.SpriteMaterial).opacity = 1.0;
          }
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    const data = sceneRef.current;
    if (!data) return;
    const wc = new THREE.Color(getCSSColor("--globe-wire"));
    const nc = new THREE.Color(getCSSColor("--globe-node"));
    const ac = new THREE.Color(getCSSColor("--globe-arc"));
    data.wireMat.color.set(wc);
    data.atmMat.color.set(wc);
    data.ringMat.color.set(wc);
    data.nodeSprites.forEach((s) => (s.material as THREE.SpriteMaterial).color.set(nc));
    data.nodeCores.forEach((s) => (s.material as THREE.MeshBasicMaterial).color.set(nc));
    data.arcs.forEach((a) => (a.material as THREE.LineBasicMaterial).color.set(ac));
    data.pulses.forEach((p) => (p.material as THREE.SpriteMaterial).color.set(ac));
  }, [theme]);

  return (
    <div
      id="globe-container"
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.52,
        transition: "opacity 0.8s ease",
      }}
      aria-hidden="true"
    />
  );
}
