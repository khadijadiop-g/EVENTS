const container = document.querySelector('.page-container');

function recupererUtilisateurs() {
    const utilisateurs = localStorage.getItem('utilisateurs');

    if (!utilisateurs) {
        return [];
    }

    try {
        const data = JSON.parse(utilisateurs);
        return Array.isArray(data) ? data : [];
    } catch (error) {
        localStorage.removeItem('utilisateurs');
        return [];
    }
}

function enregistrerUtilisateurs(utilisateurs) {
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
}

function inscrire() {
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (nom === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }

    const utilisateurs = recupererUtilisateurs();
    const emailExiste = utilisateurs.find(utilisateur => utilisateur.email === email);

    if (emailExiste) {
        alert('Cet email existe deja');
        return;
    }

    const nouvelUtilisateur = {
        id: Date.now(),
        nom: nom,
        email: email,
        password: password,
        role: 'client'
    };

    utilisateurs.push(nouvelUtilisateur);
    enregistrerUtilisateurs(utilisateurs);

    alert('Compte cree avec succes. Connectez-vous maintenant.');
    afficherConnexion();
}

function afficherConnexion() {
    container.className = 'rien page-container dpl';
    container.innerHTML = `
        <div class="connex inscrip">
            <img src="Frame 1.png" class="img1">
            <h2 class="talc text-2xl font-bold text-[#1E1E1E]">Connexion</h2>
            <p style="align-self: center;">Acceder a votre compte</p>
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

            <div style="align-self: center;">
                <span class="formkit--arrowleft"></span>
                <span>Retour a l'accueil</span>
            </div>
        </div>
    `;
}

function connecter() {
    const email = document.getElementById('emailConnexion').value.trim().toLowerCase();
    const password = document.getElementById('passwordConnexion').value.trim();

    if (email === '' || password === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }

    const utilisateurs = recupererUtilisateurs();
    const utilisateurTrouve = utilisateurs.find(utilisateur => {
        return utilisateur.email === email && utilisateur.password === password;
    });

    if (!utilisateurTrouve) {
        alert('Email ou mot de passe incorrect');
        return;
    }

   if(utilisateurTrouve.role === "admin"){

    alert("Connexion administrateur");

    afficherDashboardAdmin(utilisateurTrouve);

}else{

    alert("Connexion client");

    afficherDashboard(utilisateurTrouve);

}
}

function afficherInscription() {
    location.reload();
}

function afficherDashboard(utilisateur) {
    container.className = 'rien';
    container.innerHTML = `
        <div style="height: 100vh;">
            <nav class="barre">
                <div style="flex: 5; margin-left: 2%;">
                    <img src="Frame 1.png" class="img1">
                </div>

                <div style="flex: 1; justify-content: end;" class="dpl">
                    <div style="height: 45px; width: 45px; border-radius: 50%; background-color: #F7D6A7;" class="dpl">
                        <span class="mdi--user"></span>
                    </div>
                    &nbsp;&nbsp;&nbsp;${utilisateur.nom}
                </div>

                <div style="flex: 1; color: #FF2020; cursor: pointer;" class="dpl" id="deconnexion">
                    <span class="iconamoon--exit-light"></span>Deconnexion
                </div>
            </nav>

            <div class="container2 dpl">
                <div class="bord">
                    <div style="flex: 1; line-height: 1.4; padding-top: 3%;">
                        <h2 class="text-2xl font-bold text-[#1E1E1E]">Bienvenue, ${utilisateur.nom}</h2>
                        <p style="color: #1E1E1E; opacity: 71%;">Gerez vos reservations d'evenements</p>
                    </div>

                    <div style="flex: 2; display: flex; gap: 2%;">
                        <div class="col" style="background-color: #f8ecda;">
                            <div class="text1"><span class="lucide--calendar"></span></div>
                            <div class="text2">0</div>
                            <div class="text3">Totals reservations</div>
                        </div>

                        <div class="col" style="background-color: #F7D6A7;">
                            <div class="text1"><span class="carbon--qr-code"></span></div>
                            <div class="text2">0</div>
                            <div class="text3">Confirmees</div>
                        </div>

                        <div class="col" style="background-color: #FEAE39;">
                            <div class="text1"><span class="tdesign--money"></span></div>
                            <div class="text2">0</div>
                            <div class="text3">Totals reservations</div>
                        </div>
                    </div>

                    <div style="flex: 5; background-color: #FEEBD0; border-radius: 10px; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.20); display: flex; flex-direction: column; padding: 2%;">
                        <div class="flex-1 flex relative">
                            <span class="pepicons-pop--rewind-time"></span>
                            <span class="absolute top-1 left-10 font-semibold text-xl">Mes reservations (0)</span>
                            <button class="bg-[#FEAE39] w-[200px] h-[40px] rounded-[6px] absolute right-0 font-bold">+ Nouvelle reservation</button>
                        </div>
                        <div class="flex-[4]"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

container.addEventListener('click', (event) => {
    if (event.target.id === 'btncmpt') {
        inscrire();
    }

    if (event.target.id === 'cnect') {
        afficherConnexion();
    }

    if (event.target.id === 'btnConnexion') {
        connecter();
    }

    if (event.target.id === 'retourInscription') {
        afficherInscription();
    }

    if (event.target.id === 'deconnexion') {
        afficherConnexion();
    }

    if(event.target.id === "voirUtilisateurs"){

    afficherUtilisateurs();

}
});


function initialiserAdmin() {

    const utilisateurs = recupererUtilisateurs();

    const adminExiste = utilisateurs.find(
        user => user.role === "admin"
    );

    if (!adminExiste) {

        utilisateurs.push({
            id: 1,
            nom: "Administrateur",
            email: "admin@gmail.com",
            password: "admin123",
            role: "admin"
        });

        enregistrerUtilisateurs(utilisateurs);
    }
}

initialiserAdmin();

function afficherDashboardAdmin(admin){

    container.className = "rien";

    container.innerHTML = `
    
<div class="admin" style="height: 100vh;">
                <nav class="barre">
                    <div style="flex: 5; margin-left: 2%;"><img src="Frame 1.png" class="img1"></div>
                    <div style="flex: 1;justify-content: end;" class="dpl"><div style="height: 45px;width: 45px;border-radius: 50%; background-color: #F7D6A7;" class="dpl"><span class="mdi--user"></span></div>&nbsp;&nbsp;&nbsp;Admin</div>
                    <div style="flex: 1;color: #FF2020;" class="dpl"><span class="iconamoon--exit-light"></span>Deconnexion</div>
                </nav>
                    <div class="container2 dpl ">
                        <div class="bord">
                        <div style="flex: 1;line-height: 1.4; padding-top: 3%;">
                            <h2 class="text-2xl font-bold text-[#1E1E1E]">Tableau de bord administrateur</h2>
                            <p style="color: #1E1E1E; opacity: 71%;">Vue d'ensemble de toutes les réservations</p>
                        </div>
                        <div style="flex: 2; display: flex; gap: 2%;">
                            <div class="col" style="background-color: #f8ecda;">
                                <div class="text1"><span class="lucide--calendar"></span></div>
                                <div class="text2">0</div>
                                <div class="text3">Totals réservations</div>
                            </div>
                            <div class="col" style="background-color: #F7D6A7;">
                                <div class="text1"><span class="material-symbols--check-circle-outline-rounded"></span></span></div>
                                <div class="text2">0</div>
                                <div class="text3">Confirmées</div>
                            </div>
                            <div class="col" style="background-color: #FBC270;">
                                <div class="text1"><span class="carbon--time"></span></div>
                                <div class="text2">0</div>
                                <div class="text3">En attente</div>
                            </div>
                            <div class="col"  style="background-color: #FEAE39;">
                                <div class="text1"><span class="fluent--arrow-growth-24-filled"></span></div>
                                <div class="text2">0</div>
                                <div class="text3">Totals réservations</div>
                            </div>
                        </div>
                        <div style="flex: 3;background-color: #FEEBD0; border-radius: 10px;box-shadow: 0 3px 4px rgba(0, 0, 0, 0.20); display: flex; flex-direction: column; padding: 4% 2%; gap: 40%;">
                            <div class="case1">
                                <span class="line-md--filter absolute top-0 left-0"></span>
                                <span class="absolute top-0 left-8 font-bol text-2xl ">Filtrer les réservations</span>
                                <span class="absolute top-0 right-0 font-bold text-xl text-[#7E5111]">Réinitialiser</span>
                            </div>
                            <div class="case2">
                                <div class="case3">
                                    <div class="absolute text-[#363636]">Type d'événement</div>
                                    <input type="text" name="" id="" class="absolute top-7 w-[100%] h-[30px] rounded-[6px] bg-[#F7D6A7] border text-center" placeholder="Tous les types">
                                </div>
                                <div class="case3">
                                    <div class="absolute text-[#363636]">Date</div>
                                    <input type="text" name="" id="" class="absolute top-7 w-[100%] h-[30px] rounded-[6px] bg-[#F7D6A7] border text-center" placeholder="jj/mm/aaaa">
                                </div>
                                <div class="case3">
                                    <div class="absolute text-[#363636]">Lieu</div>
                                    <input type="text" name="" id="" class="absolute top-7 w-[100%] h-[30px] rounded-[6px] bg-[#F7D6A7] border text-center" placeholder="Rechercer un lieu...">
                                </div>
                                <div class="case3">
                                    <div class="absolute text-[#363636]">Prix maximum</div>
                                    <input type="number" name="" id="" class="absolute top-7 w-[100%] h-[30px] rounded-[6px] bg-[#F7D6A7] border text-center" placeholder="Ex:500000">
                                </div>
                            </div>
                        </div>
                        <div style="flex: 5; background-color: #FEEBD0; border-radius: 10px;box-shadow: 0 3px 4px rgba(0, 0, 0, 0.20); display: flex; flex-direction: column; padding: 2%;">
                            <div class="flex-1 flex relative">
                                <span class="ph--users"></span>
                                <span class="absolute top-1 left-10 font-semibold text-xl ">Toutes les réservations (0)</span>
                                <button class="bg-[#FEAE39] w-[200px] h-[40px] rounded-[6px] absolute right-0 font-bold">+ Nouvelle réservation</button>
                            </div>
                            <div class="flex-[4]">
                                <table  cellpadding="10" cellspacing="2" width="100%">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>CLIENT</th>
                                        <th>ÉVÉNEMENT</th>
                                        <th>DATE</th>
                                        <th>LIEU</th>
                                        <th>INVITÉS</th>
                                        <th>PRIX</th>
                                        <th>STATUT</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                            </table></div>
                        </div>
                        </div>
                    </div>

            </div>

    `;
}

function afficherUtilisateurs(){

    const utilisateurs = recupererUtilisateurs();

    const liste =
    document.getElementById("listeUtilisateurs");

    liste.innerHTML = "";

    utilisateurs.forEach(user => {

        liste.innerHTML += `
        
        <div style="
            border:1px solid #ccc;
            margin:10px;
            padding:10px;
        ">
            <p><b>Nom :</b> ${user.nom}</p>
            <p><b>Email :</b> ${user.email}</p>
            <p><b>Role :</b> ${user.role}</p>
        </div>
        
        `;

    });

}