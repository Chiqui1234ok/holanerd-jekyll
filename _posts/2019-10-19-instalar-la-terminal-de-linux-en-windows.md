---
layout: post
title: Instalar la terminal de Linux en Windows (2019)
image: {{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux-en-windows/poster.jpg
date: 2019-10-19 20:50
category: programacion
author: chiqui
tags: linux, terminal, consola, ubuntu en windows, subsistema de windows, windows subsystem
summary: Tené las herramientas Linuxeras bien a mano en Windows. Sentite cómo en casa :)
---
Ya hace mucho rato que tengo Windows 10 instalado en la PC de escritorio. La división de tareas estaba claramente marcada en casa:
La compu grande para jugar pero la notebook con Ubuntu es ideal para trabajar y programar, listo. :D

La necesidad de tener una pantalla grande al ver los preciosos jeroglíficos de C/C++ se volvió **muy evidente** y yo estaba entre lanzar un -lento y no responsivo- TeamViewer a la notebook, o conectar la maquinita en el living con la tele, los gatos, las bendiciones y el timbre del motoquero que ~~nos entrega una pizza~~ se equivocó de timbre y era para el vecino :(

Buscando cómo hacer mi vida más amena en Windows, me topé con el **Windows Subsystem for Linux**. Este software ojalá no sea el caballo de troya para las distribuciones del pinguino porque, sacando el hecho de que la mayoría son copy & paste entre sí, son buenas.
¡Vamos al tutorial!

# ¿Cómo activar Linux en Windows?

Lo dividí en 3 pasos principales, el cuarto es reiniciar, algo que no suele pasar en Linux :P
![aqui-no-hacemos-eso](https://pm1.narvii.com/6910/ae67563a2ad03e8cb9db7b4fd946b1722a642ee2r1-1078-572v2_hq.jpg)

### 1. Andá al menú inicio

![paso-1]({{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux/1-menu-inicio.jpg)

### 2. Escribí "características"

![paso-2]({{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux/2-caracteristicas.jpg)

Y seleccioná "Activar o desactivar las características de Windows" :)

### 3. Activar el subsistema

![paso-3]({{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux/3-activar-subsistema-de-linux.jpg)

### 4. Reiniciar 

Si si, reiniciá y si tenés un navegador con dos dedos de frente, te vuelve a abrir esta página web :D

# Antes de encender todo

Si vamos al menú inicio y tipeamos "bash" en el Menú inicio, tendremos un nuevo programa a mano llamado "bash.exe" pero que al clickearlo, no abre o te imprime este mensaje.

![error-que-tuve]({{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux/4-error.jpg)

Si te sucede ésto, deberás abrir la tienda de Windows. Busqué "Ubuntu", ¡y tarán! Instalé, tipeé "Ubuntu" en mi menú inicio y ahí estaba <3
Nos pide nombre de usuario y contraseña para crear el nuevo usuario UNIX. Luego de eso, se instala en alrededor de un minuto.

![instalacion-gcc]({{ site.url }}{{ site.baseurl }}/assets/img/instalar-la-terminal-de-linux/8-instalamos-lo-que-sea-en-el.jpg)

Recordá que antes de hacer algo con **apt** deberás ejecutar la acción **apt update**, para que levante los meta-datos de los repositorios.


Ahora podrías tener Visual Studio Code, que tiene un plugin para trabajar con este subsistema :) [Más info acá](https://code.visualstudio.com/docs/remote/wsl#_getting-started)

¡Un gusto leer con ustedes! 
