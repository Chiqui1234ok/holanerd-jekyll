---
layout: post
title: Compilar y debuggear C y C++ en Visual Studio Code
image: https://chiqui1234.github.io/holanerd-jekyll/assets/img/compilar-c-y-cplusplus-en-visual-studio-code/poster.webp
date: 2019-11-02 12:00
category: programacion
author: chiqui
tags: compilar, vscode, visual studio code, vscode ide, gcc, g++
summary: ¿Abrís la consola/terminal para compilar tu código C? Aprendé cómo preparar VSCode para que compile, ejecute y depure tu programa en C/C++ (y aplicable a otros lenguajes)
---

Antes de comenzar, tené en cuenta que instalé gcc y g++ con **Linux en Windows**. Es una manera bastante práctica y "oficial", mejor que Cygwin o MinGW en mi opinión :)
Mirá el tutorial para instalar esos compiladores [acá](/programacion/2019/10/19/instalar-la-terminal-de-linux-en-windows.html).

Si tenés alguna distribución Linux basada en el gestor apt (Mint, *buntu, Debian), deberías instalar (además de VSCode):

> sudo apt install gcc g++ gdb build-essential

ó si está basado en dnf (Fedora)

> sudo dnf install gcc g++ gdb build-essential

creo que en Manjaro/Arch Linux usan Pacman y el comando era así:

> sudo pacman -S gcc g++ gdb build-essential

Es muy probable que al menos gcc esté instalado, pero siempre es bueno asegurarse :D

Con eso instalado (o si ya tenías Cygwin/MinGW no pasa nada, sólo tendrás algunas rutas al compilador y depurador distintas) podemos arrancar **tranquilamente**.

La clave de todo esto está dado, más allá de tener instalado el compilador (gcc en el caso de C) y el depurador (gdb), en dos archivos que Visual Studio Code revisa cada vez que apretás la tecla **F5**.

# ¿Dónde se ubican los archivos?

![vscode-carpetas](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/compilar-c-y-cplusplus-en-visual-studio-code/vscode-folder.webp)

Deberán estar en la raíz de tu proyecto, dentro de la carpeta .vscode. Por ejemplo, si yo tengo una carpeta llamada **Pilas-colas-listas/** (la raíz del proyecto), adentro voy a tener una carpeta llamada **.vscode** (con el puntito al principio, si) con al menos dos archivos.

* tasks.json
* launch.json

# ¿Qué variables existen para definir una ruta dentro de mi proyecto?

Estas variables te van a servir para que Visual Studio Code sepa a qué carpeta ir y qué archivo ejecutar y compilar.

![travolta-confundido](https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg)

Es **muy importante** abrir **una carpeta** con VSCode (y no un archivo individual), para que el programa pueda setear estas variables tanto para uso de tasks.json/launch.json cómo también para la terminal (si, podés abrir una terminal dentro de VSCode, también con CTRL+Shift+C si la querés en una ventana aparte).

* ${workspaceRoot}: dirección raíz de tu carpeta abierta con vscode
* ${file}: archivo actual (el que está en focus)
* ${fileDirname}: ruta hasta el archivo (en focus)
* ${fileExtname}: extensión del archivo (en focus, ejemplo ".exe")
* ${fileBasenameNoExt}: nombre del archivo (en focus, sin extensión)

Es un poco engorroso pero es muy probable que uses 2 o 3 en tu vida :P

Ahora pasemos a ver cada json y qué magia hacen :) Cómo estarás pensando, vamos a usar alguna de éstas variables para poder compilar cualquier archivo .c, ¡incluso dentro de sub-carpetas!

# tasks.json

Este archivo se encarga de ejecutar tareas, como su nombre lo indica. Está en formato json y es relativamente sencillo de comprender. Un tasks.json convencional podés crearlo dentro de VSCode apretando **F1** y escribiendo "Tasks". Deberías seleccionar del menú lo que más te convenga. En lo personal suelo elegir "Configure tasks" > "Create json file from template" > Elegir el template que se adecúe a tu compilador.

Puede suceder que tu compilador o lenguaje no figure en las templates. En ese caso, elegí cualquier template... de todas formas tenemos que editar el código :)

Mi tasks.json es así:

{% highlight json linenos %}
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558 for docs
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "shell",
            "command": "gcc",
            "args": [
                "-g",
                "${fileDirname}/main.c",
                "${fileDirname}/funciones.c",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}.o"
            ],
            "group": "build",
            "presentation": {
                "reveal": "silent"
            },
            "problemMatcher": "$msCompile"
        }
    ]
}
{% endhighlight %}

Lo importante es saber que el dato que contiene **label**, es el nombre de esa tarea (osea, "build"). Tené en cuenta que ésto es una clave dentro del objeto "tasks", cómo expliqué en [la introducción a programación](/programacion/2019/10/12/Introduccion-a-la-programacion.html#objetos) o [codeé en este tutorial de Vue.js](/programacion/2019/10/30/introduccion-a-javascript-y-vue-js.html#comencemos-con-el-código).

Existen otras claves, cómo **command** y **args**, ¡esto es lo más importante!

Cuándo era jóven y compilaba "a mano" escribiendo un comando en la terminal, hacía esto:

> gcc -g main.c funciones.c -o main.o

![gif-sorprendido](https://i.kym-cdn.com/photos/images/newsfeed/001/340/531/04c.gif)

Entendamos a **gcc** cómo el command de nuestro tasks.json. En realidad es una ruta al compilador, pero en sistemas Linux y WSL basta con poner el nombre del ejecutable (Linux solito buscará dentro de **usr/bin/** el ejecutable gcc).

¡Ojo! Si tenés MinGW o Cygwin en Windows tenés que poner la ruta completa a tu compilador, por ej (para cygwin64):

> c:\\\cygwin64\\\bin\\\gcc

Sin embargo, si **c:\\\cygwin64\\\bin** está en tu PATH (Windows) podrías llamar a gcc (y todos los ejecutables que estén dentro de tu "bin") de la misma manera que WSL/Linux/MacOS.

Todo lo que le sigue a la palabra "gcc" son **argumentos**.

* **-g** crea la información necesaria dentro de **main.o** para poder depurar el programa
* **main.c funciones.c** son los archivos a compilar
* **-o** establece el nombre del archivo compilado, que es **main.o** (con extensión .o, en Windows y si no tenés WSL puesto tendría que tener extensión .exe)

Básicamente y como viste en el tasks.json, tenés que separar cada palabra y meterlo dentro del vector **args** cómo figura más arriba.

Recordá que ${fileDirname} da la ruta hasta el archivo focuseado y luego le agrego **main.c** y abajo hacemos lo mismo, pero escribiendo **funciones.c**.

Estos dos nombres .c (o si tenés más archivos C) adaptalos según tu proyecto :)

# launch.json

Este archivo se encarga, simplemente, de llamar a **tasks > build** si el dato de "preLaunchTask" es "build", aunque preLaunchTask puede tomar cualquier otro valor. Osea, launch.json lanza **build** gracias a que preLaunchTask = "build". Tranqui, en un segundo vemos el código para que te ubiques :)

{% highlight json linenos %}
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "preLaunchTask": "build",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}/${fileBasenameNoExtension}.o",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ],
        }
    ]
}
{% endhighlight %}

Hay otra clave: **program**. ¿Te acordás de mi tasks que puse arriba? Ahí puse dos argumentos:

* **-o** (para indicar que quiero un nombre específico para mi programa compilado)
* **${fileDirname}/{$fileBasenameNoExtension}.o** (este es el nombre del programa ya compilado, suponete **main.o**)

Esto tiene que coincidir en tasks y launch, para que el nombre de lo que compilás y próximamente ejecutás, sea exactamente el mismo.

# Conclusión

Si configuraste bien las rutas (lo único que hay que hacer, en realidad) deberías poder hacer F5 en tu archivo .c que quieras compilar y eso va a compilar, correr y depurar (debuggear) el programa.

Algo así deberías ver al apretar F5 para correr tu programa. Sobretodo si seguiste la guía para [activar WSL en Windows](/programacion/2019/10/19/instalar-la-terminal-de-linux-en-windows.html) o estás trabajando en algún sistema con kernel Linux.

![vscode-carpetas](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/compilar-c-y-cplusplus-en-visual-studio-code/vscode-activado.webp)

¿Te sirvió el post? ¡Ojalá que sí!