let Register = {
    render : async () => {
        let view =  `
            <h1>REGISTRO</h1>
            <a href="#login"> <img src="./img/anterior.png" > </a>
            <p> Crea tu cuenta aquí</p>
            <input type="text" id="nameRegister" placeholder="Nombre completo">
            <span id="nameInvalid"></span>
            
            <input type="email" id="registerEmail" placeholder="Correo electrónico">
            <span id="emailInvalid"></span>
            
            <input type="password" id="registerPassword" placeholder="Tu contraseña debe tener más de ses caracteres">
            <span id="passwordInvalid"></span>
            
            <input type="password" id="confirmPasswordRegister" placeholder="Confirmar Contraseña">
            <span id="passwordDifferent"></span>
            
            <button id="createUser">Crear cuenta</button><br><br>
            <span id="sentEmailVerify"></span>
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
                sentEmail.innerHTML ="Se ha enviado un mensaje a tu correo eléctronico. Por favor haz click en el vínculo para completar la verificación.";
            }).catch(function (error) {
               console.log(error);
                });

        };

        btnRegister.addEventListener("click", registerUser);
    }


};
export default Register;

