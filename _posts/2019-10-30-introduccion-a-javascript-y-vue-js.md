---
layout: post
title: Introducción a Javascript y Vue.js
image: https://miro.medium.com/max/850/0*BRrBBgjCGAzRniV8.jpg
date: 2019-10-30 20:00
category: programacion
author: chiqui
tags: introduccion, programacion, javascript, vuejs
summary: Cómo usar Javascript junto a Vue.js, uno de los frameworks más fáciles de implementar
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

![Captura-Vue-Devtools](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/introduccion-a-javascript-y-vue-js/vue-devtools.JPG)

Si querés, podés buscar el plugin **Vue Devtools**. ¡Está en los navegadores más usados!
Este plugin te dará información acerca del rendimiento y tiene varias cosas más específicas para Vue que las propias "Herramientas para desarrollador" que poseen Chrome y Firefox, por ejemplo.

# Introducción

.

## ¿Qué es un objeto?

.

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
{{ site.url }}
{% endhighlight %}

En **holanerd.net**, a la hora de compilar. Es algo así cómo los #define de C y C++. Sin embargo, Vue.js es mucho más dinámico... veamos a continuación parte de nuestro HTML :)

{% highlight javascript %}
    <div id="app"> <!-- ID afectado por Vue.js -->
        [[ titulo ]]
        [[ mensaje ]]
    </div>
{% endhighlight %}

Y podemos tener un javascript (Vue.js) así:

{% highlight javascript %}
    var app = new Vue({
    el: '#app', // el ID que queremos afectar en nuestro HTML
    data: {
        titulo: 'Prueba con Vue',
        mensaje: '¡Hola Vue!'
    }
    })
{% endhighlight %}

<div id="app"> <!-- ID afectado por Vue.js -->
    <h3>[[ titulo ]]</h3>
    <p>[[ mensaje ]]</p>
</div>

<script>
var app = new Vue({
    el: '#app', // el ID que queremos afectar en nuestro HTML
    delimiters: ["<%","%>"],
    data: {
        titulo: 'Prueba con Vue',
        mensaje: '¡Hola Vue!'
    }
    })
</script>