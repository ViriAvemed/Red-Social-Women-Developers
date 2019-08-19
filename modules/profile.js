let Profile = {
    render : async () => {
        let view = `
<<<<<<< HEAD
           
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
                    <p class="">Tengo 27 años.</p>
                </div>
             </div>
             <div class="row">
                <div class="col d-flex justify-content-center">
                    <p class="">Soy estudiante en Laboratoria</p>
                </div>
             </div>

        `;
        return view

    }, 
    after_render : async () => {
        //Agrega biografía a perfil de usuario
    const addBiography = (textBio) => {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref(`profile/${uid}/biography`).set({
          texto: textBio
        });
        console.log('Agregado??');
      };
  
      //Verifica si hay una biografía en la data
      const searchForBiography = (textBio) => {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref(`profile/${uid}/biography`).once('value')
          .then(function (snapshot) {
            textBio(snapshot.val());
            // console.log(snapshot.val());
          })
      };
    }
};

export default Profile;