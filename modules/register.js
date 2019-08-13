let Register = {
    render : async () => {
        let view = /* html */ `
            <h1>REGISTRO</h1>
            <a href="#login"> <img src="./img/anterior.png" > </a>
            <p> Crea tu cuenta aquí</p>
            <input type="text" placeholder="Nombre completo">
            <input type="text" placeholder="Correo electrónico">
            <input type="text" placeholder="Contraseña">
            <input type="text" placeholder="Confirmar Contraseña">
            <button>Crear cuenta</button><br><br>
        `
        return view
    },
    after_render : async () => {}
}
export default Register;
