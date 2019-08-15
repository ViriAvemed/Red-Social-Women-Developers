let Navbar = {
    render : async () => {
        let view = /* html */ `
        <nav id="nav">
            <ul>
                <li><a href = "./#/profile/">PERFIL</a></li> 
                <li><a href = "./#/wall/">MURO</a></li>
                <li><a href = "./#/groups/">GRUPOS</a></li>
               <li></li> <button id="closer">CERRAR SESIÓN</li>
            </ul>
        </nav>
            
        `;
        return view
    },
    after_render : async () => {

        const btnCloser = document.getElementById("closer");

        const singOut =()=>{
            firebase.auth().signOut()
                .then(function() {
                console.log("cerraste sesión ");
                    sessionStorage.clear();
                    window.location = "/WOMENDEV-SocialNetworkProject/#/";
                    document.getElementById("nav").style.display = "none";
            }).catch(function(error) {
                console.log(error)
            });
        };

        btnCloser.addEventListener("click", singOut);
    }
};

export default Navbar;


