let Wall = {
    render: async () => {
        let view = `
    <section id="createComments">
        <h1>Mi muro</h1>
        <input type="text" id="post" placeholder="¿qué quieres compartir?"> <br>
        <input type="text" id="topic" placeholder="tema">
        <button id="postear" onclick="guardar()" >Postear!</button>
       
    </section>
    <section id="showComments">    
        <div id="posting">  
        </div> 
    </section>
        `;
        return view
    },
    after_render: async () => {

  
var db = firebase.firestore();
  
// add comments
var guardar = () => {
    var posts = document.getElementById("post").value;
    var topics = document.getElementById("topic").value;

db.collection("users").add({
    post : posts,
    topic : topics
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("post").value = "";
    document.getElementById("topic").value = "";
    return db.collection("users").add()

})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


//Imprimir documentos
var posting = document.getElementById("posting");
db.collection("users").onSnapshot((querySnapshot) => {
    posting.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().post}`);
        posting.innerHTML += `
            <p>${doc.data().post}</p>
            <p>${doc.data().topic}</p>
            <button onclick="editPost('${doc.id}','${doc.data().post}','${doc.data().topic}')">Editar</button>
            <button onclick="deletePost('${doc.id}')">Borrar</button>
            <button id="openComment" onclick="openComment()">Comenta este post</button>
            <div id="createInput"></div>
        `
        
    });
})

//Borrar documentos
const deletePost = (id) => {
    db.collection("users").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

//editar 

const editPost = (id,post,topic) => {
    
    document.getElementById("post").value = post;
    document.getElementById("topic").value = topic;
    
    var btnsave = document.getElementById("postear");
    btnsave.innerHTML = "guardar";

    btnsave.onclick = function() {
        var washingtonRef = db.collection("users").doc(id);
        var post2=document.getElementById("post").value;
        var topic2=document.getElementById("topic").value;
        
    return washingtonRef.update({
        post:post2,
        topic:topic2
    })
    .then(function() {
        console.log("Document successfully updated!/////// Holi");
        btnsave.innerHTML = "postear";
        document.getElementById("post").value = "";
        document.getElementById("topic").value = "";

    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }

    }

//Comenta el post 

const openComment = () => {
    var commenting = document.getElementById("createInput");
    commenting.innerHTML = `<input type="text" id="newPost" placeholder="comenta">`
    console.log("hacer un comentario a este post");
    
}





    }
};
export default Wall;