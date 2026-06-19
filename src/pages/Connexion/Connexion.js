import { navigate } from "../../../router.js";

const Connexion = () => {
    return `
    <div class="page-container dpl">
        <div class="connex inscrip">
           <img src="./Assets/Images/Frame 1.png" class="img1">
            <h2 class="talc text-2xl font-bold text-[#1E1E1E]">Connexion</h2>
            <p style="align-self: center;">Accéder à votre compte</p>
            <br>

            <label>Email</label>
            <input type="email" id="emailConnexion" class="tail-inpt" placeholder="Ex: odcsenagal@gmail.com">
            <br>

            <label>Mot de passe</label>
            <input type="password" id="passwordConnexion" class="tail-inpt" placeholder="Entrer votre mot de passe">
            <br>

            <button class="btnCmpt" id="btnConnexion">Se connecter</button>
            <br>

            <div style="align-self: center;">
                <span>Vous n'avez pas de compte?</span>
                <span style="color: rgb(95, 57, 4); font-weight: bold; cursor: pointer;" id="retourInscription">S'inscrire</span>
            </div>
            <br><br>

            <div style="align-self: center; cursor: pointer;" id="retour">
                <span class="formkit--arrowleft"></span>
                <span>Retour à l'accueil</span>
            </div>
        </div>
    </div>
    `;
};

Connexion.afterRender = () => {
    const btnConnexion = document.getElementById('btnConnexion');
    const retour = document.getElementById('retour');
    const retourInscription = document.getElementById('retourInscription');

    btnConnexion?.addEventListener('click', async () => {
        const user = await connecter();

        if (user) {
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/client');
            }
        }
    });

    retourInscription?.addEventListener('click', () => navigate('/inscription'));
    retour?.addEventListener('click', () => navigate('/'));
};

async function connecter() {
    const email = document.getElementById('emailConnexion').value.trim().toLowerCase();
    const password = document.getElementById('passwordConnexion').value.trim();

    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return null;
    }

    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error('Impossible de charger les utilisateurs');
        }

        const data = await response.json();
        const user = data.find((u) => u.email === email && u.password === password);

        if (!user) {
            alert('Email ou mot de passe incorrect');
            return null;
        }

        alert('Connexion réussie');
        return user;
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de la connexion');
        return null;
    }
}

export default Connexion;
