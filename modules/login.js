let Login = {
    render : async () => {
        let view = /* html */ `
            <h1>LOGIN </h1>
            <input type="text" placeholder="Nombre Completo">
            <input type="text" placeholder="Correo">
            <input type="text" placeholder="Contraseña">
            <input type="text" placeholder="Confirmar Contraseña">
            <button>Ingresar</button>
            <p>¿Eres nueva? <a href = "./#/register">REGISTRATE</a> </p>

        `
        return view
    },
    after_render : async () => {}
}

export default Login;