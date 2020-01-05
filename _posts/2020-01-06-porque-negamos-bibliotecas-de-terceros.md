---
layout: post
title: Porqué negamos bibliotecas de terceros
image: https://miro.medium.com/max/2560/1*X64AU60quzkkR-Gi0mk7Gg.png
date: 2020-01-05 20:50
category: programacion
author: chiqui
tags: negamos, bibliotecas, front-end, back-end, optimizacion
summary: El restyling de Holanerd se da por terminado, y luego de probar Bootstrap, Pure.CSS y también bibliotecas de Javascript y CMS muy buenos, nos damos por vencidos en la búsqueda y concluímos con el desarrollo. Así que, ¿que hay de nuevo, viejo?
---
<p>La idea de rediseñar Holanerd se me plantó la cabeza y en un día teníamos todo terminado y pulido. No usamos Bootstrap ni Pure CSS. Eso si, le di una tercera (¿o cuarta?) oportunidad a Bootstrap, porque para criticar u opinar hay que probar a fondo antes. Pure CSS me sedujo por su bajo peso, pero terminó ganando mi **Reboot_strap**. ¿Por qué?</p>
<h1>Primero lo primero</h1>
<p>Para entender porqué no nos decantamos por CMS súper probados como **Wordpress**, **Joomla** o **Drupal** hay que saber cuál es el público objetivo de #Holanerd hoy en día.</p>
<p>A día de hoy y según nuestras analíticas, los dispositivos que más frecuentan la web son dispositivos móviles, de los cuáles asumimos que no todos tienen gran potencia.</p>

<h1>La educación debería ser libre y accesible para todos</h1>
<p>Para quién no sepa, hubo años en los que el Estado y la capital Argentina hicieron grandes esfuerzos en brindar a los estudiantes de ciclos primarios y secundarios (entre 6 y 18 años aprox) netbooks educativas.</p>
<p>Sin embargo, la Internet pronto empezó a devorar CPU y RAM cómo si se estuviera corriendo un videojuego. Realmente esos Atom N270 / N455 estaban dando todo para mantener YouTube andando sobre Windows 7 Starter.</p>
<p>En ese punto creo yo que me frustré en exceso. Era penoso ponerse a ver "Julio Profe" o algún tutorial de programación, ni hablar de tener un IDE abierto en segundo plano.</p>
<p>Es por ésto que quiero intentar llegar a máquinas que se consideran obsoletas por el grueso de la sociedad. Seguramente haya alguien que quiera estudiar y no tenga los recursos de hardware o la conexión a internet ideal. Aquí quería aparecer yo.</p>
<p>Igualmente deberás identificar el visitante del sitio web que desarrollas. Si estás programando un exchange serio, por ejemplo, es probable que tu visitante sea un adulto con una notebook o PC de escritorio de 3 años o menos, lo que debería bastar para navegar por una web pesada en la mayoría de casos. ¡Usa Google Analytics o algún servicio similar!</p>

<h1>¿Cuánto pesa una web basada en Bootstrap + JQuery versus Holanerd?</h1>
<p>Bastante. Para colmo, la mayoría de estos templates van encima de Wordpress :O</p>
<p>Te invito a pasar <a href="https://developers.google.com/speed/pagespeed/insights/?hl=es">Google PageSpeed Insights</a> a Holanerd y a cualquier plantilla Bootstrap para apreciar las diferencias de rendimiento.</p>

<h1>Jekyll</h1>
<p>Jekyll lo conozco por una recomendación de un colega. Holanerd está basado en este sistema y no utiliza ninguna base de datos. ¿Y cómo es que el listado de posts se actualiza con cada contenido nuevo? ¿Y cómo se hace para que los colores cambien según la categoría del post? ¿Hago yo todo manualmente?</p>
<p>La verdad que Jekyll es una de las plataformas de blogging mejor pensadas que conozco. Si tienes una cuenta de GitHub y un editor de texto estás listo para postear casi tan cómodo como lo harías en Wordpress.</p>
<p>Esta plataforma sólo necesita que crees tus posts en formato **Markdown** (.md) y los alojes dentro de la carpeta **_posts**. Cada vez que ejecutás **git push**, la web se sube a los servidores y, con Github Pages activado, se compila todo en la nube para que no tengas que hacer nada más.</p>
<p>La integración entre Jekyll y GitHub es preciosa :)</p>

<h1>Desarrolla o utiliza APIs específicas</h1>
<p>Si tuviera que hacer este blog en Wordpress sólo para que mis usuarios puedan comentar y tuvieran un avatar asociado, sería un desperdicio.</p>
<p>Wordpress está pensado, en mi opinión, para algo mucho más grande que aún no descubrí.</p>
<p>Creo más inteligente utilizar un sistema de comentarios independiente, como Disqus que, aunque ralentiza un poco la carga del sitio web, funciona a la perfección.</p>
<p>En cuánto tenga tiempo, me gustaría hacer una API propia y ligera para incrustar comentarios, pero tiempo al tiempo.</p>
<p>Utilizar APIs independientes en combinación con Jekyll me permite conectarme y operar con una base de datos **sólo cuándo es estrictamente necesario**.</p>

<h1>Se ahorran recursos en el cliente, pero también en el servidor</h1>
<p>Al tener un **footsprint** (huella) tan pequeño, no sólo estamos ahorrando megabytes al usuario sino que también el servidor utiliza menos espacio en disco y de hecho, menos servicios en segundo plano.</p>
<p>Al no utilizar bases de datos, PHP o Nodejs, el servidor precisa el módulo Apache o Nginx para servir tu sitio web, y Ruby para auto-compilar el sitio web cada vez que subas un post. Es por esto que el servidor está muy tranquilo en cada petición que le hacemos. Debe entregar un archivo HTML, sin tener que conectar con una BD ni pensar nada "estrambótico".</p>

<h1>Nuevos formatos y tecnologías más ligeros</h1>
<p>Hace varios años salieron dos formatos de Google. **Webp** para imágenes y **WebM** que, sacando los servicios de Google, vi muy pocos sitios webs utilizando este formato que reduce en hasta un 50% (según pruebas propias) el peso de tus archivos multimedia.</p>
<p>Si querés tener bajo peso y una rápida respuesta, sin duda usa estos dos formatos.</p>

<h1>Trastea con las tecnologías puras, sin bibliotecas</h1>
<p>Es muy distinto trabajar en un grupo de freelancers o sólo en vez de en una empresa. En la empresa tienes que cumplir pautas o utilizar tecnologías determinadas.</p>
<p>Recuerda que no todo lo nuevo es maravilloso, a su vez no niegues tecnologías porque yo digo que no me sirvieron. Deberás probar hasta sentirte cómodo con algo. Luego podrías seguir buscando otras tecnologías y así sucesivamente.</p>
<p>Es importante que sepas cosas, por más que no te gusten.</p>
<p>**Sin embargo**, para proyectos propios puedes hacer casi lo que se te de en gana, y es por eso que el sitio web del cuál estás leyendo está basado en HTML, CSS y Ruby.</p>
<p>De hecho, uso Ruby porque Jekyll lo usa, y el trabajo que han hecho con esta plataforma no ha podido ser superada por mis saberes. Distinta es la historia con CSS 3, un lenguaje de maquetación que maduró **muchísimo** desde las primeras versiones de SASS (y otros pre-compiladores de CSS) y Bootstrap.</p>
<p>Actualmente, CSS cuenta con (al menos) dos sistemas de grillas **nativas** que puedes implementar sin gastar ni 1Kb de más: CSS Grid y Flex.</p>
<p>**Pasando al lado de Javascript**, bibliotecas cómo React y Vue.js son bastante buenas, pero si estás en un proyecto simple es probable que no necesites incluir JQuery con tal de tener algún atajo al seleccionar un div#id o div.class. Puedes utilizar el **getElementById** y almacenar ese div en una variable, para poder utilizarla escribiendo menos.</p>
<p>Una variable de ese tipo pesa realmente poco, y te ahorras varios Kilobytes que puedes utilizar en iconos o la portada de tu flamante post.</p>
<p>**PD**: Siempre que puedas, intenta colocar las bibliotecas JS al final del documento HTML (y antes de los scripts que utilicen dichas bibliotecas).</p>