let Login = {
    render : async () => {
        let view = /* html */ `
            <h1>LOGIN </h1>
            <input type="text" id="emailLogin" placeholder="Correo electrónico">
            <input type="text" id="passwordLogin" placeholder="Contraseña">
            <button id="access">Ingresar</button>
            <button id="enterWithGoogle">Iniciar con Google</button>
            <p>¿Eres nueva? <a href = "./#/register">REGISTRATE</a> </p>
        `;
        return view
    },
    after_render : async () => {

        const idEmailLogin = document.getElementById("emailLogin");
        const idPassLogin = document.getElementById("passwordLogin");
        const btnAccess = document.getElementById("access");
        const btnLoginGoogle = document.getElementById("enterWithGoogle");

        const loginUser =()=> {
            let emailLo = idEmailLogin.value;
            let passwordLo = idPassLogin.value;

            firebase.auth().signInWithEmailAndPassword(emailLo, passwordLo)

                .catch(function(error) {

                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                    console.log(errorMessage);

            });
        };

        const loginGoogle =()=>{
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(user){
                console.log("Iniciando con tu cuenta de google");
            }).catch(function(error){
                console.log(error);
            })
        };

        const observatory =() =>{ //verifica si el usuario entro a su cuenta
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("Existe usuario activo");
                    const displayName = user.displayName;
                    const email = user.email;
                    const emailVerified = user.emailVerified;
                    console.log(user.emailVerified);
                    const photoURL = user.photoURL;
                    const isAnonymous = user.isAnonymous;
                    const uid = user.uid;
                    const providerData = user.providerData;

                } else {
                    // User is signed out.
                    console.log("No existe usuario activo");
                }
            });
        };
        observatory();

        btnAccess.addEventListener("click", loginUser);
        btnLoginGoogle.addEventListener("click", loginGoogle);
    }
};


export default Login;