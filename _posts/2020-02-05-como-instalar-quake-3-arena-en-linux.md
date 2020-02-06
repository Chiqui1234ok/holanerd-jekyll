---
layout: post
title: ¿Cómo instalar Quake III Arena en Linux?
image: https://steemitimages.com/p/F1sR3uPuh6LGwo3L3pvzZfrseUKu56YtMc5ER74DJqnrmL4M8d3d97W2rwiidowygifXRBajXK4eCLgCtY5UXGHM87Fi2rYyftZ54SmZWK8M1wgTyKT1RFv4x12M5HXUokFf9UFw8WKx345N2UYbZuu6kpR4QSvrfczzqJzCtEk2aiYy1gdh5v1o9fZBy6bx51NhBxzRJTgv1BbSXcSF2BmYviXT?format=match&mode=fit&width=640
date: 2020-02-05 22:00
category: linux
author: chiqui
tags: gaming, quake, quake arena, quake 3, packages, pak
summary: Jugar al Quake 3 Arena es muy fácil, ¡reviví tu infancia en tu máquina linuxera!
---
Hace un montón que juegos similares al Quake III Arena estaban en Linux, en forma de Warsow o Xonotic... 
Sin embargo, hace muchos años ya existe **openarena** y el mismísimo **ioquake3**, los motores gráficos que corren el juego :)
Si tenés los archivos del juego necesarios, te funcionará todo de perlas. Si no tenés los archivos **.pak** no te preocupes, [aquí compilé](#) **quake3-data** para que puedas tener los datos del juego y revivir esas épocas sin tanto lío.
Sin embargo, en este tutorial también te enseñaré cómo compilar los datos del juego dentro de un archivo .deb instalable gracias al software **game-data-packager**.

# Instalar Quake 3 Arena
Podés hacerlo desde la tienda, buscando "Quake 3 Arena", o también instalando el paquete **quake3** desde apt o cualquier otro gestor de paquetes que tenga este software entre sus repositorios :D
**Nota**: Desde la tienda es muy posible que se cuelgue la instalación, pero que en realidad sí se haya instalado el juego.

# Montar la ISO
¿El juego está instalado? Bien, pero no lo abras todavía porque faltan los datos para que el motor gráfico te muestre algo en pantalla. Bajate la ISO desde [acá](#), creá una carpeta para montar el disco y luego, usa **mount** para tener el disco iso en una carpeta.
En esta imágen verán que mi ISO estaba dentro de mis documentos y creé una carpeta **.iso** (oculta) dentro de mi /home/santiago (recuerda que escribir **~/** es lo mismo que la carpeta home de tu usuario). 

![https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/5-crear-una-carpeta-para-montar-la-iso.webp](Montar la imágen ISO en la carpeta que prefieras)

# Generar los datos para el juego
![https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/7.5-instalar-el-empaquetador.webp](Instalar game-data-packager desde APT)
Instala **game-data-packager** desde tu gestor de paquetes y ejecuta este comando, cambiando las rutas según te corresponda. ¡OJO! Al programa le envío las rutas de los archivos **pak0.pk3** y **pak1.pk3**, dentro de la carpeta **baseq3** en la imágen ISO.

> game-data-packager -i quake3 '/home/santiago/.iso/Quake3/baseq3/pak0.pk3' '/home/santiago/.iso/Quake3/baseq3/pak1.pk3'

Arrojará unos *warnings* pero el juego luego me corrió perfecto. Cualquier cosa, [acá está quake3-data compilado](#).
Luego de terminar, te pedirá las credenciales para realizar un *upgrade* sobre el quake3-data "dummie" que se instala por defecto. Configurará todo solo.
![https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/9-auto-upgrade-a-quake-data.webp](Instalar el quake3-data recién horneado en nuestro sistema)

# Disfrutar
¡Listo! Corre a la perfección
![https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/10-quake-3-funcionando.webp](Quake 3 funcionando)

No te pierdas del multiplayer, que te hará sentir viejo y sin reflejos hasta que te acostumbres :P
![https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/11-incluso-tiene-muchos-servidores-online.webp](Servidores online de Quake 3)

Un dato no menor es que podés girar la cámara del personaje con las flechas del teclado, por si no quieres parar de jugar desde una netbook o notebook sin el frustrante trackpad...

¡Ojalá lo disfrutes! Un saludo
