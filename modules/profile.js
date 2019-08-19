let Profile = {
    render : async () => {
        let view = `
           
             <div class="row">
                <div class="col d-flex justify-content-center">
                    <h1 class="misGrupos">Cristina Suárez</h1>
                </div>
             </div>
             <div class="row">
                 <div class="col d-flex justify-content-center  ">
                    <img class="fotoPerfil" src="img/persona2.png" alt="">
                 </div>
            </div>
            
            <div class="row">
                <div class="col d-flex justify-content-center">
                    </p><i class="icon-pencil"></i>
                </div>
             </div>
             <div class="row">
                <div class="col d-flex justify-content-center">
                    <p class=""> Vivo en CDMX, México</p>
                </div>
             </div>
             <div class="row">
                <div class="col d-flex justify-content-center">
                    <p class="">Tengo 30 años.</p>
                </div>
             </div>
             <div class="row">
                <div class="col d-flex justify-content-center">
                    <p class="">Soy estudiante en Laboratoria</p>
                </div>
             </div>
        `;
        return view

    }, after_render : async () => {}
};

export default Profile;