---
layout: post
title: Review Zalman CNPS 9500 Led
image: /assets/img/review-zalman-cnps-9500a-led/thumb.jpg
date: 2020-03-31 12:00
category: review
rating: 8,0
author: chiqui
tags: zalman, am3+, am4, cnps, cnps 9500, ryzen, amd, intel
summary: El Zalman CNPS 9500 Led es un viejo conocido, nació a principios de siglo y es compatible con los sockets actuales de Intel y AMD, aunque no te lo cuenten. ¡Mirá el review!
---
El [Zalman CNPS 9500 Led](https://www.zalman.com/contents/products/view.html?no=461) es un cooler muy particular. Es de los pocos que pueden posicionarse en vertical (expulsando aire hacia arriba) y se lo consideraba muy eficiente en la época de los Pentium 4 y cierta época de los Core 2 Duo y Phenom II. ¿Seguirá manteniendose vigente hoy por hoy? Seguí leyendo para enterarte de todo.

> Nota del editor: sí, puede anclarse en AM4 por más que no lo anuncie de forma oficial.

# Equipo de pruebas
El equipo de pruebas es mi PC de escritorio actual, por lo cuál no es una test bench auténtica, sino una PC en formato ITX.
![pc-de-pruebas-itx](/assets/img/review-zalman-cnps-9500a-led/setup-terminado.jpg)
* CPU: AMD Ryzen 7 2700
* MOBO: Gigabyte X570I Aorus Pro WiFi
* RAM: 2x8GB Adata D60 RGB 3000 @ 3400
* GPU: Gigabyte RX 590 8GB Rev 2.0
* PSU: EVGA 500W 80+ Gold
* CASE: EVGA Hadron Air
* SO: Xubuntu 19.10

# Metodología de pruebas
El cooler será probado con dos programas distintos con el fin de medir su temperatura:
* Stress-ng (simil Prime95)
* XMRig 5.10.0 (software para criptominería)
  
También probé Shadow of TR, para ver las temperaturas del CPU y averigüar si la placa de video se ve beneficiada por tener un cooler extractor justo arriba.
* Shadow of Tomb Raider

# Unboxing
La caja podría desentonar un poco con cajas de sistemas de refrigeración actuales, que tienen tipografías, colores y diseños más rectos y serios. Zalman por aquella época eligió una caja celeste y tener el cooler empacado en un plástico transparente.

## Frente

El frente nos indica que el cooler es compatible con una diversidad grande de sockets. Te indico a continuación con **todos** los sockets con los que es compatible este Zalman:

* Intel: 775, 1156, 1155, 1150, 1151 y 1151 v2.
* AMD: AM2, AM2+, AM3, FM1, AM3+ FM2 y AM4. 

El cooler se pudo instalar sin mayores inconvenientes en mi X570, aflojando levemente los tornillos de ambos plásticos de los cuáles se sostiene este Zalman.

![caja-frente](/assets/img/review-zalman-cnps-9500a-led/caja-frente.jpg)

## Lado de las especificaciones

Este lado nos informa de las especificaciones del producto, además de que notifica que trae un controlador de fanes único para el ventilador de 92mm que posee.
El ventilador puede funcionar tanto con 5 cómo 12 voltios a unas revoluciones de entre 1350 hasta 2650 RPM, produciendo 27,5 dBa; es un ventilador relativamente silencioso.

El sistema es a bolillas, no rulemán.

![caja-lado-especificaciones](/assets/img/review-zalman-cnps-9500a-led/caja-lado-especificaciones.jpg)

## Lado dos

Esta cara tiene escrita en siete idiomas diferentes (Inglés, Francés, Alemán, Español, Ruso, Chino y Japonés) algunas "claves" del producto. Por si no lo notaste, está enteramente hecho de cobre y viene con un ventilador incorporado de 92mm con iluminación azúl.

![caja-lado-sinopsis](/assets/img/review-zalman-cnps-9500a-led/caja-lado-sinopsis.jpg)

## Lado trasero

Esta tapa explica el diseño del ventilador, renderizado en 3D y mostrado por secciones. Su diseño consta de utilizar cobre puro para su base, sus 3 heatpipes y aletas. Es un diseño bastante inteligente y me gustaría probar un cooler DeepCool de 12cm o el mítico Hyper 212X (AM4) para ver que tal se comporta. Cabe destacar que este Zalman es ideal para configuraciones ITX dónde no cabe ningún cooler que tenga un fan de 12cm, como es mi caso. Las medidas de este CNPS 9500 Led son de 12,5cm (alto) y 11,2cm (ancho), albergando en su interior un ventilador de 92mm. El espesor es de 8,5cm y el producto pesa tan sólo 530 gramos, estando muy lejos de mosquear cualquier motherboard o backplate.

![caja-lado-trasero](/assets/img/review-zalman-cnps-9500a-led/caja-atras.jpg)

# Manual

![manual-y-adhesivo-para-el-controlador-fanmate-2](/assets/img/review-zalman-cnps-9500a-led/manual-y-adhesivo.jpg)

El manual es idéntico para el CNPS9700 (el hermano mayor) y el 9500A. Está escrito en siete idiomas y se entiende bien; de todas formas la instalación no es complicada para ninguna plataforma.

El manual en digital [está a tu disposición acá](/assets/pdf/review-zalman-cnps-9500a-led/manual.pdf). :)



# Controlador Fanmate 2

![controlador-fanmate-y-cable-de-seis-pines](/assets/img/review-zalman-cnps-9500a-led/controlador-fanmate-y-cable-full.jpg)

No hay ningún "pero" especial para este controlador. En el manual, Zalman espera que coloques este controlador pegado con cinta de doble cara en el exterior de tu gabinete, cosa que nunca haría (pero gracias por la cinta).

![controlador-fanmate-primer-plano](/assets/img/review-zalman-cnps-9500a-led/controlador-fanmate.jpg)

Sería genial que el led azúl del ventilador se pudiera apagar desde el controlador, pero esta posibilidad no se ofrece. En mi computadora el led azúl queda **muy** mal (es todo color cobre y naranja), así que posiblemente pinte de negro el ventilador para que no salga ni un rayito de luz led.

# Ventilador

![especificaciones-del-fan](/assets/img/review-zalman-cnps-9500a-led/especificaciones-fan.jpg)

El ventilador es desmontable mediante dos tornillos. Es de 12v y led azúl. El modelo exacto es **ZF9225ATH**.

# Disipador

![foto-de-frente](/assets/img/review-zalman-cnps-9500a-led/cooler-frente.jpg)

El disipador está compuesto por

# Pasta térmica

La pasta térmica tiene partículas de metal líquido, por lo cuál hace que este componente sea conductor eléctrico y debés asegurarte que no toque ningún punto de soldadura o pin descubierto en tu motherboard u otro componente. El modelo de esta pasta es la **ZM-STG2M** y tiene una conductividad térmica de 4,1 W/mK (Watt por metro kelvin), osea que disipa la mitad de bien que pastas térmicas tope de gama como la **Noctua NT-H1**.

![foto-noctua-nt_h1](https://noctua.at/media/mrproslider/5/3/53513f2ff010a112fd139b16a33014c7.jpg)

Es una pasta gama media y coherente en performance con el precio del cooler. Sin embargo, si querés arañar entre 1 y 5 grados poniendo la mejor pasta del mercado, sos bienvenido :D

# Instalación

No cubrí la instalación en Intel porque no tenía ningún motherboard de la marca a mano, pero sí hay fotos de sus anclajes por si necesitan verlos.
La instalación de Intel no parece más complicada, sino que tomará un poco más de tiempo que la instalación en AMD, que se hace anclando directamente a los plásticos del socket como cualquier cooler "viejo" de un FX o Phenom.

## Anclaje Intel

Exceptuando por la última chapa que está en la parte inferior de la imágen, todo el resto pertenece a una instalación en socket Intel. El cooler no precisa de un bracket/armor, así que no es estrictamente necesario sacar el motherboard para instalar este Zalman. Bondades de ser un peso ligero :)

![anclaje-metalico-y-tornillos-para-socket-intel](/assets/img/review-zalman-cnps-9500a-led/anclajes-amd-e-intel.jpg)

La chapa que ves abajo de todo es la correcta para la instalación en AMD.

----

![anclaje-plastico-para-socket-intel](/assets/img/review-zalman-cnps-9500a-led/soporte-intel.jpg)

Este enorme plástico le da la separación correcta al cooler para apoyar bien sobre el IHS del procesador.

Hasta aquí llega la explicación en Intel, ya que no tengo una plataforma para realizar la instalación.

## Anclaje AMD

La instalación de este Zalman pasa por su zona inferior central, mostrada a continuación.

![base-metalica](/assets/img/review-zalman-cnps-9500a-led/base-metalica.jpg)

La instalación no require ver el manual. Simplemente colocá la chapita de AMD sobre el centro del cooler. Esta chapita tiene una compañera:

![pieza-adyacente-a-la-chapita-amd](/assets/img/review-zalman-cnps-9500a-led/anclaje-amd-2.jpg)

Es cuestión de ver que la chapita tiene una ranura dónde se sitúa esta pequeña pieza que aparece en la imágen de arriba, y todo debería quedarte así:

![anclaje-amd-puesto-en-el-cooler](/assets/img/review-zalman-cnps-9500a-led/anclaje-amd-full.jpg)

## Instalación AMD

![fotografia-del-ryzen-7-2700-sobre-el-motherboard](/assets/img/review-zalman-cnps-9500a-led/setup.jpg)

Ahora aplicamos la pasta térmica provista por Zalman en nuestro procesador, de forma más o menos pareja:

![aplicacion-de-pasta-sobre-el-ryzen-7-2700](/assets/img/review-zalman-cnps-9500a-led/pasta-aplicada-zalman.jpg)

Este Zalman se coloca como cualquier cooler AMD FX, Phenom e inferiores. Si nunca tuviste un cooler de éstos te recomiendo ver un tutorial, para darte una mejor idea.

![aplicacion-de-pasta-sobre-el-ryzen-7-2700](/assets/img/review-zalman-cnps-9500a-led/setup-terminado.jpg)

# Temperaturas

Con una temperatura ambiente de 26 grados celcius, me dispuse a correr dos programas por 20 minutos para comparar el cooler stock con el Zalman.
Entre prueba y prueba se apagó la computadora por 10 minutos.

Cabe aclarar que "Máx" es la temperatura máxima alcanzada durante la prueba, mientras que la "Media" es el promedio registrado durante los últimos 5 minutos, una vez que el procesador alcanza la temperatura de operación de forma estable.

## Stress-ng (16 threads)

**stress-ng** es un programa muy completo que puede estresar el CPU, RAM, HDD, etc; controlandose por consola (terminal).

* Cooler AMD Wraith Spire RGB | Máx: 61,25c | Media: 60,5c
* Cooler Zalman CNPS9500A Led | Máx: 52,1c | Media: 51,5c

## XMRig 5.10.0 (8 threads)

**xmrig** es una aplicación para minar criptomonedas. En esta ocasión, se minó **monero** por 20 minutos y registramos la temperatura de operación y su máximo. Utilizamos 8 hilos de procesamiento, que es notoriamente más veloz que utilizar 16 hilos en XMRig.

* Cooler AMD Wraith Spire RGB | Máx: 66,5c | Media: 66,0c
* Cooler Zalman CNPS9500A Led | Máx: 53,0c | Media: 51,5c

## Shadow of Tomb Raider

![imagen-de-shadow-of-tomb-raider](https://i.blogs.es/e3195e/shadow-of-the-tomb-raider/1366_2000.jpeg)

Las últimas tres entregas de Tomb Raider se portaron a Linux y tienen un gran rendimiento. En esta ocasión hice una pasada del benchmark incorporado para comparar las temperaturas entre el cooler stock y el Zalman en cuestión. Además, me resultó interesante este cooler por su posición vertical, que (en teoría) bajaría unos grados a mi RX 590 en comparación con el cooler Wraith Spire. ¡Veamos que hace! 
Se corrió Tomb Raider a 3200x1800 y calidad Máxima, 34fps promedio (¿quién te conoce PS4 Pro?).

* Cooler AMD Wraith Spire RGB 
  * CPU: Máx: 68,5c | Media: 67,0c
  * GPU: Máx: 79c | Media: 78c
* Cooler Zalman CNPS9500A Led
  * Máx: 57,0c | Media: 57,0c
  * GPU: Máx: 75c | Media: 74,5c

# Ruido

Todas las pruebas se efectuaron con la velocidad del ventilador al máximo, tanto para la solución térmica probada acá cómo para el cooler stock de mi Ryzen 7 2700.
Aún no cuento con dispositivos que midan los decibélios, pero en la práctica noté que el Zalman es algo más silencioso que el Wraith Spire. Quién tenga este cooler de AMD, disponible para Ryzen 7 1700 y 2700, sabrá que no hace mucho ruido a full load. Es un sonido tolerable y se agradece que el Zalman sea tan silencioso (o más) como el Wraith Spire.

# Precio

A un precio final de $2699 con envío gratis por Mercado Libre, estamos hablando de que compite en la gama baja/media de este 2020. Eso lo ubica con los siguientes coolers:
* ID-Cooling SE-213 (92mm)
* Thermaltake UX100 ARGB (92mm)
* Zalman CNPS5X Performa (92mm)
* ID-Cooling SE-214 (120mm)
* Deepcool Gamaxx 200T (120mm)

Si estás en una configuración ITX (no slim) estás, posiblemente, limitado a las opciones de 92mm. Sin embargo, a no deprimirse porque las soluciones de 92mm no se alejan mucho de las versiones con ventiladores de 12cm, y eso lo veremos en próximos análisis.

# Conclusión

![zalman-armado-en-itx-afuera-del-gabinete](/assets/img/review-zalman-cnps-9500a-led/disipador-x570i-on.jpg)

Estamos frente a un disipador muy viejo que por decisiones de AMD e Intel respecto a los orificios de sus sockets, sigue siendo compatible con cualquier CPU actual. Sería interesante comprobar los demás coolers de 92mm. Veremos como nos trata la cuarentena y probablemente voy a comprar algún modelo de ID-Cooling para lanzar en una comparativa. Sería muy interesante ver a los demás modelos y poder compararlos con las mismas pastas térmicas

¡Nos vemos en otro post!