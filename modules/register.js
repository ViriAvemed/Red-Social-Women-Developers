let Register = {
    render : async () => {
        let view =  `
  <div class="container backLogin">
                <div class="row">
                    <div class="ccolumna col-lg-6 col-sm-12 d-flex justify-content-center"><img class="logo" src="img/logo.png" alt=""></div>                
                </div>
  
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><p style="font-size: 25px"> Registrate</p></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><a href="#login"> <i style="background: #C35B50" class="icon-left-circled"></i> </a></div>                
                </div>
                
                <div class="row">
                    <div class="ccolumna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><input type="text" id="nameRegister" placeholder="Nombre completo"></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"> <span id="nameInvalid"></span></div>                
                </div>
                
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><input type="email" id="registerEmail" placeholder="Correo electrónico"></div>  
                </div> 
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login" > <span id="emailInvalid"></span></div>               
                </div>
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login" ><input type="password" id="registerPassword" placeholder="Tu contraseña debe tener más de seis carácteres"></div>                
                </div>
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><span id="passwordInvalid"></span></div>                
                </div>      
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><input type="password" id="confirmPasswordRegister" placeholder="Confirmar Contraseña"></span></div>                
                </div>   
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><span id="passwordDifferent"></span></div>                
                </div>   
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><button id="createUser">Crear cuenta</button></div>                
                </div>   
                <div class="row">
                    <div class="columna col-lg-6 col-sm-12 d-flex justify-content-center contenedor-login"><span id="sentEmailVerify"></span></div>                
                </div>        
            </div>

        `;
        return view
    },
    after_render : async () => {

        const idName = document.getElementById("nameRegister");
        const idEmail = document.getElementById("registerEmail");
        const idPassword = document.getElementById("registerPassword");
        const idConfirmPassword = document.getElementById("confirmPasswordRegister");

        const spanName = document.getElementById("nameInvalid");
        const spanEmail = document.getElementById("emailInvalid");
        const spanPass = document.getElementById("passwordInvalid");
        const spanPassConfirm = document.getElementById("passwordDifferent");
        const sentEmail = document.getElementById("sentEmailVerify");

        const btnRegister = document.getElementById("createUser");

        const registerUser =()=>{

            let name = idName.value;
            let email = idEmail.value;
            let password = idPassword.value;
            let confirmPassword = idConfirmPassword.value;

            if (name === ""){
                spanName.innerHTML="No olvides ingresar tu nombre";
                return;
            }

            if(email.length < 6){
                spanEmail.innerHTML = "Tu email no es válido";
                return;
            }

            if(password.length < 6){
                spanPass.innerHTML = "Tu contraseña debe tener más de ses caracteres";
                return;
            }

            if(password !== confirmPassword){
                spanPassConfirm.innerHTML = "Tu contraseña es diferente";
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function () {
                    verifyEmail();
                })
                .catch(function(error) {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });

        };

        const verifyEmail =()=>{
            const user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                sentEmail.innerHTML ="Se ha enviado un mensaje de confirmación tu correo eléctronico.";
            }).catch(function (error) {
                console.log(error);
            });

        };

        btnRegister.addEventListener("click", registerUser);
    }


};
export default Register;
