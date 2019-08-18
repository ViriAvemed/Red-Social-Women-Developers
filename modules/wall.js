let Wall = {
    render: async () => {
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
                        <div class="publicar">
                            <div class="row">
                                                           
                            </div>
                            <div class="row">
                                <div class="col-auto foto">
                                    <a href="#">
                                        <img src="img/persona2.png" alt="">
                                    </a>
                                </div>
                                <div class="col">
                                    <form action="">
                                        <textarea  id="publicar" placeholder="¿Qué quieres compartir?"></textarea>
                                        <div class="contenedor-botones d-flex justify-content-between">
                                            <div class="media">
                                                <a href="#"><i class="icon-picture"></i></a>
                                                <a href="#"><i class="icon-camera"></i></a>
                                                <a href="#"><i class="icon-videocam"></i></a>
                                                <a href="#"><i class="icon-attach"></i></a>
                                            </div>    
                                            <div>
                                                <button id="id-postear" >Publicar</button>
                                             </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="publicacion">
                            <div class="row"></div>
                                <div class="col" >
                                    <div id="posting"></div>
                                </div>
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
    after_render: async () => {


        const db = firebase.firestore();
        const posts1 = document.getElementById("publicar");
        const posting = document.getElementById("posting");
        const btnPoster = document.getElementById("id-postear");





        //add comments
        const guardar = () => {
            const posts = posts1.value;
            db.collection("users").add({
                post: posts,
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    document.getElementById("publicar").value = "";
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                })
        };

        //Imprimir documentos

        db.collection("users").onSnapshot((querySnapshot) => {
            const posting = document.getElementById("posting");
            posting.innerHTML = "";
            querySnapshot.forEach((doc) => {
                posting.innerHTML += `
                <div id="posts">
                   <div  class="col-auto d-flex align-items-center justify-content-start foto">
                         <a id="pictureP" href="#"><img id="imgP" src="img/persona2.png" alt=""></a>
                         <a href="#" id="name" class="nombre">Cristina Suárez</a>
                         
                    </div>
                   
                    <p class="texto">${doc.data().post}</p>
                    <div class="caja-botones d-flex justify-content-between align-items-center">
                         <div>
                            <button class="btnLike"><i class="icon-heart-empty"></i></button>
                            <button class="btnLike"><i class="icon-chat-empty"></i></button>
                            <button class="btnLike"><i class="icon-share-2"></i></button>
                          </div>
                          <div class="col d-flex justify-content-end">
                            <p class="contador">1<i class="icon-heart"></i></p>
                            <button id="btnP" type="submit" class="delete-btn" data-id="${doc.id}"><i class="icon-trash"></i></button>
                            <button id="btnE" type="submit" class="btn-editar" data-id="${doc.id}"><i class="icon-edit"></i></button>
                          </div>
                     </div>
                            
                   </div>
                </div>                
                `;
            });
        });


        //Borrar documentos
        const eliminar = (id) =>{
            console.log(eliminar);
            db.collection("users").doc(id).delete().then( ()=> {
                console.log("Document successfully deleted!");
            }).catch((error) =>{
                console.error("Error removing document: ", error);
            });
        };

        posting.addEventListener("click", (e) => {
            console.log(e.target);
            if (e.target.tagName !== "BUTTON" || !e.target.classList.contains("delete-btn")) {
                console.log(e.target);
            }else {
                eliminar(e.target.dataset.id);
            }
        });



        //Funcion editar post
        // const editar = (id) =>{
        //
        //     const posts = posts1.value;
        //     const washingtonRef = db.collection("users").doc(id);
        //     return washingtonRef.update({
        //         post: posts,
        //     })
        //         .then(function() {
        //             console.log("Document successfully updated!");
        //         })
        //         .catch(function(error) {
        //             console.error("Error updating document: ", error);
        //         });
        // };
        //
        // posting.addEventListener("click", (e) =>{
        //     if(e.target.tagName !== "INPUT" || !e.target.classList.contains("btn-editar")){
        //         return;
        //     }
        //     console.log(!e.target.classList.contains("btn-editar"));
        //     editar(e.target.id);
        // });



        btnPoster.addEventListener("click", guardar);

    }
};
export default Wall;