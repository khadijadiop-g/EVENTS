const Accueil = () => `
    <div>
        <h2>Bienvenue sur l'application SPA</h2>
        <p>Ceci est la page d'Accueil.</p>
        <button id="goToLogin">Aller à la page Connexion</button>
    </div>
`;

Accueil.afterRender = () => {
    const btn = document.getElementById('goToLogin');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.hash = '/connexion';
        });
    }
};

export default Accueil;