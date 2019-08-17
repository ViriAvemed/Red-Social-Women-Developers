const firebaseConfig = {
    apiKey: "AIzaSyBpOxYDjb9ul17eymW4maik_ZOxB6b0xcA",
    authDomain: "prueba-de-redsocial.firebaseapp.com",
    databaseURL: "https://prueba-de-redsocial.firebaseio.com",
    projectId: "prueba-de-redsocial",
    storageBucket: "prueba-de-redsocial.appspot.com",
    messagingSenderId: "792801296519",
    appId: "1:792801296519:web:258f0469db05285f"
};
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
//
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//
// console.log("conectado");