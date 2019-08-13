"use strict";
import Register from './modules/register.js'
import Login    from './modules/login.js'
import Wall     from './modules/wall.js'
import Groups   from './modules/groups.js'

import Utils from './modules/utils.js'

const routes = {
    '/'         : Login
    ,'/register'     : Register
    ,'/Wall'             : Wall
    ,'/Groups'       : Groups
};

const router = async () => { 

    
    const header  = document.getElementById('header-container'); 
    const content = null || document.getElementById('page-container'); 
    /*header.innerHTML = await Navbar.render();
    await Navbar.after_render();*/
    
    
    let request = Utils.parseRequestURL();
  

    let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');
       

    let page = routes[parsedURL] ? routes[parsedURL] : Error404; 
    content.innerHTML = await page.render();
    await page.after_render();    
}


window.addEventListener('hashchange', router); 
window.addEventListener('load', router); 