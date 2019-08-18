let Navbar = {
    render : async () => {
        let view = /* html */ `
<!--       <header>-->
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-auto d-none d-md-block logo">
                          <a href="#"><img src="img/logo.png" alt="" > </a>
                    </div>
                    <div class="col-12 col-sm-8 col-lg-6 order-2 order-sm-1 buscar mb-2 mb-sm-2">
                            <form action="">
                                <div class="row no-gutters">
                                    <div class="col-10">
                                        <input type="text" name="" id="" placeholder="Buscar publicaciones antiguas">                      
                                    </div>
                                    <div class="col-2">
                                        <button><i class="icon-search"></i> </button>
                                    </div>   
                                </div>                
                            </form>
                        </div>
                        <nav id="nav" class="col-12 col-sm-3 col-lg-2 order-1 order-md-2 menu d-flex justify-content-between ml-auto mb-2 mb-sm-0">
                            <a href = "./#/wall/"><i class="icon-doc"></i></a>
                            <a href = "./#/groups/"><i class="icon-users"></i></a>
                            <a href = "./#/profile/" class="imagen"><img  src="img/usuariofoto.jpg" alt="" width=20px></a>
                            <a href="#" id="closer"><i class="icon-logout-1"></i></a>
                        </nav>
                </div>
           </div>
      </header>
<!--    </header>-->
            
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


