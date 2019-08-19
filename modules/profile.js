let Profile = {
    render : async () => {
        let view = `
        <section class="profileDataTable" id="profileData">
          <div class="container"> 
            <h1>Mi perfil</h1>
            <label for="profileName">Nombre</label>
            <h3 id="profileName"></h3>
            <label for="profileEmail">Email</label>
            <h3 id="profileEmail"></h3>
            <a class="btn" id="profileEdit" href="#"><i>Editar</i></a> 
          </div>
       </section>
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