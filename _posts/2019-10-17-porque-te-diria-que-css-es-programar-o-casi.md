---
layout: post
title: Porqué te diría que CSS es programar (o casi)
date: 2019-10-19 19:35
image: https://www.tutorialrepublic.com/lib/images/css-illustration.png
category: programacion
author: chiqui
tags: css, programar, maquetar, web
summary: CSS avanzó mucho desde el comienzo del estándar hasta hoy. Veamos porqué hoy lo considero un lenguaje de programación más.
---

![Estructura-del-css](https://www.w3schools.com/whatis/img_selector.gif)

Escribís la etiqueta que querés personalizar, abrís una llave, ponés propiedades y valores nuevos, cerrás la llave y that's it :)

Un lenguaje de marcado cómo es HTML no debería ser considerado un lenguaje de programación. Los programadores más finos (y/o los más intolerantes y **especiales**) odian que digas eso, pero entre amigos entendemos perfectamente lo que quisiste decir.

**CSS** está más cerca de ser un lenguaje de programación, aunque anda a mitad de camino porque sus raíces fueron ser méramente un lenguaje de estilos.

Sin embargo, programar un programa para resolver una necesidad o problema no puede hacerse sólo con HTML y CSS, osea, no podemos crear un software de back-end (el que procesa datos) con estas dos tecnologías.

# HTML y CSS pueden servirte si no programaste nunca

Si sos nuevo en el rubro, HTML y CSS es una manera increíble y práctica de comenzar. Primero, porque tiene conceptos cómo la división entre "qué hacer" y el "cómo hacerlo". Esto sería el equivalente a un archivo **.h** en C++ y el archivo **.cpp**, respectivamente.
Los programas cómo mínimo se dividen en dos etapas a la hora de codearlo. Algo así:

## ¿Qué tengo que hacer?

![Diagrama-de-flujo-de-ejemplo](https://www.edrawsoft.com/flowchart/images/programming-flowchart.png)

¿Ya pensaste qué aplicación armar? Yo quiero un convertidor de Bitcoin (BTC) a dólares. Sé que voy a tener una función que recibirá la entrada del usuario (los Bitcoins que tengo) y otra función que convertirá esa cantidad de BTC a dólares.

> ¿No sabés qué es una función? [Leete la Introducción a la programación](programacion/2019/10/12/Introduccion-a-la-programacion.html).

Ok, escribo los nombres de funciones, el flujo de datos de mi programa,algunos comentarios para guiarme y prosigo.
Nada puede malir sal.

## ¿Cómo hacerlo?

Seguramente ya pensaste más o menos cómo hacerlo. Acá uno no se limita a los nombres de funciones, sino que se debe explicar y codificar (escribir código) lo que hacen esas funciones.

# ¿Por qué HTML y CSS ayudan a que aprendas un lenguaje de programación más rápido?

![Model-View-Controller](https://miro.medium.com/max/1080/0*Qf1s2lG86MjX-Zcv.jpg)

Los lenguajes de programación tienen conceptos cómo Modelo-Vista-Controlador (una manera eficiente y modular de crear software), los objetos, objetos que se basan en otros objetos, modularidad, variables y funciones. Acá se ve todo eso de manera fluída y aparte podés venderle una solución web a alguien muy rápido, sin liarte con mucho y poder "programar" (en realidad, se dice "maquetar") el sitio web desde una netbook barata y un Linux ligero, mientras estás en tu patio :P

Estos conceptos que comenté en el párrafo anterior los ves constantemente y de forma didáctica. 

## Variables

Para **crear una variable en CSS**, simplemente deberías escribir:
{% highlight css %}
    --tuVariable: "las variables soportan cadenas de texto, colores rgba y hex, entre otras cosas";
{% endhighlight %}

¡**Ojo**! Las variables se crean dentro del **selector :root**:

{% highlight css %}
    :root
    {
        /*  Tu código   */
    }
{% endhighlight %}

Si quisieras usar el dato de esa variable, usás la función **var()** :)

{% highlight css %}
    var(--tuVariable);
{% endhighlight %}

## Funciones

Hay varias [viejas](https://www.w3schools.com/cssref/css_functions.asp) **funciones en CSS**, pero las nuevas son muy interesantes también. Por ejemplo:
{% highlight css %}
    calc(a + b); /* Calcula un número contra otro. Puede calcular medidas de píxeles, viewport, porcentajes y más */
{% endhighlight %}

{% highlight css %}
    repeat(2, 50vw); /* Equivalente a escribir "50vw 50vw", esta función dice "escribí '50vw' 2 veces".
{% endhighlight %}

## Clases u objetos

El diseño web nace con los objetos en mente, algo que se notó más cuándo CSS entró en escena. Para CSS, cada **id** o **clase** es un objeto. Entendemos por id cuándo en HTML leemos:

{% highlight html %}
    <div id="nuestroId">Contenido...</div>
{% endhighlight %}

Este **div** es cómo una caja (un objeto), que puede tener un sinfín de cualidades. Tan sólo mirá esta página. Tiene una barra de navegación, una caja centrada para que leas el texto y demás. Cada apartado de la web se trata "en cajitas" :) Del lado del CSS podemos darle estilo (cualidades), mirá a continuación :D

{% highlight css %}
    #nuestroId
    {
        width: 70%; /* Ancho del 70% */
        margin: 0 auto; /* Margen (externo) superior e inferior de 0, la izquierda y derecha se maneja de forma automática (se centra horizontalmente)    */
        background: #fafafa; /* Un gris al 5% */
        padding: 5px; /* Margen interno de la caja */
        border: 1px solid red; /* Borde de 1px de grosor, en color rojo */
    }
{% endhighlight %}

Si bien nuestro "objeto" tiene propiedades y un comportamiento (dado por cómo el navegador web **interpreta** la sintáxis), no soporta métodos, por lo cuál hasta el momento un ID o Clase en CSS no puede contener una función o variable dentro. 
De una manera muy primitiva, podemos llamar a una función dentro de una clase o ID. Esto es vital para cuándo queremos ejecutar una animación. Nada más.

CSS está muy cerca de convertirse en un lenguaje de programación pero, ¿es necesario? ¿interesa? Lo veremos en próximas revisiones de este práctico lenguaje de estilos. Un lenguaje que muchos adoptaron y algunos ni siquiera hacen el boceto en Photoshop, porque escribir CSS es realmente rápido...

¿Te gusta CSS? ¡Estate atento a nuestro curso de diseño web!
