import { navigate } from '../../../router.js';

const Client = () => { 
    return `


        <div style="height: 100vh;">
            <nav class="barre">
                <div style="flex: 5; margin-left: 2%;">
                   <img src="./Assets/Images/Frame 1.png" class="img1">
                </div>

                <div style="flex: 1; justify-content: end;" class="dpl">
                    <div style="height: 45px; width: 45px; border-radius: 50%; background-color: #F7D6A7;" class="dpl">
                        <span class="mdi--user"></span>
                    </div>
                    &nbsp;&nbsp;&nbsp; 
                </div>

                <div style="flex: 1; color: #FF2020; cursor: pointer;" class="dpl" id="deconnexion">
                    <span class="iconamoon--exit-light"></span>Deconnexion
                </div>
            </nav>

            <div class="container2 dpl">
                <div class="bord">
                    <div style="flex: 1; line-height: 1.4; padding-top: 3%;">
                        <h2 class="text-2xl font-bold text-[#1E1E1E]">Bienvenue,</h2>
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
};

Client.afterRender = () => {
    const deconnexion = document.getElementById('deconnexion');
    deconnexion?.addEventListener('click', () => {
        navigate('/');
    });
};


export default Client;