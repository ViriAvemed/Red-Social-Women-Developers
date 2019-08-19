#  Red Social    
![logo](ux/logo.png)

## Índice

* [1. Definición de Producto](#1-definición-de-Producto) 
* [2. Problemática](#2-problemática)
* [3. User Persona](#3-user-persona)
* [4. Historias de Usuario](#4-historias-de-usuario)
* [5. Prototipo de Baja Fidelidad](#5-prototipo-de-baja-fidelidad)
   >*[5.1 Testeo](#Testeo)
* [6. Prototipo de Alta Fidelidad](#6-prototipo-de-altafidelidad)


***

## 1. Definición de Producto.

En vista de la necesidad y falta de inclución de las mujeres mexicanas dedicadas a la programación,  en este tipo de espacios es que decidimos crear una red social especifica para que puedan comunicarse, compartir contenido, ayudar a difundir conocimiento.


## 2.  Problemática

En la actualidad las redes sociales se han convertido en más que un simple medio de comunicación, son una herramienta que implementamos para generar contenido en nuestro ámbito personal, social, laboral y de autoaprendizaje. 

Tan solo en nuestro país se inverte al rededor de 3 horas con 7 minutos al día para revisar y participar en estos espacios sociales, esto deacuerdo al **reporte de Digital In 2018 de We Are Social y Hootsuite.**

Y apesar de la gran variedad de posibilidades que encontramos en el mercado, en México no existe una red social para muejeres desarrolladoras o interesadas en programación, donde puedan publicar artículos sobre sus investigaciones o aportaciones, tutoriales, videos, comentar y compartir información con mujeres con temas similares y no limitarse solo a un tema en especifico.

Ya que si bien en la actualidad con Instagram, Twitter, Facebook, Linkedin, etc., se puede estar comunicada en grupos o subgrupos solo de temas muy especificos, la información o los contenidos no fluyen de la manera en que las mujeres quisieramos.  Esto es devido a que en su gran mayoria de estos grupos son creados por hombres y los pocos grupos de chicas en la comunidad de developers son de Argentina o Colombia.




## 3. User Persona
![User Persona](C:\Users\Cinthya\Desktop\LABORATORIA\TrackFrontEnd\RedSocial\MEX008-social-network/ux/serperson.png)

[User Persona de Red Social](https://redsocial.xtensio.com/nfe9x3g4)


## 4. Historias de Usuario

 En este proyecto contamos con las siguientes Historias de Usuarias.


* Como nueva usuaria quiero poder crear una cuenta y accesar a ella ya sea por medio de mi email, de mi cuenta de Google, de Facebook o de mi GitHub.

    
    > **Criterios de aceptación**
    > - Si el mail o password no es válido, al momento de logearme, debo poder 
    >   ver un mensaje de error.
    > - Debe ser visible si hay algún mensaje de error.
    > - Debo poder ver esta página de creación en móviles y desktop (responsive). 
    > - No debe necesitar recargar la página para crear una cuenta (SPA).
    >
    > **Definición de terminado**
    > - La funcionalidad cumple satisface los criterios de aceptación.
    > - La funcionalidad tiene _test unitarios_.
    > - El diseño visual corresponde al prototipo de alta fidelidad.
    > - El código de esta funcionalidad recibió code review.
    > - La funcionalidad esta desplegada y pública para ser probada. 
    > - La funcionalidad fue probada manualmente.
    > - Se hicieron pruebas de usuabilidad y se implementó el feedback si se 
    >   consideró necesario.


### 5. Prototipo de Baja Fidelidad

Dentro de nuestro prototipo de Baja Fidelidad contamos con dos secciones: la primera es la sección del movil y la segunda es la sección de escritorio, en las cuales se indica el flujo que las usuarias tendran dentro de la aplicación, se realizaron algunos testeos y con base en ellos es como proseguimos a realizar las modificaciones.

* Prototipo *móvil*

> ![Baja Fidelidad uno](ux/bajaF1.jpg)
> ![Baja Fidelidad dos](ux/bajaF2.jpg)
> ![Baja Fidelidad tres](ux/bajaF3.jpg)
> ![Baja Fidelidad cuatro](ux/bajaF4.jpg)

* Prototipo *Escritorio*

>![Escritorio de Baja Fidelidad](ux/EscritorioB.jpg)
>[Prototipo de Escritorio Interactivo](https://marvelapp.com/c8jcdd0/screen/59929211)

### 5.1 Testeo Prototipo de Baja Fidelidad

 Despues del testeo con 4 usuarias estas fueron sus recomendaciones las cuales tendremos encuenta para la realización del maquetado con código.

* Feedback:

  >- No queda muy clara la funcionalidad de nuestro menu.
  >- No se entiende con claridad la finalidad el menú de la pantalla 4.1. Aunado a esto tres de cuatro usuarias comentaron que les era abrumador ver tantos iconos.
  >- No queda claro la funcionalidad de pantalla 4.2.  de las listas.
  >- No se cuenta con boton de cerrar sesión.
  >- No queda claro el boton de información.
  >- Especificar porque hay dos listas de grupos.

* Sugerencias:
>- Cambiar el nombre de listas por otro o crear una especio de pequeña instruccion de para que sirve.
>- Les gustaria ver un icono o algo que sujiera que pueden cerrar sesión o salir de alguna ventana en especifico.
>- Cambiar el nombre a las pestañas de grupos, seria mejor indicar que una es *Mis grupos*(haciendo referencia a los grupos que pertenecemos) y la otra como *Progrmas de interes*.

## 6. Prototipo de Alta Fidelidad

Nuestro prootipo de alta fidelidad quedo de esta manera organizado.

![Prototipo de Alta Fidelidad](ux/altaF.png)

[Prototipo Movil Interactivo](https://www.figma.com/proto/991GIJ4ZIJRDGNTXzwKGHm/RED-SOCIAL-WOMENDEVS?node-id=30%3A648&scaling=scale-down)


Despues del testeo con 4 usuarias estas fueron sus recomendaciones las cuales tendremos encuenta para la realización del maquetado con Codigo.

* Feedback:

  >- No queda claro el flujo de la interactividad automatica, 
  >- Es muy abrumador el hecho de que aparezcan muchas aplicaciones en una de las ventas,
  >- No queda claro el funcionamiento de la barra lateral.
  >- No se cuenta con boton de cerrar sesión.

* Sugerencias:
>- Verificar el flujo de la información de la interacción en Figma.
>- Crear un sub menú para que aparezcan las aplicaciones que pueden utilizar.
>- Utilizar un poco de más color.
>- Realizar unas pequeñas instrucciones de uso en la bienvenida.
