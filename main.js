"use strict";
import Register from './modules/register.js'
import Login    from './modules/login.js'
import Wall     from './modules/wall.js'
import Groups   from './modules/groups.js'
import Profile  from './modules/profile.js'
import Error404 from './modules/error.js'

import Navbar   from './modules/nav.js'
import Utils    from './modules/utils.js'

const routes = {
    '/'              : Login
   ,'/register'      : Register
    ,'/wall'         : Wall
    ,'/groups'       : Groups
    ,'/profile'      : Profile

};

const router = async () => {


    const header  = document.getElementById('header-container');
    const content = document.getElementById('page-container');

    let request = Utils.parseRequestURL();


    let parsedURL = (request.resource ? '/' + request.resource : '/')
        + (request.id ? '/:id' : '')
        + (request.verb ? '/' + request.verb : '');


    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();


    if (parsedURL !== '/' && parsedURL !== '/register') {

        header.innerHTML = await Navbar.render();
        await Navbar.after_render();
    }

    };


window.addEventListener('hashchange', router);
window.addEventListener('load', router); 