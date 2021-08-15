# Proyecto E-Commerce para React JS
## _Mi primer E-commerce: Lulu's Cat-Caffe_

Desarrollo para una tienda virtual de productos de repostería, específicamente cupcakes, donde el cliente puede organizar el pedido a su gusto. 

Este proyecto forma parte del curso de ReactJS en CoderHouse.


## Descripción del proyecto

## Home
>ItemListContainer
>ItemList
>Item

En esta sección se muestran el listado de todos productos traídos de la base de datos en Firebase, a ella se puede acceder en varios estados del proceso de compra y en el logo de la página. 

## Categorías
>ItemListContainer 
>ItemList
>Item

Nuestro proyecto mantiene dos categorías de productos: Porciones y Cajas, al seleccionar cualquiera de ellas se realiza un filtrado de la base de datos ya mostrada en Home, en función de la categoría seleccionada.

## Detalle de producto
>ItemDetailContainer
>ItemDetail
>ItemCount
>CartWidget

Al seleccionar un producto se mostrara en pantalla el detalle del mismo (nombre, imagen y precio), aquí el usuario puede elegir la cantidad que desee de dicho producto (siempre validándose que la cantidad no exceda el stock). Luego de elegir la cantidad el usuario puede agregar al carrito lo cual llevara a la opción de Terminar la compra. 

Acá se van almacenando los productos añadidos, lo cual se puede validar visualmente en la imagen de nuestro carrito. 

## Carrito
>CartComponent
>CartItem

Pasamos a mostrar los productos que se han agregado al carrito, si no hay ninguno da la opción al usuario de ir al Home, o incluso puede optar por enviar un mensaje por WhatsApp para resolver dudas.

Nuestro proyecto hace uso del local storage, lo cual permite mantener almacenado el pedido para que el usuario lo pueda concretar en otra oportunidad.

Cuando ya está listo el pedido se muestra el monto total a pagar, si está de acuerdo se procede a generar el pedido lo cual lleva al usuario a registrar sus datos, una vez ingresados al continuar con el proceso se realiza la actualización del stock en la base de datos, y se direcciona a la pantalla para selección de pago.

Acá el usuario si desea pagar online se habilitara la ventana de mercado pago con el monto total de su pedido. Luego, independiente del método de pago que seleccione el cliente se va a dirigir a la pantalla final donde obtendrá el número de seguimiento de su compra. 

## CartContext
Acá nos traemos los productos de nuestra base de datos, lo cual se actualiza cada vez que se genera una nueva compra. Así mismo, se gestiona la actualización de los contadores de cantidad, precio y carrito de compras, donde se realizan las validaciones para no tener elementos duplicados y poder agregar o eliminar productos, e incluso vaciar por completo. 

También se encuentran funciones para el uso de API (WhatsApp y Mercado Pago) y para la actualización de stock en la base de datos

## En este proyecto utilizamos:

- SCSS
- Firebase
- React js
- React-router-dom
- Hooks
- Context
- Bootstrap
- API MercadoPago
- API WhatsApp

## Sobre el repositorio
Como esto forma parte un curso de React Js en este repo encontraras varias ramas donde cada una muestra el desarrollo del proyecto en todas sus etapas, el proyecto final lo puedes encontrar en la rama master, pero se mantienen sus versiones anteriores para muestra del proceso de desarrollo del código.