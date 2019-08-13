let Wall = {
    render : async () => {
        let view = /* html */ `
        <nav>
            <ul>
                <li><a href = "./#/">PERFIL</a></li>
                <li><a href = "./#/">MURO</a></li>
                <li><a href = "./#/">GRUPOS</a></li>
                <li><a href = "./#/">CERRAR SESIÓN</a></li>
            </ul>
        </nav>
            <h1>AQUI VA EL MURO</h1>
        `
        return view
    },
    after_render : async () => {}
}

export default Wall;