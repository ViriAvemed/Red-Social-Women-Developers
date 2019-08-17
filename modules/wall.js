let Wall = {
    render: async () => {
        let view = `
    <div class="container">
    <section id="createComments">
        <h1>Mi muro</h1>
        <input type="text" id="post" placeholder="¿qué quieres compartir?"> <br>
        <button id="id-postear" >Postear!</button>
         </section>
      
             <p id="posting">  
             </p> 

       

        `
        return view
    },
    after_render: async () => {


        const db = firebase.firestore();
        const posts1 = document.getElementById("post");
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
                    document.getElementById("post").value = "";
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                })
        };

        //Imprimir documentos

        db.collection("users").onSnapshot((querySnapshot) => {
            const posting=document.getElementById("posting");
            posting.innerHTML = "";
            querySnapshot.forEach((doc) => {
                posting.innerHTML += `
                <div id="posts">
                <p>${doc.data().post}</p>
                <input type="submit" value="eliminar" class="delete-btn" data-id="${doc.id}">
                </div>                
                `;
            });
        });



        const eliminar = (id) =>{
            console.log(eliminar);
            db.collection("users").doc(id).delete().then( ()=> {
                console.log("Document successfully deleted!");
            }).catch((error) =>{
                console.error("Error removing document: ", error);
            });
        };

        //Borrar documentos

        posting.addEventListener("click", (e) => {
            console.log(e.target);
            if (e.target.tagName !== "INPUT" || !e.target.classList.contains("delete-btn")) {
                console.log(e.target);
            }else {
                eliminar(e.target.dataset.id);
            }
        });
        btnPoster.addEventListener("click", guardar)

    }
};
export default Wall;