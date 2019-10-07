---
layout: post
title: Introducción a la programación (Capítulo 1)
image: https://cdn.suwalls.com/wallpapers/vector/personal-computer-34562-1920x1200.jpg
date: 2019-10-06 15:51
category: tutoriales
author: Santiago Gimenez
tags: [introduccion, programacion, variables, c]
summary: Aprendé sobre los elementos básicos de la programación
---

Hoy nos juntamos para aprender lo básico de la programación. Ingresamos a [Mumuki](https://mumuki.io/central) para comenzar a darle instrucciones a una computadora y tener una respuesta. ¡Buenísimo! ¿Qué vimos en este primer capítulo de **Mumuki** y qué es lo que pasa detrás?


## Los tableros
### Una forma de ver "la memoria"

Nuestra computadora (y no nos olvidemos de tablets, smartphones y hasta los electrodomésticos "smart") crea tableros por cada programa, [cómo lo muestra Mumuki](https://mumuki.io/central/exercises/259-fundamentos-primeros-programas-el-tablero). La mejor forma de visualizar "un tablero" es recordando las tablas del Excel, que son algo cómo ésto:

![](https://raw.githubusercontent.com/sagrado-corazon-alcal/mumuki-fundamentos-gobstones-guia-1-primeros-programas/master/3x2.png)

En cada casillero se guarda información. Suponete que estamos viendo las entrañas de tu navegador web, que ahora mismo te muestra esta linda página. Las celdas tienen datos que ocupan memoria, cómo el fondo de este sitio web, el texto, los menúes y pestañas, plug-ins y miles de cosas más :O

Ojo, ojito, ojete, porque cada casillero es **variable**, es decir, sus datos pueden cambiar mientras el programa está siendo ejecutado. Un programa también tiene datos **constantes** y puede "llamar" a **funciones** que resuelven cositas, tomando y modificando datos. Vamos a ver esto en un rato :)


## Palabras clave al programar
### ¿Podemos hablar cómo queramos con la PC? ¿O hay un estándar a seguir, cómo cuándo hablamos Español?

Hay palabras reservadas del lenguaje y que no podemos usar nosotros para crear variables/constantes ni funciones. Y yendo más allá, no podemos declarar (crear) una variable con mismo nombre que una función, y viceversa.

> Sería algo así cómo cuándo hay dos "Santiagos" en la clase, llamás a uno pero te miran los dos. Rompés todo (?)

Y si bien en español "quiosco" y "Quiosco" pueden significar lo mismo, no es así para la mayoría de los lenguajes de programación.


## Guardemos más datos
### Variables y constantes

Supongamos que tenemos un país con un dólar fijo en $50, y vendemos tres productos en nuestro local. Podríamos declarar un dato constante para el dólar, porque no se debería mover a lo largo del programa. 

También vendemos una PC de oficina por $200 dólares, una tablet por $55 dólares y un celular por $400 dólares. Manos a la obra :)

{% highlight javascript %}
const dolar = 50; // Precio del dolaruco
const pc = 200, tablet = 55, celular = 400; // Si, podemos crear variables en una misma línea, así
{% endhighlight %}

También podríamos crear una **variable** para el monto a pagar, un dato que cambia conforme vayamos comprando productos, e incluso podría verse afectado por algún descuento. Nosotros hacemos un descuento del 5% cuándo se compran tres productos o más. ¿Te animás a completar los casilleros con la información que te di recién?

## El selector
### ¿Cómo nos movemos por esos datos al programar?

La compu está recibiendo instrucciones y guarda la mayoría de datos en la memoria RAM que tenga disponible. ¿Cómo vemos esos datos?