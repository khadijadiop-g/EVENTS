import { navigate } from '../../../router.js';
const Admin = () => {

    return `
    
       <div class="admin" style="height: 100vh;">
                <nav class="barre">
                    <div style="flex: 5; margin-left: 2%;"><img src="./Assets/Images/Frame 1.png" class="img1"></div>
                    <div style="flex: 1;justify-content: end;" class="dpl"><div style="height: 45px;width: 45px;border-radius: 50%; background-color: #F7D6A7;" class="dpl"><span class="mdi--user"></span></div>&nbsp;&nbsp;&nbsp;Admin</div>
                    <div style="flex: 1;color: #FF2020;" class="dpl" id="deconnexion"><span class="iconamoon--exit-light"></span>Deconnexion</div>
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
                                <div class="text1"><span class="material-symbols--check-circle-outline-rounded"></span></div>
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
};

Admin.afterRender = () => { 
    const deconnexion = document.getElementById('deconnexion');
    deconnexion?.addEventListener('click', () => {
        // localStorage.removeItem('currentUser');
        navigate('/');
    });
}

export default Admin;