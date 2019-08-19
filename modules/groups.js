let Groups = {
    render : async () => {
        let view = `

           <main class="container">
            <div class="row">
<!--            Barra lateral izquierda-->
                <div class="col-md-3 barra-lateral-izquierda d-none d-lg-block" >
                    <nav>
                        <a href="#"><i class="icon-users"></i>Mis grupos</a>
                        <a href="#"><i class="icon-bell-alt"></i>Mis eventos</a>
                        <a href="#"><i class="icon-chat"></i>Mensajes privados</a>
                        <a href="#"><i class="icon-user-add"></i>Amigos</a>
                        <a href="#"><i class="icon-share-1"></i>Mis redes sociales</a>
                    </nav>
                
                </div>
                
                <a href="#" class="fondo-enlace-d-md-none" id="fondo-enlace"></a>
                
<!--                contenido principal-->
                <div class="col contenido-principal">
                        
                            <div class="row">
                                 <div class="col d-flex justify-content-center">
                                    <h1 class="misGrupos"> MIS GRUPOS</h1>
                                </div>
                            </div>
                            <div class="row">
                                  <div class="col d-flex justify-content-center "><a class="grupos" href="">#Mujeres aprendiento Phyton</a></div>                
                           </div>
                           <div class="row">
                                  <div class="col d-flex justify-content-center"><a class=" grupos" href="">#Node JS CDMX</a></div>                
                           </div>
                           <div class="row">
                                  <div class="col d-flex justify-content-center "><a class="grupos" href="">#Javascript</a></div>                
                           </div>
                                         
                </div>

<!--                Barra lateral derecha-->
                <div class="col-3 barra-lateral-derecha d-none d-lg-block">
                    <h3>Publicidad</h3>
                    <div class="ads">
                        <a href="#"><img src="img/publicidad1.PNG" width="300" alt=""></a>
                        <a href="#"><img src="img/publicidad2.PNG" width="300" alt=""></a>
                        <a href="#"><img src="img/publicidad3.PNG" width="300" alt=""></a>
                    </div>
                    
                    <footer>
                        <a class="textF" href="#">Privacidad </a>
                        <a class="textF" href="#">Condiciones </a>
                        <a class="textF" href="#">Ayuda </a>
                        <p class="copyright">Womendevs © 2019 </p>
                        
                    </footer>
                
                </div>  
            </div>
        </main>

        `;
        return view
    },
    after_render : async () => {}
};
export default Groups;