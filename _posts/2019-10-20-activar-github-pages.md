---
layout: post
title: Activar GitHub Pages
image: https://chiqui1234.github.io/holanerd-jekyll/assets/img/activar-github-pages/poster.webp
date: 2019-10-20 21:50
category: programacion
author: chiqui
tags: github, pages, publicar web, hosting gratis
summary: ¿Cómo publicar una web gratis desde tu repositorio y con GitHub Pages?
---

Los hostings no son tan gratis ni accesibles cómo hace unos años. Ahora o te piden que tu web pase inactiva una hora al día, meten publicidad o tenés que pagar por un servicio que, generalmente, es bueno pero uno puede no poder o querer pagarlo.

Ahí entra **GitHub Pages**, un servicio gratuito del ya de por sí gratuito **GitHub** :D GitHub Pages puede trabajar con Ruby y [Jekyll](https://jekyllrb.com/) (cómo este sitio), o también puede servirte cómo un pequeño servidor web estático. No tiene módulos PHP ni otra cosa Back-end, pero si querés alojar archivos .html ésto te sobra.

En mi caso, GitHub Pages **compila automáticamente los cambios que hay en Jekyll** cada vez que hago **git push -u**, es decir, cada vez que re-subo el sitio web con un comando de git :)

# ¿Cómo activar GitHub Pages?

En poquísimos pasos tendrás tu web online 24/7 y sin publicidad, en servidores que son muy, muy rápidos (al menos para servir HTML, ¡ja!).

## 1. Ir a "Settings", dentro de tu repo

![paso-1](https://chiqui1234.github.io/holanerd-jekyll/assets/img/activar-github-pages/1-ir-a-settings.jpg)

## 2. Scrollear para abajo...

Hasta que encuentres el apartado **GitHub Pages** en tu panel de control. Deberás seleccionar que rama (branch) será la que pondrás online.
![paso-2](https://chiqui1234.github.io/holanerd-jekyll/assets/img/activar-github-pages/2-activar-github-pages-para-tu-rama.jpg)

Guardas los cambios y se refrescará la página :)

## 3. Clic en tu nuevo link

![paso-3](https://chiqui1234.github.io/holanerd-jekyll/assets/img/activar-github-pages/3-clic-en-el-nuevo-link.jpg)

¡Tu web está online! O algo así... es probable que haya que esperar unos minutos para que Git deje tu sitio online. Si tenías un README.md, esa será la cara "por defecto" que verás al entrar al link.  Sin embargo, si creás un index.html, podrás verlo sin problemas.
¡Mira! Puse online un repositorio de C (no garantizo que ese link esté por siempre, [pero podrías intentar si existe](https://chiqui1234.github.io/Pilas-Colas-y-Listas/)).