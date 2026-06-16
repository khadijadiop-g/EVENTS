const Accueil = () => `

    <div
    <div class="page-container2 dpl">
        <h2>Bienvenue sur Mon site d evenement</h2>
        <br>
        <p>Ceci est la page d'Accueil.</p>
         <br>
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
