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

# Introducción

.

## ¿Qué es un objeto?

Un objeto tiene variables y formas de comportarse. 
Supongamos que un perro es un objeto. Para muchos el canino es algo mucho mejor, pero en programación la movida es así :P
Si quisieramos simular un perro en programación, claramente tendríamos que describir el nombre, la suavidad y color de su pelo, el tamaño, la raza, su comida favorita y más. Pero el perro no sólo tiene cualidades (en programación le decimos "propiedades"), sino también comportamientos ("métodos" o "funciones"). Los perros ladran, saltan, corren, comen y miman.

Dicho de otra forma, un objeto en javascript (y en cualquier otro lenguaje orientado a objetos) puede contener datos (sus propiedades) y métodos (sus comportamientos). En esta introducción no vamos a indagar tanto en crear métodos dentro de los objetos. Pasito a pasito :)

## ¿Qué es un div en HTML?

.

## ¿Qué hacemos con ese div en CSS?

.

## ¿Cómo interacciona javascript con un objeto?

.

# Comencemos

**Vue.js** tiene una sintáxis en el HTML muy similar a **Liquid**, otro lenguaje que usa Jekyll por defecto y es una manera de tener "variables", o algo así.

En realidad, Liquid reemplaza cosas cómo:

{% highlight liquid %}
[[ site.url ]]
{% endhighlight %}

En **{{ site.url }}**, a la hora de compilar. Es algo así cómo los #define de C y C++. Sin embargo, Vue.js es mucho más dinámico... veamos a continuación parte de nuestro HTML :)

{% highlight html linenos %}
    <div id="app" title="ID afectado por Vue.js"> 
        <% titulo %>
        <% mensaje %>
    </div>
{% endhighlight %}

Y podemos tener un javascript (Vue.js) así:

{% highlight javascript linenos %}
    var app = new Vue({ // Crea una instancia (un objeto) nuevo
    el: '#app', // configuramos el ID que queremos afectar en nuestro HTML
    delimiters: ["<%",
    "%>"], // delimitadores, lo veremos más adelante
    data: { // toda la información que querramos poner en el HTML va acá
        titulo: 'Prueba con Vue', // variable 'titulo' que pertenece al objeto 'app'
        mensaje: '¡Hola Vue!' // variable 'mensaje' que pertenece al objeto 'app'
    }
    })
{% endhighlight %}

<div id="app" style="background: #eee;padding: 10px;" title="ID afectado por Vue.js">
    <p>¡Esto corre con Vue.js!</p>
    <h3><% titulo %></h3>
    <p><% mensaje %></p>
</div>

## ¿Qué sucedió acá?

Seguramente, si ya tenés la extensión **Vue devtools** te fijaste que tengo dos claves en mi código. Se llaman **titulo** y **mensaje** y están dentro de la variable/objeto "data". Fijate cómo es la sintáxis del objeto data que, dicho sea de paso, podría haber más de un objeto dentro de mi instancia Vue. La instancia Vue se crea dentro de una variable, en esta línea:

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

Continuará...

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