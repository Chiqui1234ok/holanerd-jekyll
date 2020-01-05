---
layout: post
title: Porqué negamos bibliotecas de terceros
image: https://chiqui1234.github.io/holanerd-jekyll/assets/img/porque-negamos-bibliotecas-de-terceros/poster.webp
date: 2020-01-05 19:00
category: programacion
author: chiqui
tags: negamos, bibliotecas, front-end, back-end, optimizacion
summary: El restyling de Holanerd se da por terminado, y luego de probar Bootstrap, Pure.CSS y también bibliotecas de Javascript y CMS muy buenos, nos damos por vencidos en la búsqueda y concluímos con el desarrollo. Así que, ¿que hay de nuevo, viejo?
---
<p>La idea de rediseñar Holanerd se me plantó la cabeza y en un día teníamos todo terminado y pulido. No usamos Bootstrap ni Pure CSS. Eso si, le di una tercera (¿o cuarta?) oportunidad a Bootstrap, porque para criticar u opinar hay que probar a fondo antes. Pure CSS me sedujo por su bajo peso, pero terminó ganando mi <strong>Reboot_strap</strong>. ¿Por qué?</p>
<h1>Primero lo primero</h1>
<p>Para entender porqué no nos decantamos por CMS súper probados como <strong>Wordpress</strong>, <strong>Joomla</strong> o <strong>Drupal</strong> hay que saber cuál es el público objetivo de #Holanerd hoy en día.</p>
<p>A día de hoy y según nuestras analíticas, los dispositivos que más frecuentan la web son dispositivos móviles, de los cuáles asumimos que no todos tienen gran potencia.</p>

<h1>La educación, en algún punto, debería ser accesible para todos</h1>
<img src="https://chiqui1234.github.io/holanerd-jekyll/assets/img/porque-negamos-bibliotecas-de-terceros/netbooks-conectar-igualdad.webp" width="100%" />
<p>Para quién no sepa, hubo años en los que el Estado y la capital Argentina hicieron grandes esfuerzos en brindar a los estudiantes de ciclos primarios y secundarios (entre 6 y 18 años aprox) netbooks educativas.</p>
<p>Sin embargo, la Internet pronto empezó a devorar CPU y RAM cómo si se estuviera corriendo un videojuego. Realmente esos Atom N270 / N455 estaban dando todo para mantener YouTube andando sobre Windows 7 Starter.</p>
<p>En ese punto creo yo que me frustré en exceso. Era penoso ponerse a ver "Julio Profe" o algún tutorial de programación, ni hablar de tener un IDE abierto en segundo plano.</p>
<p>Es por ésto que quiero intentar llegar a máquinas que se consideran obsoletas por el grueso de la sociedad. Seguramente haya alguien que quiera estudiar y no tenga los recursos de hardware o la conexión a internet ideal. Aquí quería aparecer yo.</p>
<p>Igualmente deberás identificar el visitante del sitio web que desarrollas. Si estás programando un exchange serio, por ejemplo, es probable que tu visitante sea un adulto con una notebook o PC de escritorio de 3 años o menos, lo que debería bastar para navegar por una web pesada en la mayoría de casos. ¡Usa Google Analytics o algún servicio similar!</p>

<h1>¿Cuánto pesa una web basada en Bootstrap + JQuery versus Holanerd?</h1>
<p>Bastante. Para colmo, la mayoría de estos templates van encima de Wordpress :O</p>
<p>Te invito a pasar <a href="https://developers.google.com/speed/pagespeed/insights/?hl=es">Google PageSpeed Insights</a> a Holanerd y a cualquier plantilla Bootstrap para apreciar las diferencias de rendimiento.</p>
<p>Igualmente, no seamos necios. Wordpress se creó para una enorme cantidad de blogs y sitios webs en masa, por ende debe estar listo para muchas personas distintas. Si quieres una app totalmente flexible, debes ir por algún framework PHP, NodeJs o Wordpress (si te sentís cómodo con él).</p>
<p>Pelear por cuál plataforma es mejor es una guerra sin sentido, del mismo modo que esas peleas de Windows vs Linux. El software ideal depende de 50% software y 50% humano... idealmente, deberías probar distintas plataformas hasta que encuentres "la tuya". Yo encontré Jekyll y me siento muy cómodo, a pesar de sus "limitaciones" (que yo las veo como ventajas, pero como digo, cada quién...) :D</p>

<h1>Jekyll</h1>
<p>Jekyll lo conozco por una recomendación de un colega. Holanerd está basado en este sistema y no utiliza ninguna base de datos. ¿Y cómo es que el listado de posts se actualiza con cada contenido nuevo? ¿Y cómo se hace para que los colores cambien según la categoría del post? ¿Hago yo todo manualmente?</p>
<p>La verdad que Jekyll es una de las plataformas de blogging mejor pensadas que conozco. Si tienes una cuenta de GitHub y un editor de texto estás listo para postear casi tan cómodo como lo harías en Wordpress.</p>
<p>Esta plataforma sólo necesita que crees tus posts en formato <strong>Markdown</strong> (.md) y los alojes dentro de la carpeta <strong>_posts</strong>. Cada vez que ejecutás <strong>git push</strong>, la web se sube a los servidores y, con Github Pages activado (<a href="http://holanerd.net/git/2019/10/20/activar-github-pages.html">tutorial de activación aquí</a>), se compila todo en la nube para que no tengas que hacer nada más.</p>
<p>La integración entre Jekyll y GitHub es preciosa, y es un sistema que se adapta a cualquier theme de manera fácil. Si ya eres front-end developer, te gustará mucho :)</p>

<h1>Crea packs de iconos</h1>

<img src="https://chiqui1234.github.io/holanerd-jekyll/assets/img/porque-negamos-bibliotecas-de-terceros/icomoon.webp" width="100%" />

<p><a href="https://icomoon.io/">Icomoon</a> es un sitio web que tiene packs de iconos de Fontawesome (entre muchos otros) y permite crear una tipografía sólo con los iconos que necesitas. Es así como tu <strong>all.min.css</strong> de Font Awesome pasa de 12KB (y te hace esperar un segundo más al cargar la web) a unos 2 o 3KB.</p>
<p>Es más, el PageSpeed Insights debería tirar una nota relativamente baja sobre Holanerd hoy, debido a que estoy cargando FontAwesome completito. <strong>Icomoon</strong> entrará en acción en cuánto termine el theme actual.</p>

<h1>Desarrolla o utiliza APIs específicas</h1>
<p>Si tuviera que hacer este blog en Wordpress sólo para que mis usuarios puedan comentar, dieran likes y tuvieran un avatar asociado, sería un desperdicio.</p>
<p>Wordpress está pensado, en mi opinión, para algo mucho más grande que aún no descubrí.</p>
<p>Creo más inteligente utilizar un sistema de comentarios independiente, como Disqus que, aunque ralentiza un poco la carga del sitio web, funciona a la perfección.</p>
<p>En cuánto tenga tiempo, me gustaría hacer una API propia y ligera para incrustar comentarios, pero tiempo al tiempo.</p>
<p>Utilizar APIs independientes en combinación con Jekyll me permite conectarme y operar con una base de datos <strong>sólo cuándo es estrictamente necesario</strong>.</p>

<h1>¿Necesitas un plugin para todo?</h1>
<p>Utilizo Google Analytics para tener información de qué visitas tengo, desde dónde me ven, etc. Este plugin me es imprecindible para mi, y no puedo desarrollar un software de semejante nivel ahora. Además, es súmamente cómodo de administrar. ¿Vale la pena hacer un plugin propio? Desde mi punto de vista, no.</p>
<p>Pero vayamos con un ejemplo más simple. Actualmente, si colocas el cursor del mouse por encima del icono like y comentarios en la página de inicio (estas dos imágenes aparecen al colocar el cursor encima de un post listado), tendrás un pequeño <i>tooltip</i> que indica la cantidad de comentarios y likes del post.</p>

<img src="https://chiqui1234.github.io/holanerd-jekyll/assets/img/porque-negamos-bibliotecas-de-terceros/tooltip-sin-plugins.webp" />

<p>Esto no es un plugin en JQuery, sino que averigué sobre dar estilo CSS a ciertos parámetros de etiquetas HTML, y encontré que el parámetro <strong>title</strong> puede recibir estilos de CSS. Y en 2 minutos, pasé de tener un clásico (por no decir feo) tooltip a una cajita celeste con blur detrás. Mucho más estético y de hecho, más rápido que buscar e implementar un script Javascript que hiciera el trabajo.</p>
<p>Las cosas nativas pueden resultar <strong>muy eficientes</strong>.</p>

<h1>Se ahorran recursos en el cliente, pero también en el servidor</h1>
<p>Al tener un <strong>footsprint</strong> (huella) tan pequeño, no sólo estamos ahorrando megabytes al usuario sino que también el servidor utiliza menos espacio en disco y de hecho, menos servicios deben correr en segundo plano para que la web funcione correctamente.</p>
<p>Al no utilizar bases de datos, PHP ni Nodejs, el servidor precisa el módulo Apache o Nginx para servir tu sitio web, y Ruby para auto-compilar el sitio web cada vez que subas un post. Es por esto que el servidor está muy tranquilo en cada petición que le hacemos. Debe entregar un archivo HTML, sin tener que conectar con una BD ni pensar nada "estrambótico".</p>

<h1>Nuevos formatos y tecnologías más ligeras</h1>
<p>Hace varios años salieron <a href="https://developers.google.com/speed/webp">dos formatos de Google</a>. <strong>Webp</strong> para imágenes y <strong>WebM</strong> para videos. Sacando los servicios de Google, vi muy pocos sitios webs utilizando este formato que reduce en hasta un 50% (según pruebas propias) el peso de tus archivos multimedia.</p>
<p>Si querés tener bajo peso y una rápida respuesta, sin duda usa estas dos extensiones.</p>
<p>Puedes convertir imágenes png/jpg/jpeg a webp gracias a <a href="https://convertio.co/es/image-converter/">Convertio</a>, que también transforma videos, audios, etc. Si te limitan los 10 minutos que tiene para cuentas gratuitas, puedes adquirir un plan o bien, buscar otro sitio web que haga la misma tarea. Creo que <a href="https://imagen.online-convert.com/es/convertir-a-webp">online-convert.com</a> es ilimitado.</p>

<h1>Trastea con las tecnologías puras, sin bibliotecas</h1>
<p>Es muy distinto trabajar en un grupo de freelancers o sólo en vez de en una empresa. En la empresa tienes que cumplir pautas o utilizar tecnologías determinadas.</p>
<p>Recuerda que no todo lo nuevo es maravilloso, a su vez no niegues tecnologías porque yo digo que no me sirvieron. Deberás probar hasta sentirte cómodo con algo. Luego podrías seguir buscando otras tecnologías y así sucesivamente.</p>
<p>Es importante que sepas cosas, por más que no te gusten.</p>
<p><strong>Sin embargo</strong>, para proyectos propios puedes hacer casi lo que se te de en gana, y es por eso que el sitio web del cuál estás leyendo está basado en HTML, CSS y Ruby.</p>
<p>De hecho, uso Ruby porque Jekyll lo usa, y el trabajo que han hecho con esta plataforma no ha podido ser superada por mis saberes. Distinta es la historia con CSS 3, un lenguaje de maquetación que maduró <strong>muchísimo</strong> desde las primeras versiones de SASS (y otros pre-compiladores de CSS) y Bootstrap.</p>
<p>Actualmente, CSS cuenta con (al menos) dos sistemas de grillas <strong>nativas</strong> que puedes implementar sin gastar ni 1Kb de más: CSS Grid y Flex.</p>
<p>También tiene funciones, filtros, opacidad, colores rgba y variables que no sólo pueden almacenar valores y strings, sino que también almacenan colores, unidades de tiempo y unidades de medición (px, em, vh, vw, etc).</p>
<p><strong>Pasando al lado de Javascript</strong>, bibliotecas cómo React y Vue.js son bastante buenas, pero si estás en un proyecto simple es probable que no necesites incluir ni siquiera JQuery.</p>
<p>Si querés tener algún atajo al seleccionar un elemento del DOM, puedes utilizar el <strong>getElementById</strong> clásico y almacenar ese objeto en una variable, para poder utilizarla escribiendo menos.</p>
<p>Una variable de ese tipo pesa realmente poco, y sin JQuery te ahorras varios Kilobytes que puedes utilizar en iconos, la portada de tu flamante post y servicios como Google Analytics y Disqus, sin tener mal rendimiento.</p>
<p><strong>PD</strong>: Siempre que puedas, intenta colocar las bibliotecas JS al final del documento HTML (y antes de los scripts que utilicen dichas bibliotecas).</p>

<h1>Conclusión</h1>
<p>Al fin y al cabo, mucho depende de tu comodidad al desarrollar y las necesidades del cliente, pero si sabes re-utilizar buen código y tu trabajo funciona bien, poco se pueden quejar :)</p>
<p>¿Te interesa o crees necesario tener tu web optimizada? ¿Qué estás haciendo para que todo sea fluído y cargue bien?</p>
<p>¡Los leo!</p>