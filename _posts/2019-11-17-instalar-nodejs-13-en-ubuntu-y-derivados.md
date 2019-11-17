---
layout: post
title: Instalar NodeJS 13 en Ubuntu y derivados
image: https://tudip.com/wp-content/uploads/2017/06/rsz_saadad.png
date: 2019-11-17 20:30
category: linux
author: chiqui
tags: nodejs, javascript, node, servidor, ubuntu, guia instalación
summary: Para disfrutar de las últimas optimizaciones, parches de seguridad y poder desarrollar con los últimos frameworks (como Angular 8), necesitamos Node JS 10.
---

Por default, Node JS 8 está presente en los repositorios de Ubuntu y derivados; aunque es probable que necesites actualizar para desarrollar "en lo último".

Debes tener **curl** para descargar la llave firmada por los chicos de NodeJS y así, tenerlo en tus PPAs.
> sudo apt install curl

Una vez que tengas curl instalado, bajamos la __signed key__ y la agregamos a apt :)
> curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

Efectúa un **apt update** como administrador, en caso de que no sucedió automáticamente.
Ahora si, ¡a instalar!
> sudo apt install nodejs

Una vez finalizada la instalación, deberías poder escribir **node -v** y tendrías la última versión de node. Además, recibirás el software **npm**, un gestor de paquetes para tus frameworks/bibliotecas requeridas en tus proyectos.

### Para cerrar, chequeamos las versiones

![versiones](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/instalar-nodejs-13-en-ubuntu-y-derivados/version.webp)

¡Suerte!