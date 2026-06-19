import { navigate } from "../../../router.js";

const Inscription = () => {
    return `
        <div class="rien page-container dpl">
            <div class="inscrip">
                <img src="./Assets/Images/Frame 1.png" class="img1">
                <h2 class="talc text-2xl font-bold text-[#1E1E1E]">Inscription</h2>
                <p style="align-self: center;">Créez votre compte gratuitement</p>
                <br>
                <label>Nom complet</label>
                <input type="text" id="nom" class="tail-inpt" placeholder="Entrer votre Prenom & Nom">
                <br>
                <label>Email</label>
                <input type="email" id="email" class="tail-inpt" placeholder="Ex: odcsenagal@gmail.com">
                <br>
                <label>Mot de passe </label>
                <input type="password" id="password" class="tail-inpt" placeholder="Entrer votre mot de passe"><br>
                <label>Confirmer le mot de passe </label>
                <input type="password" id="confirmPassword" class="tail-inpt" placeholder="Confirmer votre mot de passe">
                <br>
                <button type="button" class="btnCmpt" id="btncmpt">Créer mon compte</button>
                <br>
                <div class="avanta">
                    <span class="lucide--circle-check-big"></span><span style="color: #F6960D; font-weight: 200;">Avantages gratuits:</span>
                    <ul class="list-disc ml-8">
                        <li>Réservations illimitées</li>
                        <li>Codes QR pour vos salles d’événements</li>
                        <li>Historique complet</li>
                    </ul>
                </div>
                <br>
                <div style="align-self: center;"><span>Vous avez déjà un compte?</span><span style="color: rgb(95, 57, 4); font-weight: bold; cursor: pointer;" id="cnect">Se connecte</span></div>
                <br><br>
                <div style="align-self: center; cursor: pointer;" id="retour"><span class="formkit--arrowleft"></span><span>Retour à l'accueil</span></div>
            </div>
        </div>
    `;
};

async function inscrire() {
    const utilisateur = {
        id: Date.now(),
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim().toLowerCase(),
        password: document.getElementById('password').value.trim(),
        confirmPassword: document.getElementById('confirmPassword').value.trim(),
        role: 'client'
    };

    if (!utilisateur.nom || !utilisateur.email || !utilisateur.password || !utilisateur.confirmPassword) {
        alert('Veuillez remplir tous les champs');
        return null;
    }

    if (utilisateur.password !== utilisateur.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return null;
    }

    try {
        const responseUsers = await fetch('http://localhost:3000/users');
        if (!responseUsers.ok) {
            throw new Error('Impossible de charger les utilisateurs');
        }

        const users = await responseUsers.json();
        const emailExiste = users.some((u) => u.email === utilisateur.email);

        if (emailExiste) {
            alert('Cette adresse email existe déjà');
            return null;
        }

        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: utilisateur.id,
                nom: utilisateur.nom,
                email: utilisateur.email,
                password: utilisateur.password,
                role: utilisateur.role
            })
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'inscription');
        }

        alert('Inscription réussie');
        return (utilisateur);
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'inscription');
        return null;
    }
}

Inscription.afterRender = () => {
    const btncmpt = document.getElementById('btncmpt');
    const retour = document.getElementById('retour');
    const cnect = document.getElementById('cnect');

    btncmpt?.addEventListener('click', async () => {
        const user = await inscrire();
        if (user) {
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/client');
            }
        }
    });

    retour?.addEventListener('click', () => navigate('/'));
    cnect?.addEventListener('click', () => navigate('/connexion'));
};

export default Inscription;