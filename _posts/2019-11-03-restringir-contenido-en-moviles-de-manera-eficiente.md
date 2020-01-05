---
layout: post
title: Restringir contenido web en móviles de manera eficiente
image: https://chiqui1234.github.io/holanerd-jekyll/assets/img/restringir-contenido-en-moviles-de-manera-eficiente/poster.webp
date: 2019-11-03 12:00
category: programacion
author: chiqui
tags: javascript, responsive, ahorro
summary: ¿Pensabas que un "display none" de CSS era suficiente? Mirá mejores maneras de controlar el contenido que ven tus usuarios en móviles y ayudá a que ahorren datos
---

En Holanerd hago todo lo posible para optimizar tanto del lado cliente cómo del servidor. En el lado del cliente, me di cuenta de un detalle que había dado por "resuelto".
Cuándo cargamos [holanerd.net](http://holanerd.net) desde una notebook o cualquier otra pantalla "grande", vemos el último post y al lado su portada, así:

![vista-de-escritorio](/assets/img/restringir-contenido-en-moviles-de-manera-eficiente/desktop.webp)

 Sin embargo, en móviles quito la imágen para darle prioridad al texto, que como ya sabemos consume **poco y nada**.

![vista-de-dispositivos-portatiles](/assets/img/restringir-contenido-en-moviles-de-manera-eficiente/mobile.webp)

El problema es que cuándo ejecuto [Google Pagespeed Insight](https://developers.google.com/speed/pagespeed/insights/?hl=es), me está alertando de que la imágen que no aparece en móviles se descarga igualmente, y eso no sólo consume tus datos sino que también está descargando algo que nunca vas a observar.

![pagespeed-insight](/assets/img/restringir-contenido-en-moviles-de-manera-eficiente/pagespeed.webp)

También sucede lo mismo con los comentarios de Disqus, que triplican el tiempo de carga en la mayoría de páginas del blog. Por eso me pareció OK deshabilitar esa función en dispositivos móviles y dejarla libre para equipos más grandes. Casi seguro que si estás desde una notebook o PC de escritorio estés usando tu WiFi o internet por cable :)

# ¿Cómo regulo ésto?

Vi una función en Stackoverflow que se encarga de averiguar, mediante un regex complejo de leer, si tu navegador es "versión móvil" o no. Se las dejo a continuación:

{% highlight javascript %}
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
{% endhighlight %}

Y pueden almacenar el TRUE o FALSE así:

> let isMobile = mobileCheck();

Sin embargo, esa solución me duró poco. No porque fuera mala sino porque quería tener un código más legible. Recordemos que el objetivo es limitar los objetos a mostrar en pantalla en aquellos dispositivos pequeños, que por lo general cuentan con un plan de datos limitado.

Sólo basta con preguntar el ancho de la ventana del navegador, o el tamaño de pantalla real del dispositivo. Yo opté por la primer opción, pero si querés saber el tamaño real de la pantalla podés usar **screen.width** :)

Si necesitás una opción más dinámica posiblemente te funcione el primer código. En mi caso, el código de abajo viene perfecto porque coincide con las **@media-queries** que tengo en mis archivos CSS.

{% highlight javascript linenos %}
function isMobile()
{
    var windowSize = window.innerWidth;
    return windowSize<1024?true:false; // devuelve TRUE si windowSize es menor a 1024, o FALSE en caso contrario
}
{% endhighlight %}

Podés almacenar la devolución de la función y manejar el flujo de tu web en base a ese dato :)

# En la práctica, ¿cómo funciona en holanerd?

Dónde cobra más sentido mi pequeño algoritmo es en los comentarios de Disqus. Esta plataforma usa el siguiente "div" para incrustar dentro las conversaciones relacionadas a **X** post determinado.

{% highlight html %}
<div id="disqus_thread"></div>
{% endhighlight %}

Esto quiere decir que si la pantalla es mayor a 1023px, dejaré que Disqus haga su magia e incruste comentarios. Caso contrario, tomaré ese "div" y escribiré un pequeño aviso :)

{% highlight javascript linenos %}
var windowSize = window.innerWidth;
console.log(windowSize);
if(windowSize > 1023)
{
  // Disqus
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://holanerd.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
}
else
{
  document.getElementById('disqus_thread').innerHTML = '<p>Los comentarios están deshabilitados en dispositivos móviles con el fin de ahorrar datos.</p>';
}
{% endhighlight %}

¡Ojo! Este algoritmo no es reactivo como AngularJS o [Vue](/programacion/2019/10/30/introduccion-a-javascript-y-vue-js.html). Para que los comentarios aparezcan o desaparezcan según el cambio de tamaño de ventana, tendrías que usar **addEventListener()** aunque creo que no es necesario, al menos en mi caso :P

¡Ojo 2! En diseño web, un píxel no es realmente un píxel. Hay magias cómo el tamaño y zoom del **viewport** que veremos más adelante ;)

¡Ojalá te haya servido el post!