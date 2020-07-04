import ReactGA from 'react-ga';

(function initializeReactGA() {
    const gaId = process.env.REACT_APP_GAID
    console.log(process.env)
    if (!gaId) return;
    ReactGA.initialize(gaId);
    ReactGA.pageview('/');
})();

