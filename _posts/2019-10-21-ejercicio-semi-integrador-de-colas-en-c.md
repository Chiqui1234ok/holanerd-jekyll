---
layout: post
title: Ejercicio semi-integrador de colas en C 
date: 2019-10-21 19:15
image: https://teckspecs.com/wp-content/uploads/2019/07/IMG_20190710_163613.jpg
category: programacion
author: chiqui
tags: c, ejercicio integrador, listas, colas, memoria dinámica
summary: CSS avanzó mucho desde el comienzo del estándar hasta hoy. Veamos porqué hoy lo considero un lenguaje de programación más.
---
(en proceso)
# Enunciado del ejercicio
Una empresa de seguridad constituida por una oficina que centraliza los llamados de los
clientes que solicitan asistencia, brinda su servicio mediante un conjunto de unidades
móviles que se presentan al lugar del siniestro cuando es necesario.
El área de cobertura de la empresa está dividida por zonas y cada vez que un móvil inicia
su turno de vigilancia se lo hace saber a la central informando la zona en la que va a
operar; de este modo, cuando llega el momento de prestar socorro, únicamente las
unidades que se encuentran en el sector afectado son contactadas.
A medida que las unidades terminan su turno se lo comunican a la oficina para no recibir
más alertas.
Modelar la problemática empleando las herramientas vistas durante la cursada.

# To-Do List
A partir de la lectura del ejercicio, deducimos que habrá un menú y las tareas a hacer son las siguientes:
* Registrar un móvil
* Recibir llamado
* Despachar móvil a la zona informada designada
* Dar de baja al móvil

### Enumeraciones auxiliares
{% highlight c %}
typedef enum {free=0, busy=1} STATUS;
typedef enum {nunez=0, belgrano=1, palermo=2} ZONE;
{% endhighlight %}

## Registrar un móvil
Para registrar un móvil podemos utilizar las siguientes estructuras.

{% highlight c %}
typedef struct
{
    int id;
    STATUS status; // Disponible u ocupado
    ZONE zone; // Núñez, Belgrano, Palermo, etc
} ST_MOVIL;
{% endhighlight %}

Podemos guardar a los móviles en un vector para que atiendan la cola de tareas en los pasos siguientes.

## Recibir llamado
Al recibir un llamado, se suma una tarea/pedido a la cola. La estructura podría ser similar a ésta:

{% highlight c %}
typedef struct task
{
    int id;
    ZONE zone;
    struct task *next;
} ST_TASK;
{% endhighlight %}

## Despachar móvil
El programa asignará la tarea a cumplir y un empleado desocupado que esté patrullando por esa zona. Si no hay un empleado disponible, el programa debe notificarlo y sugerir cualquier otro empleado disponible.

## Dar de baja al móvil
Cuándo el trabajador cumple sus 8 horas laborales (por ejemplo), el usuario debería marcar a dicho empleado con alguna "bandera". El objetivo de dicha bandera es que el sistema no designe un empleado que no está trabajando en ese horario.
Esto podría hacerse simplemente y por convención, haciendo:

{% highlight c %}
ST_MOVIL workers[STD_CANT]; // Supongamos que ésta es nuestra variable con los empleados
workers[x].id = 0;
{% endhighlight %}

Al día siguiente, el usuario que maneja el programa podría asignar un nuevo ID a éste empleado.
