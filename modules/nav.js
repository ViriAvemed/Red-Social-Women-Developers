let Navbar = {
    render : async () => {
        let view = /* html */ `
        <nav>
            <ul>
                <li><a href = "./#/profile/">PERFIL</a></li> 
                <li><a href = "./#/wall/">MURO</a></li>
                <li><a href = "./#/groups/">GRUPOS</a></li>
                <li><a href = "./#/">CERRAR SESIÓN</a></li>
            </ul>
        </nav>
            
        `
        return view
    },
    after_render : async () => {}
}

export default Navbar;