import { loadData } from './services.js';

const routes = {
    '/': 'Accueil',
    '/connexion': 'Connexion',
    '/inscription': 'Inscription',
    '/client': 'Client',
    '/admin': 'Admin'
};

const render = async (path) => {
    const app = document.getElementById('app');
    if (!app) return;

    const pageName = routes[path];
    console.log(pageName);
    let pageModule;

    try {
        if (!pageName) {
            pageModule = await import('./src/pages/NotFound/NotFound.js');
        } else {
            pageModule = await import(`./src/pages/${pageName}/${pageName}.js`);
        }

        const pageComponent = pageModule.default;
        app.innerHTML = pageComponent();

        if (pageComponent.afterRender) {
            pageComponent.afterRender();
        }
    } catch (error) {
        console.error(`Erreur de chargement : ${error}`);
        app.innerHTML = '<h1>Erreur technique</h1>';
    }
};

const navigate = (path) => {
    window.location.hash = path;
};

const handleHashChange = async () => {
    const path = window.location.hash.replace('#', '') || '/';

    await render(path);
};

const initRouter = async () => {
    await loadData();
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
};

export { navigate, initRouter };