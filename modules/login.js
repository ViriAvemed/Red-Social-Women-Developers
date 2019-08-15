let Login = {
    render: async () => {
        let view = `
            <h1>LOGIN </h1>
            <input type="text" id="emailLogin" placeholder="Correo electrónico">
            <input type="password" id="passwordLogin" placeholder="Contraseña">
            <button id="access">Ingresar</button>
            <button id="enterWithGoogle">Iniciar con Google</button>
            <p>¿Eres nueva? <a href = "./#/register">REGISTRATE</a> </p>

            <div class="singin-socialnetwork">
              <p class="siginwith"> ó </p>
              <div class="social-icons">
                 <a class="btn" id="idbtnfacebook" href="#">btnfacebook<i class="fab fa-facebook"></i></a>
                 <a class="btn" id="idbtngithub" href="#">btngithub<i class="fab fa-github"></i></a>
              </div>
            </div>
        `;
        return view
    },
    after_render: async () => {

        const idEmailLogin = document.getElementById("emailLogin");
        const idPassLogin = document.getElementById("passwordLogin");
        const btnAccess = document.getElementById("access");
        const btnLoginGoogle = document.getElementById("enterWithGoogle");
        const btnfacebook = document.getElementById("idbtnfacebook");
        const btngithub = document.getElementById("idbtngithub");

        const loginUser = () => {
            let emailLo = idEmailLogin.value;
            let passwordLo = idPassLogin.value;

            firebase.auth().signInWithEmailAndPassword(emailLo, passwordLo)
                .then((user) => {
                    console.log("Iniciando con tu cuenta de google");
                    sessionStorage.setItem('sesion', "true");

                    if (user.user.emailVerified) {
                        window.location = "/WOMENDEV-SocialNetworkProject/#/wall";
                    }

                }).catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);

                });
        };

        const loginGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then((user) => {
                    console.log("Iniciando con tu cuenta de google");
                    sessionStorage.setItem('sesion', "true");


                    if (user.user.emailVerified) {
                        window.location = "/WOMENDEV-SocialNetworkProject/#/wall";
                    }

                }).catch((error) => {
                    console.log(error);
                })
        };

        //Login Facebook
        const loginFacebook = () => {
            let provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('public_profile');
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    const token = result.credential.accessToken;
                    const userData = result.user;


                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const credential = error.credential;
                    console.log(errorMessage);
                    console.log(errorCode);
                });

        };

        //Login GitHub
        const loginGitHub = () => {
            let provider = new firebase.auth.GithubAuthProvider();
            /*provider.addScope('repo');*/
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    const token = result.credential.accessToken;
                    const userData = result.user;

                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const credential = error.credential;
                    //console.log(errorMessage);
                    //console.log(errorCode);
                });
        };


        const authenticationObserver = () => {
            firebase.auth().onAuthStateChanged(function (user) {
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
            })
        };
        authenticationObserver();

        btnAccess.addEventListener("click", loginUser);
        btnLoginGoogle.addEventListener("click", loginGoogle);
        btnfacebook.addEventListener("click", loginFacebook);
        btngithub.addEventListener("click", loginGitHub);
    }
};

export default Login;