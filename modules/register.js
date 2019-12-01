body{
    background: white;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;

}

/*HEADER*/

a {color: #f7f7f7;}
a:hover {text-decoration: underline;}

header{
    background: #C35B50;
    padding: 8px 0;
}

header .logo img{
    height: 40px;
    width: 58px;
}

header .buscar form input[type="text"] {
    width: 100%;
    background: white;
    border: none;
    font-size: 12px;
    padding: 0 10px;
    height: 25px;
    line-height: 25px;
    border-radius: 3px 0 0 3px;
    color: #000000;
    font-family: "Open Sans", sans-serif;
}

header .buscar form button {
    width: 100%;
    background: white;
    border: none;
    font-size: 12px;
    padding: 0 10px;
    height: 25px;
    line-height: 25px;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    color: #6d6d6d;
}


header .buscar form button:hover{
    background: #C35B50;
    color: white;
}


/*MENU*/
header menu{
    padding: 0;
}

header .menu a{
    color: white;
    text-decoration: none;
}

header .menu a:hover{
    color: #C35B50;
}

header .menu .imagen{
    display: inline-block;
    width: 22px;
    height: 22px;
    overflow: hidden;
}

header .menu .imagen img{
    border-radius: 100px ;
}


/*Footer*/
.footer {
    background: #C35B50;
    color: white;
    justify-content: center;
    text-align: center;
    height: 10vh;
    align-items: center;
    display: flex;
    top: 91%;
    position: fixed;
    width: 100%;
}
/*MAIN*/

main{
    padding-top: 20px;
}

/*BARRA LATERAL IZQUIERDA*/

main .barra-lateral-izquierda{
    padding-bottom: 10px;
    padding-left: 0;
}

main .barra-lateral-izquierda nav{
    border-bottom: 1px solid #c7c8ca;
    padding-bottom: 20px;
}

main .barra-lateral-izquierda nav a{
    display: block;
    padding: 3px;
    font-family: Roboto, sans-serif;
    color: #C35B50;

}

main .barra-lateral-izquierda nav a:hover{
    background: #f2f2f2;
    text-decoration: none ;
}

main .barra-lateral-izquierda nav a i{
    margin-right: 10px;
}


/*CONTENIDO PRINCIPAL*/
/*Publicar*/

main .contenido-principal .publicar{
    margin-bottom: 70px;
    }

main .contenido-principal .publicar .foto a{
    width: 60px;
    height: 60px;
    display: inline-block;
    overflow: hidden;
    border-radius: 100px;
    margin-top: 20px;
}

main .contenido-principal .publicar .foto img{
    /*width: 100%;*/
    height: 100%;
}

main .contenido-principal .publicar form textarea {
    width: 100%;
    max-width: 100%;
    min-height: 100px;
    max-height: 300px;
    border: none;
    padding: 15px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    color: #6c757d;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.35);
}

main .contenido-principal .publicar form .contenedor-botones{
    padding: 20px 0;
    border-bottom: 1px solid #c7c8ca ;
}

main .contenido-principal .publicar form .contenedor-botones a {
    color: #C35B50;
    font-size: 20px;
    margin-right: 10px;
}

main .contenido-principal .publicar form .contenedor-botones a:hover{
    color: #D87D74;
}

main .contenido-principal .publicar form button{
    border: 1px solid #C35B50;
    padding: 5px 30px;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    background: linear-gradient(to bottom, #C35B50, #D87D74 100%);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
main .contenido-principal .publicar form button:hover{
    background: linear-gradient(to bottom, #D87D74 , #C35B50 100%);


}

/*PUBLICACION*/
#posts {
    margin-bottom: 50px;
}

#pictureP{
    display: inline-block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100px;
}

#imgP{
    width: 100%;
}

#name{
    font-family: Roboto,sans-serif;
    font-size: 16px;
    color: #C35B50;
    line-height: 16px;
    display: inline-block;
    margin-bottom: 10px;
    padding-left: 8px;
    width: auto;

}

.texto{
    background: #ffffff;
    color: #1b1e21;
    font-size: 14px;
    padding: 15px;
    margin-bottom: 5px;
    border-radius: 3px;
}

#btnP ,#btnE{
    border:none;
    background: #e9ebee;

}

.btnLike{
    color: #C35B50;
    background: #e9ebee;
    cursor: pointer;
    padding: 10px 5px;
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    border:none;
    border-radius: 4px;


}
.btnLike:hover{
    background: #C35B50;
    color:white;
}

.contador{
    margin-bottom: 0;
    color: #5A5F73;
}


/*Grupos*/

.misGrupos{
    color: #C35B50;
    font-size: 30px;
    font-family: Roboto,sans-serif;
    padding-top: 10px;
    padding-bottom: 30px;
    font-weight: bold;
}

.grupos {
    color: #5A5F73;
    font-size: 18px;
    font-family: Roboto,sans-serif;
    padding: 10px 0;
    font-weight: bold;
}

/*BARRA LATERAL DERECHA*/

main .barra-lateral-derecha h3{
    font-size: 16px;
    font-family: Roboto,sans-serif;
    text-align: center;
}

main .barra-lateral-derecha .ads a{
    margin-bottom: 15px;
    display: inline-block;
}

main .barra-lateral-derecha .ads a img{
    width: 100%;
}

.textF{
    color: #C35B50;
    font-size: 14px;
}
.copyright{
    color: #919191;
    margin-top: 10px;
    font-size: 14px;
}


/*LOGIN*/

.contenedor-login{
    text-align: center;
    padding: 5px;
    border: none;

}

.contenedor-login button{
    border: 1px solid #C35B50;
    background: #C35B50;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-family: Roboto,sans-serif;
    width: 80%;
    height: 34px;
    text-align: center;
}

.contenedor-login input{
    border: 1px solid #C35B50;
    border-radius: 8px;
    font-size: 16px;
    font-family: Roboto,sans-serif;
    width: 80%;
    height: 34px;
    text-align: center;
}


.contenedor-login p{
    color: #C35B50;
    font-size: 18px;
    font-family: Roboto,sans-serif;
    text-align: center;
}

.img-home {
    width: 100%;
}
.backLogin{
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/

}

/*PERFIL*/

.fotoPerfil{
    width: 240px;
}

/*MEDIA QUERIES*/


@media screen and (max-width:575px){
    header .menu{
        padding: 15px 15px 0 15px;

    }

.contenido-principal .publicacion .foto{
        padding-right: 0;
    }

.contenido-principal .publicacion .foto a{
        width: 40px;
        height: 40px;
    }

.contenido-principal .publicar .foto{
        display: none;
    }
}


