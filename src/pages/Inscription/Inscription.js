import { navigate } from "../../../router.js";
import { data, updateDb } from '../../../services.js';

const Inscription = () => {

    return `
    
        <div class="rien page-container dpl">
            <div class="inscrip">
                <img src="./Assets/Images/Frame 1.png" class="img1">
                <h2 class="talc text-2xl font-bold text-[#1E1E1E]">Inscription</h2>
                <p style="align-self: center;">Créez votre compte gratuitement</p>
                                    <br>
                <label>Nom complet</label>
                <input type="text" id="nom" class="tail-inpt" placeholder="Entrer votre  Prenom & Nom">
                <br>
                <label>Email</label>
                <input type="email" id="email" class="tail-inpt" placeholder="Ex: odcsenagal@gamail.com">
                <br>
                <label>Mot de passe </label>
                <input  type="password" id="password" class="tail-inpt" placeholder="Enrer votre mot de passe"><br>

                <label> Confirmer le mot de passe </label>
                <input type="password" id="confirmPassword" class="tail-inpt" placeholder="Confirmer votre mot de passe">
                <br>
                <button class="btnCmpt" id="btncmpt">Créer mon compte</button>
                 <br>
                <div class="avanta">
                    <span class="lucide--circle-check-big"></span><span style="color: #F6960D; font-weight: 200;">Avantages gratuits:</span>
                    <ul class="list-disc ml-8">
                        <li>Réservations illimitées</li>
                        <li>Codes QR pour vos salles d’ événements</li>
                        <li>Historique complet</li>
                    </ul>
                </div>
                 <br>
                <div style="align-self: center; "><span>Vous avez déjà un compte?</span><span style="color: rgb(95, 57, 4); font-weight: bold;" id="cnect">Se connecte</span></div>
                <br> <br>
                <div style="align-self: center;" id="retour" ><span class="formkit--arrowleft"></span><span>Retour à l'accueil</span></div>

            </div>
        </div>

    `;
};


function inscrire() {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (nom === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Veuillez remplir tous les champs');
        return null;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return null;
    }

    if (!data || !Array.isArray(data.users)) {
        alert('Les données ne sont pas encore chargées, réessayez.');
        return null;
    }

    if (data.users.some(user => user.email === email)) {
        alert('Cet email est déjà utilisé');
        return null;
    }

    const newUser = {
        id: Date.now(),
        nom,
        email,
        password,
        role: 'client'
    };
    updateDb(newUser, "users");
    alert('Compte cree avec succes');
    return newUser;
}

Inscription.afterRender = () => {
    const btncmpt = document.getElementById('btncmpt');
     const retour= document.getElementById('retour');
     const cnect = document.getElementById('cnect');
 
     btncmpt?.addEventListener('click', () => {
        const user = inscrire();
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