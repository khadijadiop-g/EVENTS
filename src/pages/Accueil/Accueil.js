import { navigate } from "../../../router.js";
const Accueil = () => {
    
    return`

    <div class="page-container2">
        <nav class="nav1">
            <button class="btn1 bg-transparent hover:bg-gray-100 border border-gray-300 text-center " id="goToLogin">Se Connecter</button>
            <button class="btn1 bg-[#F7D6A7] hover:bg-gray-100 border border-[rgba(136, 93, 32, 1)] text-center" id="goToins">S'inscrire</button>
        </nav>
        <div class="dpl accueil">
            <h2 class="text-2xl font-bold text-[#1E1E1E]">Organisez vos événements en toute simplicité</h2>
            <br>
            <p>De l'anniversaire au mariage, en passant par les événements professionnels, nous</p>
            <p> vous accompagnons pour créer des moments inoubliables.</p>
            <div class="exp">
                <div class="rond">
                    <div class="icone dpl"><span class="material-symbols--star-outline"></span></div>
                    <div class="txt1"> +500</div>
                    <div class="txt2">Évenements réussis</div>
                </div>
                <div class="rond">
                    <div class="icone dpl"><span class="tabler--users"></span></div>
                    <div class="txt1"> +1000</div>
                    <div class="txt2">Clients satisfaits</div>
                </div>
                <div class="rond">
                    <div class="icone dpl"><span class="icon-park-outline--local-two"></span></div>
                    <div class="txt1"> +50</div>
                    <div class="txt2">Lieux disponibles</div>
                </div>
            </div>
            <br> <br>
            <br> <br>

            <div class="serv dpl text-2xl font-bold text-[#1E1E1E]"><h2>Nos services</h2></div>
           <br> <br> 
           
            <div class="page-container3" id="events">
              <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/bague.jpg);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Mariage</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
                <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/bapteme.png);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Bapteme</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
                <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/gatau.jpg);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Anniversaire</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
                <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/funeraile.jpg);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Funeraille</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
                <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/communion.jpg);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Communion</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
                <div class="event">
                    <div class="icone2" style=" background-image: url(/Assets/Images/reunion.png);background-repeat: no-repeat;background-position: center;background-size: cover;"></div>
                    <div class="txt3">Reunion</div>
                    <div class="txt4">Réserver maintenant<span class="formkit--arrowright"></span></div>
                </div>
            </div>
        </div>

    </div>
`;
}

Accueil.afterRender = () => {
    const btn1 = document.getElementById('goToLogin');
    const btn2 = document.getElementById('goToins');
    const events= document.getElementById('events')

    btn1?.addEventListener('click',()=>{
        navigate('/connexion')
    })
     btn2?.addEventListener('click',()=>{
        navigate('/inscription')
    })

    events?.addEventListener('click', (event) => {
        const clickedCard = event.target.closest?.('.event');
        if (clickedCard) {
            navigate('/inscription');
        }
    });

   
};

export default Accueil;
