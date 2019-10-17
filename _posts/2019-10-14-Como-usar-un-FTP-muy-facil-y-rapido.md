---
layout: post
title: Cómo usar un FTP muy fácil y rápido
image: https://www.latinoamericahosting.com.co/wp-content/uploads/2018/12/FTP-SFTP-FTPS.jpg
date: 2019-10-16 21:00
category: web
author: chiqui
tags: [tutorial, ftp, explorador de archivos]
summary: ¿Sabías que podés conectarte a un servidor por el protocolo FTP sin instalar ningún programa extra?
---

Bienvenidos a una pequeña guía, que si bien la haré sobre Ubuntu 19.04 con el explorador de archivos **Nautilus**, los pasos a seguir son muy parecidos en Windows 8/8.1/10 y es muy probable que Windows 7 y los exploradores de archivos Thunar, Nemo y PCManFM para sistemas Linux sean compatibles con el protocolo FTP.
No necesitarás Filezilla, WinSCP ni ningún otro programa similar para subir tus archivos.

# Primero lo primero
Andá a tu panel de control de tu hosting. En su panel principal deberías ver algo cómo ésto.
![Cuenta-de-ftp](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/ftpAccount.jpg)

Copiate **FTP Hostname** y si en algún momento te piden un puerto para conectarte al FTP prueba con **21** u **80**, aunque por lo general es algo que (al menos Nautilus) lo gestiona de forma automática. Recuerda tu nombre de usuario y contraseña ya que tendrás que enviarle tus credenciales para que te deje ver, subir o eliminar archivos.

En caso de que tu hosting no te haya creado por defecto una cuenta FTP con el mismo nombre de usuario y contraseña con la que inicias sesión, entra en este menú (o algún otro que tenga un nombre similar) y create una cuenta FTP.

![Vista-de-cuentas-ftp](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/ftpAccounts.jpg)

# Conectarse al ftp con tu explorador de archivos
En el caso de Windows, deberás borrar el texto de tu barra de dirección (que en la imágen aparece cómo **Acceso rápido**) y colocar la dirección de tu ftp.

![Explorador-de-archivos-Windows-10](https://i1.wp.com/www.tecnicomo.com/wp-content/uploads/2015/09/C%C3%B3mo-acceder-al-Explorador-de-archivos-en-Windows-10-2.png)

Si usas Thunar u otro explorador similar al de Windows, posiblemente deberás escribir la ruta al FTP en la barra de direcciones.

Recuerda que la dirección debe tener, antes que nada, **ftp://** y luego la dirección que vimos en nuestro panel de control.
Ejemplo: **ftp://**ftphost.net :)

## En el caso de Nautilus

Nautilus no tiene una barra de direcciones propiamente dicha, y por ende debemos ir a **Otras ubicaciones** para luego escribir la dirección FTP en la barra de direcciones inferior, cómo se indica en la imágen.

![Explorador-de-archivos-Nautilus](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/conection1.jpg)

Una vez ingresado la URL de nuestro FTP, se nos pedirá Usuario y Contraseña.
Idealmente puedes indicar que recuerde tus credenciales, aunque si la computadora en la que trabajas pasa por varias manos es mejor negar esta opción.

Una vez indicado tus credenciales, el explorador de archivos se conectará al ftp cómo si fuera una carpeta más de tu PC :)

![Explorador-de-archivos-Nautilus](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/conection2.jpg)

¿Quedó todo claro? :D