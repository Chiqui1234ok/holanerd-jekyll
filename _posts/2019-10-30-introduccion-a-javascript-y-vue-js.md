---
layout: post
title: Introducción a Javascript y Vue.js
image: https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/introduccion-a-javascript-y-vue-js/poster.webp
date: 2019-10-30 20:00
category: programacion
author: chiqui
tags: introduccion, programacion, javascript, vuejs
summary: Cómo usar Javascript junto a Vue.js, uno de los frameworks más fáciles de implementar
vue: development
---

¡Hey! Estoy escribiendo este post, aún no lo termino :O

Vamos a aprovechar las bondades de Jekyll y el Markdown para implementar el proyecto Vue.js directo en este post.
Veremos cómo implementarlo de manera rápida y porqué es tan importante aprender este framework "reactivo".
Antes que nada, creá un archivo HTML básico para comenzar :)

# Vue.js para cuándo estemos desarrollando el proyecto

Este archivo contiene alertas en consola que no incorpora la versión de producción. Lo ideal es incluirla ahora que estamos programando y después sacar esa línea para poner el script "para producción", algo más ligero y que no es tan insistente con las alertas (osea, no está en modo **debug**).

{% highlight javascript %}
<!-- Vue.js para desarrollo, con más notificaciones por consola -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
{% endhighlight %}

# Vue.js para cuándo nuestro proyecto pase a producción

Una vez que terminaste la primer versión de tu desarrollo y querés ponerlo online, sería bueno que tengas el siguiente CDN (link).

{% highlight javascript %}
<!-- Vue.js para producción (menor tamaño, más rápido) -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
{% endhighlight %}

# Vue devtools

![Captura-Vue-Devtools](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/introduccion-a-javascript-y-vue-js/vue-devtools.webp)

Si querés, podés buscar el plugin **Vue Devtools**. ¡Está en los navegadores más usados!
Este plugin te dará información acerca del rendimiento y tiene varias cosas más específicas para Vue que las propias "Herramientas para desarrollador" que poseen Chrome y Firefox, por ejemplo.

# ¿Qué es un objeto?

Un objeto tiene variables y formas de comportarse. 
Supongamos que un perro es un objeto. Para muchos el canino es algo mucho mejor, pero en programación la movida es así :P
Si quisieramos simular un perro en programación, claramente tendríamos que describir el nombre, la suavidad y color de su pelo, el tamaño, la raza, su comida favorita y más. Pero el perro no sólo tiene cualidades (en programación le decimos "propiedades"), sino también comportamientos ("métodos" o "funciones"). Los perros ladran, saltan, corren, comen y miman.

Dicho de otra forma, un objeto en javascript (y en cualquier otro lenguaje orientado a objetos) puede contener datos (sus propiedades) y métodos (sus comportamientos). En esta introducción no vamos a indagar tanto en crear métodos dentro de los objetos. Pasito a pasito :)

# ¿Cómo interacciona javascript con un objeto?

.

# Comencemos con el código

![codigo-wallpaper](https://codecondo.com/wp-content/uploads/2017/01/Learn-to-Code.jpg)

**Vue.js** tiene una sintáxis en el HTML muy similar a **Liquid**, otro lenguaje que usa mi blog Jekyll por defecto y es una manera de tener "variables", o algo así.

En realidad, Liquid reemplaza cosas cómo:

{% highlight liquid %}
[[ site.url ]]
{% endhighlight %}

En **{{ site.url }}**, a la hora de compilar. Es algo así cómo los #define de C y C++, dónde vos escribias un identificador y la palabra a reemplazar:

{% highlight c %}
#define MAX_CANT_CARACTERES 50
{% endhighlight %}

Sin embargo, Vue.js es mucho más dinámico... veamos a continuación parte de nuestro HTML :)

{% highlight html linenos %}
<div id="app" title="ID afectado por Vue.js"> 
    <h1><% cualidades.nombre %></h1>
    <p>Es la mascota (<% cualidades.tipo %>) de <% dueno.nombre %> y viven en <% dueno.ciudad %> :D</p>
</div>
{% endhighlight %}

Y podemos tener un javascript (Vue.js) así:

{% highlight javascript linenos %}
var app = new Vue({ // Crea una instancia (un objeto) nuevo
el: '#app', // configuramos el ID que queremos afectar en nuestro HTML
delimiters: ["<%", "%>"], // delimitadores, lo veremos más adelante
data: { // toda la información que querramos poner en el HTML va acá
        cualidades: {
            nombre: 'Draco',
            pelo: 'negro',
            edad: 5,
            tipo: 'perro'
        },
        dueno: {
            alias: 'Pepe',
            nombre: 'El sapo Pepe',
            ciudad: 'Olivos',
            provincia: 'Buenos Aires',
            edad: 60
        }
}
})
{% endhighlight %}

<div id="app" style="background: #eee;" title="ID afectado por Vue.js"> 
    <h1><% cualidades.nombre %></h1>
    <p>Es la mascota (<% cualidades.tipo %>) de <% dueno.nombre %> y viven en <% dueno.ciudad %> :D</p>
</div>

## ¿Qué sucedió acá?

Seguramente, si ya tenés la extensión **Vue devtools** te fijaste que tengo dos claves en mi código. Se llaman **titulo** y **mensaje** y están dentro de la variable/objeto "data". Fijate cómo es la sintáxis del objeto "data" que, dicho sea de paso, podría haber más de un objeto dentro de mi instancia Vue, conviviendo con "data". La instancia Vue se crea dentro de una variable y también puede haber una o más por archivo Javascript. La instancia se nace por esta línea:

{% highlight javascript %}
var app = new Vue({ })
{% endhighlight %}

¡Pasemos a explicar línea a línea!

### Línea 1

{% highlight javascript %}
var app = new Vue({ // Crea una instancia (un objeto) nuevo
{% endhighlight %}

Creamos una variable llamada **app** y la igualamos a **new Vue({})**, es decir, creamos una instancia de un objeto. Podemos tener varias instancias del mismo objeto y que cada una maneje las mismas claves y variables, pero con distintos datos. ¡Acordate! [Más arriba](#qué-es-un-objeto) te comenté que era un objeto.

### Línea 2

{% highlight javascript %}
    el: '#app', // configuramos el ID que queremos afectar en nuestro HTML
{% endhighlight %}

El valor que contiene **el** es nada más ni nada menos el div que queremos afectar. Es decir que las claves (titulo y mensaje) dentro de la variable "data" tienen sentido dentro del div con id **app**.
Si tuvieramos:

{% highlight javascript %}
    el: '#testeo', // configuramos el ID que queremos afectar en nuestro HTML
{% endhighlight %}

El id del div (en el HTML) tendría que ser **testeo**. Caso contrario, no podrías acceder a tus claves título y mensaje. Es decir que este objeto que nace a partir de **new Vue({})** tiene sentido y puede ser accedido únicamente desde el elemento que tiene designado: #app.

### Línea 3

{% highlight javascript linenos %}
    delimiters: ['<%',
    '%>'],
{% endhighlight %}

La línea 3 especifica de qué forma vamos a "llamar" a las claves de la variable **data**. Por defecto, es decir, si no existiese la clave **delimiters**, en vez de tener que abrir la línea con:

> <%

Y cerrar con:

> %>

Se haría con doble llave para abrir, y doble llave para cerrar.

![sintaxis-por-defecto](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/introduccion-a-javascript-y-vue-js/default-sintax.JPG)

Yo no puedo hacer eso en mi caso particular :) Esto es porque tengo otro lenguaje en el blog (llamado Liquid) que usa la misma sintáxis (osea, abre y cierra con dobles llaves). Para no armar conflicto, investigué un poco y creando esa clave dentro de "data" ya puedo definir una manera propia de "llamar" a mis datos :D Genial, ¿no? Podés configurarlo cómo más te guste.

Fijate que **delimiters** es un array de dos posiciones. El primer elemento es **<%** y el segundo elemento es **%>** ;) Vue.js entiende que el primer valor corresponde para la apertura y el segundo, para el cierre.

### Línea 4

{% highlight javascript %}
data: { // toda la información que querramos poner en el HTML va acá
{% endhighlight %}

En esta línea tendríamos la creación del objeto "data". Tiene facha de variable convencional, pero fijate que se declara distinto. Una variable se define con las palabras claves **var** o **let**, así:

{% highlight javascript %}
var miNombre = "Santiago";
{% endhighlight %}

Si tuviera que leer y mostrar mi variable, tendría que hacer:

{% highlight javascript %}
console.log(miNombre); // imprimo "Santiago" por la consola del navegador
{% endhighlight %}

Sin embargo, si yo creara un objeto de javascript convencional, tendría que hacer lo siguiente para crearlo y leerlo:

{% highlight javascript %}
var mascota = {
    cualidades: {
        nombre: 'Draco',
        pelo: 'negro',
        edad: 5,
        tipo: 'perro'
    },
    dueno: {
        alias: 'Pepe',
        nombre: 'El sapo Pepe',
        ciudad: 'Olivos',
        provincia: 'Buenos Aires',
        edad: 60
    }
};
console.log(mascota.cualidades.nombre + ' es el ' + mascota.cualidades.tipo + ' de ' + mascota.dueno.nombre + '. ' + mascota.dueno.alias +', y por consecuente ' + mascota.cualidades.nombre + ', viven en ' + mascota.dueno.ciudad + '.'); // Imprime "Draco es el perro de El sapo Pepe. Pepe, y por consecuente Draco, viven en Olivos."
{% endhighlight %}
# Parámetros específicos de Vue.js, en el HTML

Vue tiene varios parámetros que pueden adicionarse a los clásicos tags de HTML. Miremos a continuación :)

## v-bind

.

## v-if

.

## v-on

.

**Continuará...**

<script>
var app = new Vue({
    el: '#app',
    delimiters: ['<%',
    '%>'],
    data: {
        titulo: 'Prueba con Vue',
        mensaje: '¡Hola Vue!'
    }
    })
</script>