let Navbar = {
    render : async () => {
        let view = `
        <nav>
            <ul>
                <li><a href = "./#/profile/">PERFIL</a></li> 
                <li><a href = "./#/wall/">MURO</a></li>
                <li><a href = "./#/groups/">GRUPOS</a></li>
                <li id="signOff"><a href = "./#/">CERRAR SESIÓN</a></li>
            </ul>
        </nav>
            
        `;
        return view
    },
    after_render : async () => {

        const btnCloser = document.getElementById("signOff");

        const singOut =()=>{
            firebase.auth().signOut()
                .then(function() {
                console.log("saliendo...")
            }).catch(function(error) {
                console.log(error)
            });
        };

        btnCloser.addEventListener("click", singOut);
    }
};

export default Navbar;