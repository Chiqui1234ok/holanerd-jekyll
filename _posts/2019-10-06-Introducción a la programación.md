---
layout: post
title: Introducción a la programación (Capítulo 1)
image: https://cdn.suwalls.com/wallpapers/vector/personal-computer-34562-1920x1200.jpg
date: 2019-10-12 14:50
category: tutoriales
author: Santiago Gimenez
tags: [introduccion, programacion, variables, c]
summary: Aprendé sobre los elementos básicos de la programación
---

Hoy nos juntamos para aprender lo básico de la programación. Ingresamos a [Mumuki](https://mumuki.io/central) para comenzar a darle instrucciones a una computadora y tener una respuesta. ¡Buenísimo! ¿Qué vimos en este primer capítulo de **Mumuki** y qué es lo que pasa detrás?


# Los tableros
## Una forma de ver "la memoria"

Nuestra computadora (y no nos olvidemos de tablets, smartphones y hasta los electrodomésticos "smart") crea tableros por cada programa, [cómo lo muestra Mumuki](https://mumuki.io/central/exercises/259-fundamentos-primeros-programas-el-tablero). La mejor forma de visualizar "un tablero" es recordando las tablas del Excel, que son algo cómo ésto:

![Tablero-de-memoria](https://raw.githubusercontent.com/sagrado-corazon-alcal/mumuki-fundamentos-gobstones-guia-1-primeros-programas/master/3x2.png)

En cada casillero se guarda información. Suponete que estamos viendo las entrañas de tu navegador web, que ahora mismo te muestra esta linda página. Las celdas tienen datos que ocupan memoria, cómo el fondo de este sitio web, el texto, los menúes y pestañas, plug-ins y miles de cosas más :O

Ojo, ojito, ojete, porque cada casillero es **variable**. Sus datos pueden cambiar mientras el programa está siendo ejecutado. Un programa también tiene datos **constantes** y puede "llamar" a **funciones** que resuelven cositas, tomando y modificando datos. Vamos a ver esto en un rato :)


# Palabras clave al programar
## ¿Podemos hablar cómo queramos con la PC? ¿O hay un estándar a seguir, cómo cuándo hablamos Español?

Hay palabras reservadas del lenguaje y que no podemos usar nosotros para crear variables/constantes ni funciones. Y yendo más allá, no podemos declarar (crear) una variable con mismo nombre que una función, y viceversa.

> Sería algo así cómo cuándo hay dos "Santiagos" en la clase, llamás a uno pero te miran los dos. Rompés todo (?)

Por ejemplo, en **javascript** podemos crear una variable con la siguiente sintáxis:

{% highlight javascript %}
    var miVariable; // "var" se usa para crear una variable global
{% endhighlight %}

Sin embargo, no podemos crear una variable con el nombre "var", porque javascript pensará que estas creando una variable dos veces, pero sin nombre.

Y cuándo creamos una función, lo hacemos con:

{% highlight javascript %}
    function miNombreDeFuncion()
    {

    }
{% endhighlight %}

Y si bien en español "quiosco" y "Quiosco" pueden significar lo mismo, no es así para la mayoría de los lenguajes de programación. **Es otro factor a tener en cuenta** cuándo declares una variable o compares dos textos. Los lenguajes suelen ser "case-sensitive" y por eso uno podria crear una variable de nombre **cantidadDePasos** y otra **cantidaddepasos**... es confuso y poco recomendable, pero la posibilidad está.

Así mismo, si cantidadDePasos contiene "cuatro" y cantidaddepasos contiene "Cuatro", si quisieramos chequear la igualdad la máquina probablemente diría que son palabras distintas.


# Guardemos más datos
## Variables y constantes

Supongamos que tenemos un país con un dólar fijo en $50, y vendemos tres productos en nuestro local. Podríamos declarar un dato constante para el dólar, porque no se debería mover a lo largo de la ejecución del programa ni tendríamos que importarnos el dato constantemente de (por ejemplo) [Banco Nación](bna.com.ar). 

-Suponete- tenemos publicada en la tienda de nuestro local una PC de oficina por $200 dólares, una tablet por $55 dólares y un celular por $400 dólares. Manos a la obra :)

{% highlight javascript %}
    const dolar = 50; // Precio del dolaruco
    const pc = 200, tablet = 55, celular = 400; // Podemos crear variables en una misma línea
{% endhighlight %}

También podríamos crear una **variable** para el monto a pagar, un dato que cambia conforme vayamos comprando productos, e incluso podría verse afectado por algún descuento. Nosotros hacemos un descuento del 5% cuándo se compran tres productos o más. ¿Te animás a completar los casilleros con la información que te di recién?

<p><input type="text" id="type0" /> montoAPagar;</p>
<p><input type="text" id="type1" /> descuento = 0,05;</p>
<p><button type="button" id="checkDataExercise">Comprobar</button></p>


# El selector
## ¿Cómo nos movemos por esos datos al programar?

La compu está recibiendo instrucciones y guarda la mayoría de datos en la memoria RAM que tenga disponible. ¿Cómo vemos esos datos?

Para ver una variable es tan fácil cómo llamar a la función **console**, acceder a su "hijo" **log** y pasarle parámetros. ¿Qué es una función y un objeto? Lo veremos más adelante, pero de momento hay que estar contento con esta sintáxis:

{% highlight javascript %}
    console.log('Descuento: ', montoAPagar);
{% endhighlight %}


# ¡Procesemos y clasifiquemos datos!
## Funciones :)

..


# Manejo del texto
## ¿Comillas simples o dobles?
En lenguajes cómo C y C++ **es crítico el tipo de las comillas a usar**. Mientras que las comillas simples se utilizan para variables de un sólo carácter, las dobles se usan para cadenas de texto, que usualmente almacenan una palabra o más.

Osea que si querés hacer esto:

{% highlight c %}
    char estoEstaMal = 'una';
{% endhighlight %}

¡No podés! Eso es más de un carácter y en estos lenguajes se manejan un poco diferente con respecto a lenguajes cómo Javascript. La manera correcta es:

{% highlight c %}
    char estoEstaBien = "Una";
{% endhighlight %}

En Javascript utilizar comillas simples o dobles **no es crítico**, pero es útil usar un tipo u otro según el contexto, me explico:

{% highlight html %}
    <a href="#" onclick="resolverElHambreMundial('con mucha inversión')">Clic aquí para resolver el hambre mundial</a>
{% endhighlight %}

¿Viste cómo usé comillas simples cuándo envié el texto "**con mucha inversión**" a la función **resolverElHambreMundial**? Esto es clave para no confundirse nunca al mezclar HTML con Javascript. Mirá que tengo que hacer si usara comillas dobles por todos lados.

{% highlight html %}
    <a href="#" onclick="resolverElHambreMundial(\"con mucha inversión\")">Clic aquí para resolver el hambre mundial</a>
{% endhighlight %}

¡Si! Coloqué barras invertidas antes de las comillas dobles (\). Esto es porque si ponemos una comilla doble luego de **resolverElHambreMundial(**, HTML piensa que ahí se termina nuestro parámetro **onclick** y nuestro navegador web interpreta el código mal:

![Mal escape de comillas dobles]('{{ site.url }}{{ site.baseurl }}/assets/img/introduccion-a-la-programacion/escapeDeComillas.png')

¿Resultado? Nunca se va a ejecutar la función que resuelve el hambre mundial con un poco de inversión :(


## Maneras de manejar cadenas: "," y "+"

..



## Conclusión