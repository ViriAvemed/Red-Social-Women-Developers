let Login = {
    render: async () => {
        let view = `
            <div class="row d-flex justify-content-center">
                <div class="col-6 d-md-none  d-lg-block" style="display: none;">
                <figure>
                    <img class="img-home" src="img/background.jpg" alt="Imagen de inicio">
                </figure>
                
            </div>
                <div class="col-lg-6 col-sm-12">
                <div class="container backLogin">
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center font-weight-bold" style="padding-top: 10%; padding-bottom: 0; margin-bottom: 0;"> 
                         <p style="font-size: 3em; color: #C35B50; ">WOMEN</p> 

                     </div>                
                </div>
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center font-weight-bold"> 
                         <p style="font-size: 3em; color:#C35B50;">DEVELOPERS</p> 

                     </div>                
                </div>
                
                <div class="row">
                    <div class="columna  col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"><p style="font-size: 25px"> Inicia sesión</p></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"><input type="text" class="inputLogin" id="emailLogin" placeholder="Correo electrónico"></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"><input type="password" class="inputPassword" id="passwordLogin" placeholder="Contraseña"></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"> <button id="access">Ingresar</button></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"><button id="enterWithGoogle">Iniciar con Google</button></div>  
                </div> 
<!--                <div class="row">-->
<!--                    <a class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login" id="idbtnfacebook" href="#"><i class="icon-facebook"></i>Iniciar con Facebook</a>               -->
<!--                </div>-->
<!--                <div class="row">-->
<!--                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login" id="idbtngithub"href="#"><i class="icon-github-circled-alt2"></i>Iniciar con Github</a></div>                -->
<!--                </div>-->
                <div class="row">
                    <div class="columna col-sm-12 col-lg-9 d-flex justify-content-center contenedor-login"><p>¿Eres nueva?<a style="color: cornflowerblue;" href = "./#/register"> -- REGISTRATE</a> </p></div>                
                </div>           
                
            </div>
            </div>
            </div>
            <footer class="footer">
               <p>Women Developers © 2019</p>
            </footer>
            
            
                           
      
            
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
            if (!firebaase.auth().currentUser){
                let provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope('user_birthday');
                firebase.auth().signInWithPopup(provider)
                    .then((result) => {
                        console.log("Iniciando con tu cuenta de facebook");
                        sessionStorage.setItem('sesion', "true");
                        const token = result.credential.accessToken;
                        const user = result.user;
                        document.getElementById('idbtnfacebook').textContent = token;

                        /*if(user.user.emailVerified){
                            window.location="/WOMENDEV-SocialNetworkProject/#/profile";}*/

                    }).catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const credential = error.credential;
                    // console.log(errorMessage);
                    // console.log(errorCode);
                    if (errorCode === 'auth/account-exists-with-different-credential') {
                        alert('You have already signed up with a different auth provider for that email.');
                    } else {
                        console.error(error);
                    }
                });
            } else {
                firebase.auth().singOut();
            }
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
