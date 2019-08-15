"use strict";
import Register from './modules/register.js'
import Login    from './modules/login.js'
import Wall     from './modules/wall.js'
import Groups   from './modules/groups.js'
import Profile  from './modules/profile.js'
import Error404 from './modules/error.js'

import Navbar   from './modules/nav.js'
import Utils    from './modules/utils.js'

const privateRoutes = {
    '/wall'         : Wall
    ,'/groups'       : Groups
    ,'/profile'      : Profile
    ,'/'              : Wall
    ,'/register'      : Wall


};
const publicRoutes = {
    '/'              : Login
    ,'/register'      : Register
    ,'/wall'         : Login
    ,'/groups'       : Login
    ,'/profile'      : Login

};

const router = async () => {


    const header  = document.getElementById('header-container');
    const content = document.getElementById('page-container');

    let request = Utils.parseRequestURL();


    let parsedURL = (request.resource ? '/' + request.resource : '/')
        + (request.id ? '/:id' : '')
        + (request.verb ? '/' + request.verb : '');
console.log(parsedURL);

    let isLoged = sessionStorage.getItem('sesion');
    console.log(isLoged);

        if(isLoged==='true'){
            console.log('privada');
            let page = privateRoutes[parsedURL] ? privateRoutes[parsedURL] : Error404;
            content.innerHTML = await page.render();
            await page.after_render();
        }else{
            console.log('publica');
            let page = publicRoutes[parsedURL] ? publicRoutes[parsedURL] : Error404;
            content.innerHTML = await page.render();
            await page.after_render();
        }



    if (isLoged==='true') {

        header.innerHTML = await Navbar.render();
        await Navbar.after_render();
    }



    };


window.addEventListener('hashchange', router);
window.addEventListener('load', router); 