
<!--scripts para el sistema de tabs del hablador hover del sidebar right-->
<script type="text/javascript">

	$(document).ready(function(){

	/*sistemas para "hover/mouseover"*/
				
		/*hover de ventana contextual "gramas"*/		
		$('.obras div img:eq(0)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_grama.html');		
														
		});

		/*hover de ventana contextual "atletismo"*/		
		$('.obras div img:eq(1)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_atletismo.html');					
		});

		/*hover de ventana contextual "pizarras electrónicas"*/		
		$('.obras div img:eq(2)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_pizarras.html');					
		});

		/*hover de ventana contextual "pantallas electrónicas"*/		
		$('.obras div img:eq(3)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_pantallas.html');					
		});

		/*hover de ventana contextual "canchas deportivas"*/		
		$('.obras div img:eq(4)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_canchas.html');					
		});

		/*hover de ventana contextual "asientos deportivos"*/		
		$('.obras div img:eq(5)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_asientos.html');					
		});

		/*hover de ventana contextual "equipamiento deportivo"*/		
		$('.obras div img:eq(6)').mouseover(function(){
			$('#area_hover').show();			
			$('#hover_info').addClass('containt2');			
			$('#hover_info').load('load_hover_equipamiento.html');					
		});

		/*-------------------------------------------------------------*/

	/*sistemas para cerrar "hover/mouseover" y "ventana contextual",*/

			/*salir del hover de la ventana contextual*/
			$('#area_hover').mouseover(function(){
				$('#hover_sidebaright').hide();
				$('#area_hover').hide();				
				location.reload();
			});

			/*salir de la ventana contextual*/
			$('#area_containt').click(function(){
				$('#area_containt').hide();
				$('#containt').hide();
				location.reload();
			});
		/*-------------------------------------------------------------*/

	/*sistemas para abrir y cargar la información respectiva en la "ventana contextual",*/

		/*mostrar el contenido de tab, de "sistema de gramas"*/
		$('.obras div:eq(0)').click(function(){
			$('#area_hover').hide();
			$('#hover_info').load();
			$('#area_containt').show();			
			$('#containt').addClass('containt2');				
			$('#containt').load('load_grama_artificial.html');						
		});					
		
		/*mostrar contenido de tab, de "atletismo"*/
		$('.obras div:eq(1)').click(function(){
			$('#area_hover').hide();			
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_pistas_atletismo.html');
			$('#hover_info').load();
		});

		/*mostrar contenido de tab, de "pizarras electrónicas"*/
		$('.obras div:eq(2)').click(function(){	
			$('#area_hover').hide();		
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_pizarras_electronicas.html');
			$('#hover_info').load();
		});

		/*mostrar el contenido de tab, de "pantallas electrónicas"*/
		$('.obras div:eq(3)').click(function(){	
			$('#area_hover').hide();		
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_pantallas_electronicas.html');
			$('#hover_info').load();
		});

		/*mostrar contenido de tab, de "canchas deportivas"*/
		$('.obras div:eq(4)').click(function(){	
			$('#area_hover').hide();		
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_canchas_deportivas.html');
			$('#hover_info').load();
		});

			/*cargar especializaciones "connor-madera"*/
			$('#canchas ul li a:eq(0)').click(function(){
				$('#especialidades').show('slow');
			})

		/*mostrar contenido de tab, de "asientos deportivos"*/
		$('.obras div:eq(5)').click(function(){
			$('#area_hover').hide();			
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_asientos_deportivos.html');
			$('#hover_info').load();
		});	

		/*mostrar contenido de tab, de "equipamiento deportivo"*/
		$('.obras div:eq(6)').click(function(){
			$('#area_hover').hide();			
			$('#area_containt').show();
			$('#containt').addClass('containt2');
			$('#containt').load('load_equipamiento_deportivo.html');
			$('#hover_info').load();
		});	

		/*estilos para los proveedores específicos*/
			$('.top').addClass("horizontal");
	
		
	});

</script>


<div id="area_hover">				
	<div id="hover_info">	
    </div>					
</div>

<div id="area_containt">
	<div id="containt">	
	</div>
</div>
