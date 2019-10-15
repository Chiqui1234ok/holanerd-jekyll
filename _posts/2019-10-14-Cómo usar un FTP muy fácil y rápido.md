---
layout: post
title: Cómo usar un FTP muy fácil y rápido
image: 
date: 2019-10-16 21:00
category: tutoriales
author: Santiago Gimenez
tags: [tutorial, ftp, explorador de archivos]
summary: ¿Sabías que podés conectarte a un servidor por el protocolo FTP sin instalar ningún programa extra? 
---
(post en proceso)
Una guía que si bien la haré sobre Ubuntu 19.04 con el explorador de archivos **Nautilus**, los pasos a seguir son muy parecidos en Windows 8/8.1/10 y es muy probable que Windows 7 y los exploradores de archivos Thunar, Nemo y PCManFM para sistemas Linux sean compatibles con el protocolo FTP.
No necesitarás Filezilla, WinSCP ni ningún otro programa similar para subir tus archivos.

# Primero lo primero
Andá a tu panel de control de tu hosting. En su panel principal deberías ver algo cómo ésto.
![Cuenta-de-ftp](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/ftpAccount.jpg)

Copiate **FTP Hostname** y si en algún momento te piden un puerto para conectarte al FTP prueba con **21** u **80**. Recuerda tu nombre de usuario y contraseña ya que tendrás que enviarle tus credenciales para que te deje ver, subir o eliminar archivos.

En caso de que tu hosting no te haya creado por defecto una cuenta FTP, entra en este menú (o algún otro que tenga un nombre similar) y create una cuenta FTP.

![Vista-de-cuentas-ftp](https://raw.githubusercontent.com/Chiqui1234/holanerd-jekyll/master/assets/img/como-usar-un-ftp-muy-facil-y-rapido/ftpAccounts.jpg)

# Conectarse al ftp con tu explorador de archivos