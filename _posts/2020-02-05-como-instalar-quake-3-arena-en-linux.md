---
layout: post
title: ¿Cómo instalar Quake III Arena en Linux?
image: https://4.bp.blogspot.com/_5PH5FtVhTFI/TMISAp_9kAI/AAAAAAAAADM/Spya1n8Mws0/s1600/quake3a.jpg
date: 2020-02-05 22:00
category: linux
author: chiqui
tags: gaming, quake, quake arena, quake 3, packages, pak
summary: Jugar al Quake 3 Arena es muy fácil, ¡reviví tu infancia en tu máquina linuxera!
---
Hace un montón que juegos similares al Quake III Arena estaban en Linux, en forma de Warsow o Xonotic... 
Sin embargo, hace muchos años ya existe **openarena** y el mismísimo **ioquake3**, los motores gráficos que corren el juego :)
Si tenés los archivos del juego necesarios, te funcionará todo de perlas. Si no tenés los archivos **.pak** no te preocupes, [acá compilé](https://drive.google.com/open?id=1i0cWXRs3MSDh6AA8Fj__CPao3aqMSzJu) **quake3-data** para que puedas tener los datos del juego y revivir esas épocas sin tanto lío. Es decir que instalas **quake3** desde APT y luego el deb del link anterior y listo.

Sin embargo, en este tutorial también te enseñaré cómo compilar los datos del juego dentro de un archivo .deb instalable gracias al software **game-data-packager**. Si querés hacer todo vos solito, seguí con el tutorial.

> Nótese que la ISO de Quake 3 que pueden descargar líneas más abajo, también tiene archivos .exe por si quieren abrirlo desde PlayOnLinux o Windows.

# Instalar Quake 3 Arena
Podés hacerlo desde la tienda, buscando "Quake 3 Arena", o también instalando el paquete **quake3** desde apt o cualquier otro gestor de paquetes que tenga este software entre sus repositorios :D
**Nota**: Desde la tienda es muy posible que se cuelgue la instalación, pero que en realidad sí se haya instalado el juego.

# Montar la ISO
¿El juego está instalado? Bien, pero no lo abras todavía porque faltan los datos para que el motor gráfico te muestre algo en pantalla. Bajate la ISO desde [acá](https://drive.google.com/open?id=1XoSYNC0_BGH6g2iSuOMJwAnYE-RCDpVs), creá una carpeta para montar el disco y luego, usa **mount** para tener el disco iso en una carpeta.
En esta imágen verán que mi ISO estaba dentro de mis documentos y creé una carpeta **.iso** (oculta) dentro de mi /home/santiago (recuerda que escribir **~/** es lo mismo que la carpeta home de tu usuario). 

![Montar la imágen ISO en la carpeta que prefieras](https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/5-crear-una-carpeta-para-montar-la-iso.webp)

# Generar los datos para el juego

![Instalar game-data-packager desde APT](https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/7.5-instalar-el-empaquetador.webp)

Instala **game-data-packager** desde tu gestor de paquetes y ejecuta este comando, cambiando las rutas según te corresponda. ¡OJO! Al programa le envío las rutas de los archivos **pak0.pk3** y **pak1.pk3**, dentro de la carpeta **baseq3** en la imágen ISO que [descargás acá](https://drive.google.com/open?id=1XoSYNC0_BGH6g2iSuOMJwAnYE-RCDpVs).

> game-data-packager -i quake3 '/home/santiago/.iso/Quake3/baseq3/pak0.pk3' '/home/santiago/.iso/Quake3/baseq3/pak1.pk3'

Arrojará unos *warnings* pero el juego luego me corrió perfecto. Cualquier cosa, [acá está quake3-data compilado](https://drive.google.com/open?id=1i0cWXRs3MSDh6AA8Fj__CPao3aqMSzJu).
Luego de terminar, te pedirá las credenciales para realizar un *upgrade* sobre el quake3-data "dummie" que se instala por defecto. Configurará todo solo.

![Instalar el quake3-data recién horneado en nuestro sistema](https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/9-auto-upgrade-a-quake-data.webp)

# Disfrutar
¡Listo! Corre a la perfección

![Quake 3 funcionando](https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/10-quake-3-funcionando.webp)

No te pierdas del multiplayer, que te hará sentir viejo y sin reflejos hasta que te acostumbres :P

![Servidores online de Quake 3](https://chiqui1234.github.io/holanerd-jekyll/assets/img/como-instalar-quake-3-arena-en-linux/11-incluso-tiene-muchos-servidores-online.webp)

Un dato no menor es que podés girar la cámara del personaje con las flechas del teclado, por si no quieres parar de jugar desde una netbook o notebook sin el frustrante trackpad...

¡Ojalá lo disfrutes! Un saludo
