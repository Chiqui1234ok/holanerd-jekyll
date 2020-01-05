---
layout: post
title: Instalar la terminal de Linux en Windows (2019)
image: https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/poster.webp
date: 2019-10-19 20:50
category: programacion
author: chiqui
tags: linux, terminal, ubuntu en windows, subsistema de windows, windows subsystem
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

![paso-1](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/1-menu-inicio.jpg)

### 2. Escribí "características"

![paso-2](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/2-caracteristicas.jpg)

Y seleccioná "Activar o desactivar las características de Windows" :)

### 3. Activar el subsistema

![paso-3](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/3-activar-subsistema-de-linux.jpg)

Tildá "Subsistema de Windows para Linux"...

### 4. Reiniciar 

Si si, reiniciá y si tenés un navegador con dos dedos de frente, te vuelve a abrir esta página web :D

# Antes de encender todo

Si vamos al menú inicio y tipeamos "bash" en el Menú inicio, tendremos un nuevo programa a mano llamado "bash.exe" pero que al clickearlo, no abre o te imprime este mensaje.

![error-que-tuve](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/4-error.jpg)

Si te sucede ésto, deberás abrir la tienda de Windows. Busqué "Ubuntu", ¡y tarán! Podemos decir sin temor a equivocarnos que Ubuntu está para Windows ;)

![ubuntu-para-windows](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/5-ubuntu-in-microsoft.jpg)

Instalé, tipeé "Ubuntu" en mi menú inicio y ahí estaba <3
Nos pide nombre de usuario y contraseña para crear el nuevo usuario UNIX. Luego de eso, se instala en alrededor de un minuto y podés arrancar a instalar apps.

![instalacion-gcc](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/8-instalamos-lo-que-sea-en-el.jpg)

Recordá que antes de hacer algo con **apt** deberás ejecutar la acción **apt update**, para que levante los meta-datos de los repositorios.


Ahora podrías tener Visual Studio Code, que tiene un plugin para trabajar con este subsistema :) [Más info acá](https://code.visualstudio.com/docs/remote/wsl#_getting-started).

**EDIT**: No leí mucho ese link, sin embargo los pasos a seguir son similares a ejecutar **code** desde la terminal de Linux. Si van a la carpeta en la que están programando (desde el Explorador de archivos de Windows 10) y:
* Shift + Clic derecho del mouse en algún espacio vacío del explorador.
* Click en "Abrir shell de Linux aquí".
* Una vez dentro de la terminal linux, escriben **code .** (si, con el puntito así code sabe que nos tiene que abrir toda la carpeta).

Se abre Visual Studio Code, detecta que está en un entorno Windows Subsystem for Linux (WSL) y te sugiere un plug-in. Lo instalás y la verdad, ya podés instalar plugins de VSCode en tu Subsistema Linux (cosa que hace por defecto) y **que práctico** es instalar Git con un comando y trabajar de forma idéntica que en Linux <3

Te vas a enterar que funciona todo cuándo veas este logo en la parte inferior izquierda ;)

![notificacion](https://chiqui1234.github.io/holanerd-jekyll/assets/img/instalar-la-terminal-de-linux-en-windows/notificacion.JPG)

# Se viene una nueva terminal de Windows 10

Edito este post para agregar que se viene una terminal nueva en Windows 10, más acorde al **Fluid Design** que cada vez está más pulido :)

Miren el video demo, y su [proyecto en GitHub](https://github.com/microsoft/terminal). Si querés tener la preview YA, andá a Microsoft Store y buscá "Windows Terminal" :) ¡Disponible a partir de la build 1903!

<iframe width="100%" height="350" src="https://www.youtube.com/embed/8gw0rXPMMPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

¡Un gusto leer con ustedes! 
