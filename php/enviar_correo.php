

<?php

/*tutorial: https://www.youtube.com/watch?v=bafpQDaOpWw&hd=1 */

/*condicional para comprobar las variables*/

	/*1) if(){}, es un condicional que permitirá filtrar los elementos que nosotros queremos tomar del usuario para entonces sí, proceder a traernos los datos del formulario*/

	/*2) esto lo hacemos a través de la sentncia ó palabra reservada "isset{var}", ésta es una función que permite comprobar si las variables del formulario existen y con "!empty()", comprobaremos que no biene vacías de parte del usuario, la cuales utilizaremos como parámetros del condicional if(),*/

/*interpretación: esto quiere decir que si la variable "nombre" existe, y no esta vacía por parte del ususario, entonces que sí, tome el nombre ó datos del campo imput a través del método POST, y lo almacene en la variable asignada al mismo, esto lo hacemos para todas las variables/inpus*/

/*la sintaxis abedece a que primero comprobará cuantos de los campos inputs existen en el formulario y, a su vez, cuantos de los campos inputs, que existen en el formulario tienen datos de parte del usuario, para así, y sólo así, compilar esos datos en las variables que reflejan como atributos del condicional if(){}, para luego proceder a enviarlas por correo electrónico por medio de la función "mail()", y, a su vez, enviar un mensaje de comprobación e información al usuario*/


if(isset($_POST["nombre"]) && !empty($_POST["nombre"]) && 
   isset($_POST["apellidos"]) && !empty($_POST["apellidos"]) && 
   isset($_POST["mail"]) && !empty($_POST["mail"]) &&
   isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){
	   
	$nombre = $_POST["nombre"] . " " . $apellido = $_POST["apellidos"];
	$mail = $_POST["mail"];
	$mensaje = $_POST["mensaje"];
	
	mail("monoproduccion@gmail.com" , $mail, $nombre, $apellido, $mensaje);
	
	echo "los datos se han enviado satisfactoriamente";
	
	
};


/*descripción de la función "mail()"*/	
	/*ahora creamos la función para enviar el correo*/
		/*ejemplo: mail(to, subject,nombre,message);*/
			/*to: al correo al cuál va dirigido*/
			/*subject: desde donde ó el correo del usuario*/
			/*messaje: el mensaje contenido en el correo*/
		
		
	
	
	
	


?>