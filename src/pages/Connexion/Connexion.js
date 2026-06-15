import { navigate } from "../../../router.js";


const Connexion = () => {

    return `
    <div class="page-container dpl">
        <div class="connex inscrip">
           <img src="./Assets/Images/Frame 1.png" class="img1">
            <h2 class="talc text-2xl font-bold text-[#1E1E1E]">Connexion</h2>
            <p style="align-self: center;">Acceder a votre compte</p>
            <br>

            <label>Email</label>
            <input type="email" id="emailConnexion" class="tail-inpt" placeholder="Ex: odcsenagal@gmail.com">
            <br>

            <label>Mot de passe</label>
            <input type="password" id="passwordConnexion" class="tail-inpt" placeholder="Entrer votre mot de passe">
            <br>

            <select class="tail-inpt" id="roleConnexion">
                <option value="client">Client</option>
                <option value="admin">Admin</option>
            </select>
            <br>


            <button class="btnCmpt" id="btnConnexion">Se connecter</button>
            <br>

            <div style="align-self: center;">
                <span>Vous n'avez pas de compte?</span>
                <span style="color: rgb(95, 57, 4); font-weight: bold; cursor: pointer;" id="retourInscription">S'inscrire</span>
            </div>
            <br><br>

            <div style="align-self: center;" id="retour" >
                <span class="formkit--arrowleft"></span>
                <span>Retour a l'accueil</span>
            </div>
        </div>
        </div>  

    `;
};

Connexion.afterRender = () => {
    const btnConnexion = document.getElementById('btnConnexion');
    const retour = document.getElementById('retour');
    const retourInscription = document.getElementById('retourInscription');
    const roleConnexion = document.getElementById('roleConnexion');

    btnConnexion?.addEventListener('click', () => {
        alert('1')
        navigate('/client')
    //    const utilisateur = connecter(roleConnexion?.value || 'client');
    //    if (utilisateur) {
    //        utilisateur.role === 'admin' ? navigate('/admin') : navigate('/client');
    //    }
    });
    retourInscription?.addEventListener('click', () => navigate('/inscription'));

    retour?.addEventListener('click', () => navigate('/'));
};

function connecter() {
    const email = document.getElementById('emailConnexion').value.trim().toLowerCase();
    const password = document.getElementById('passwordConnexion').value.trim();

    if (email === '' || password === '') {
        alert('Veuillez remplir tous les champs');
        return null;
    }

    // Création d'un utilisateur temporaire pour la redirection (pas de stockage)
    // const utilisateur = {
    //     nom: email.split('@')[0] || 'Utilisateur',
    //     email,
    //     role
    // };

    alert('Connexion en cours...');
}

export default Connexion;