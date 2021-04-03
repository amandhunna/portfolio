export const getRecentWork = () => {
    const work = [
      {
        repoURL: "https://github.com/amanjotsinghdhunna/sos-auth-service",
        workTitle: "SOS-Auth-service",
      },
      {
        repoURL: "https://github.com/amanjotsinghdhunna/storybook",
        workTitle: "Story book",
      },
      {
        repoURL: "https://github.com/amanjotsinghdhunna/profileintro",
        workTitle: "Resume",
      },
      {
        repoURL: "https://github.com/amanjotsinghdhunna/Express",
        workTitle: "Express",
      },
  
      {
        repoURL: "https://github.com/amanjotsinghdhunna/Lambo",
        workTitle: "Lambo",
      },
      {
        repoURL: "https://github.com/amanjotsinghdhunna/Arduino",
        workTitle: "Arduino",
      },
    ];
    return work.map((ele) => {
      return (
        <div
          key={"myWork" + Math.random()}
          className="card"
          onClick={() => window.open(ele.repoURL)}
        >
          {ele.workTitle}
        </div>
      );
    });
};

export const getRecentBlogs = () => {
    const blog = [
      {  
      repoURL:
      "https://amanjotsinghdhunna.medium.com/dynamically-add-suggestion-list-to-input-fields-b0a6e33c7e29",
      workTitle: "Dynamically add suggestion list to input fields",
      },
      {
        repoURL:
          "https://amanjotsinghdhunna.medium.com/cross-origin-communication-between-window-55369facd73",
        workTitle: "Cross-origin communication between window",
      },
      {
        repoURL:
          "https://amanjotsinghdhunna.medium.com/overwriting-and-appending-children-props-using-reactclone-4c69f88dc235",
        workTitle:
          "Overwriting and Appending children props using React.cloneElement",
      },
      {
        repoURL:
          "https://amanjotsinghdhunna.medium.com/add-console-to-the-code-fbef21e2024d",
        workTitle: "Add Console to the code",
      },
      {
        repoURL:
          "https://amanjotsinghdhunna.medium.com/string-operations-using-slice-substring-and-substr-c4364265d0a5",
        workTitle: "String operations using slice, substring and substr",
      },
      {
        repoURL: "https://amanjotsinghdhunna.medium.com/communication-76651c3019a4",
        workTitle: "Communication",
      },
    ];
    return blog.map((ele) => {
      return (
        <div
          key={"myblog" + Math.random()}
          className="card"
          onClick={() => window.open(ele.repoURL)}
        >
          {ele.workTitle}
        </div>
      );
    });
  };