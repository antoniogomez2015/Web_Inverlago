/*para ejecutar el javascript cuando el documento este listo*/
$(document).ready(function() {
	/*para automatizar la acción de los botones para hacer un loops*/
var t=setInterval(function(){btn_next();},4000);	
	/*ahora vamos a llamar a los botones siguiente y anterior al hacer click*/
	$('#btn_next').click(function()
	{
		/*esta variable permite encontar cuandos slide tiene el slideshow*/
		var size = $('.slideshow').find('.s_element').size();
		/*ahora llamamos al contenedor slideshow*/
		/*y que encuentre los elementos slide_element*/
		$('.slideshow').find('.s_element').each(
			function(index, value) {
			/*si el elemento tiene la clase ".s_visible", hacer visible el slide*/
			if($(this).hasClass('s_visible'))
			{
				/*este sentencia permite ocultar el slide*/
				$(value).slideUp();
				/*ahora removemos la clase aplicada al slide por que ya lo hemos ocultado*/
				$(value).removeClass('s_visible');
				
				/*si el índice que iteramos más 1 es menor que el tamaño del arreglo de slides*/
				if(index+1<size)
				{
					/*esta sentencia permite tomar el slide siguiente del arreglo de slides*/
					/*esta sentencia la metemos dentro de otro selector más grande*/
					/*para colocarle un efecto jquery en este caso un fadeIn()*/
					$($('.slideshow').find('.s_element').get(index+1)).fadeIn();
					/*ahora le agregamos al selector una clase que permite hacerlo visible*/
					$($('.slideshow').find('.s_element').get(index+1)).addClass('s_visible');
					return false;
				}
					/*si no es igual, es por que ya es el último slide y entonces debe seleccionar nuevamente el primer slide para que se repita el ciclo*/
				else					
				{
					$($('.slideshow').find('.s_element').get(0)).slideDown();
					$($('.slideshow').find('.s_element').get(0)).addClass('s_visible');
					/*ahora debemos interrumpir el proceso de each()*/
					return false;
						
				}
				
			}
            
        });
		
	});
	
	$('#btn_back').click(function()
	{
		/*esta variable permite encontar cuandos slide tiene el slideshow*/
		var size = $('.slideshow').find('.s_element').size();
		/*ahora llamamos al contenedor slideshow*/
		/*y que encuentre los elementos slide_element*/
		$('.slideshow').find('.s_element').each(
			function(index, value) {
			/*si el elemento tiene la clase ".s_visible", hacer visible el slide*/
			if($(this).hasClass('s_visible'))
			{
				/*este sentencia permite ocultar el slide*/
				$(value).slideUp();
				/*ahora removemos la clase aplicada al slide por que ya lo hemos ocultado*/
				$(value).removeClass('s_visible');
				
				/*si el índice que iteramos es igual a cero en la relación del tamaño del arreglo de slides*/
				if(index==0)
				{
					/*esta sentencia permite tomar el slide siguiente del arreglo de slides*/
					/*esta sentencia la metemos dentro de otro selector más grande*/
					/*para colocarle un efecto jquery en este caso un fadeIn()*/
					$($('.slideshow').find('.s_element').get(size-1)).fadeIn();
					/*ahora le agregamos al selector una clase que permite hacerlo visible*/
					$($('.slideshow').find('.s_element').get(size-1)).addClass('s_visible');
					return false;
				}
					/*si no es igual, es por que ya es el último slide y entonces debe seleccionar nuevamente el primer slide para que se repita el ciclo*/
				else					
				{
					$($('.slideshow').find('.s_element').get(index-1)).slideDown();
					$($('.slideshow').find('.s_element').get(index-1)).addClass('s_visible');
					/*ahora debemos interrumpir el proceso de each()*/
					return false;
						
				}
				
			}
            
        });
		
	});
     
});

/*ahora podemos controlar las acciones de avanzar y retroceder para automatizar el splideshow*/
/*para metemos toda la declaración de avanzar en una nuva función*/
function btn_next()
{
	var size = $('.slideshow').find('.s_element').size();
		$('.slideshow').find('.s_element').each(
			function(index, value) {			
			if($(this).hasClass('s_visible'))
			{
				$(value).slideUp();				
				$(value).removeClass('s_visible');			
				
				if(index+1<size)
				{
					$($('.slideshow').find('.s_element').get(index+1)).fadeIn();					
					$($('.slideshow').find('.s_element').get(index+1)).addClass('s_visible');
					return false;
				}					
				else					
				{
					$($('.slideshow').find('.s_element').get(0)).fadeIn();
					$($('.slideshow').find('.s_element').get(0)).addClass('s_visible');					
					return false;
						
				}
				
			}
            
        });
}