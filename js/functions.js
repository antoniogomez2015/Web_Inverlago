
$(document).ready(function(){

	/*--------------------------------------------------------------------------------------*/
	/*función para hacer funcionar el slideshow de imágenes del bannes principal del heather de inicio*/
	$(function(){

		$('#TopSlideshow div:gt(0)').hide();

			setInterval(function(){
				$('#TopSlideshow div:first-child').slideDown(3000)
				.next('div').slideUp(3000)
				.end().appendTo('#TopSlideshow');
			},5000);
	});

	/*--------------------------------------------------------------------------------------*/
	/*funciones para los productos disponibles (cintillo azul)*/
	$('nav ul li a:eq(2)').click(function(){
		$('#base').slideDown(3000);	
		
	});

		/*
		$('tops').click(function(){
			event stopPropagation();	
		});*/

		/*funciones para cerrar el la sección de los productos disponibles*/
		$('#base').click(function(){
			$('#base').slideUp(1000);			
		});

	/*--------------------------------------------------------------------------------------*/
	/*funciones para los proveedores disponibles (cintillo azul)*/
	$('nav ul li a:eq(4)').click(function(){
		$('#base2').slideDown(3000);	
		
	});

		/*funciones para cerrar el la sección de los productos disponibles*/
		$('#base2').click(function(){
			$('#base2').slideUp(1000);			
		});

	/*--------------------------------------------------------------------------------------*/
	/*función para hacer funcionar el sidebar-right, del inicio de las imágenes de las obras*/
	$('.obras').cycle({
        fx: 'blindX'
    });
	
		/*función para detener el slideshow, del sidebar-right, cuando se posa el mouse sobre este*/
		$('.obras div img').mouseover(function(){
			$('.obras').cycle('pause') 
		});

	
	/*funciones para el info del hover de el sidebar-right, del inicio de las imágenes de las obras*/
	/*
	$('.obras div:gt(0)').hover(function(){
		$('#area_containt').show();		
		$('#containt').animate({'width':'740px'});
	});


	$('#sidebar-right p').click(function(){
		$('#sidebar-right p').addClass('containt2');
	});*/


	/*--------------------------------------------------------------------------------------*/
	/*función para hacer funcionar los íconos de los proveedores de la diana inferior*/
	$('.proveedores').click(function(){
		$('#base').slideDown(3000);	
	});



	/*--------------------------------------------------------------------------------------*/
	/*funciones para el screen de las secciones del proveedor Daktronics*/

	$('.daktronics_color div').addClass('daktronics_bgcolor');

	/*funciones para abrir la sección de "marcadores" del proveedor Daktronics*/
	$('#daktronics_marcadores a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_marcadores_Displays.html');				
	});	

	/*funciones para abrir la sección de "mensajes" del proveedor Daktronics*/
	$('#daktronics_mensajes a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_message_Displays.html');				
	});

	/*funciones para abrir la sección de "video" del proveedor Daktronics*/
	$('#daktronics_video a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_video_Displays.html');				
	});

	/*funciones para abrir la sección de "vallas" del proveedor Daktronics*/
	$('#daktronics_vallas a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_billboards_Displays.html');				
	});

	/*funciones para abrir la sección de "sonido" del proveedor Daktronics*/
	$('#daktronics_sonido a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_audio_system.html');				
	});

	/*funciones para abrir la sección de "general" del proveedor Daktronics*/
	$('#daktronics_habladores a').click(function(){		
		$('#divisiones_container_daktronics').hide('slow');	
		$('#ctm').load('daktronics_general_system.html');				
	});

	/*--------------------------------------------------------------------------------------*/
	/*funciones para hacer aparecer el screen "Volver", de las secciones del proveedor Daktronics*/

	$('.topic_daktronics').click(function(){
		$('#back_hablador_2topics').show();
	});

	/*--------------------------------------------------------------------------------------*/
	/*funciones para cargar la sección Web / Redes, de las secciones del proveedor Daktronics*/

	$('#internet').load('web_redes_daktronics.php');







	/*--------------------------------------------------------------------------------------*/
	/*funciones para el screen de las secciones del proveedor SportSystem*/

	/*funciones para abrir la sección de sub - productos de "gimnasia" del proveedor Sportsystem*/
	$('#gimnasia a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sub_gimnasia').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');				
	});

		/*funciones para abrir la sección de Sub-productos "Gimnasia General" del proveedor SportSystem*/
		$('#general a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('gimnasia_general_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Gimnasia Artística" del proveedor SportSystem*/
		$('#artistica a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('gimnasia_artistical_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Fitness" del proveedor SportSystem*/
		$('#fitnees a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('fitness_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Psicomotricidad" del proveedor SportSystem*/
		$('#Psicomotricidad a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('psicomotricidad_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Gimnasia de Rehabilitación" del proveedor SportSystem*/
		$('#rehabilitacion a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('gimnasia_rehabilitacion_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Gimnasia Rítmica y Aeróbica" del proveedor SportSystem*/
		$('#ritmica a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('gimnasia_ritmica_aerobica_sportSystem.html');	
		});

		/*funciones para abrir la sección de Sub-productos "Gimnasia Barras" del proveedor SportSystem*/
		$('#barras a').click(function(){
			$('#divisiones_container_sub_gimnasia').hide();
			$('#ctm').load('gimnasia_barras_sportSystem.html');	
		});


	/*funciones para abrir la sección de sub - productos de "Atletismo" del proveedor Sportsystem*/
	$('#atletismo a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sub_atletismo').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');				
	});

		/*funciones para abrir la sección de sub - productos de "Competiciones de Pista" del proveedor Sportsystem*/
		$('#competiciones a').click(function(){		
			$('#divisiones_container_sub_atletismo').hide('slow');	
			$('#ctm').load('competiciones_pista_sportSystem.html');				
		});

		/*funciones para abrir la sección de sub - productos de "Lanzamientos" del proveedor Sportsystem*/
		$('#lanzamientos a').click(function(){		
			$('#divisiones_container_sub_atletismo').hide('slow');	
			$('#ctm').load('lanzamientos_sportSystem.html');				
		});

		/*funciones para abrir la sección de sub - productos de "Saltos de Altura con Garrocha" del proveedor Sportsystem*/
		$('#salto a').click(function(){		
			$('#divisiones_container_sub_atletismo').hide('slow');	
			$('#ctm').load('saltos_altura_garrocha_sportSystem.html');				
		});

	/*funciones para abrir la sección de productos de "Baloncesto" del proveedor Sportsystem*/
	$('#baloncesto a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sportSystem_baloncesto').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');		
	});

		/*funciones para abrir la sección de sub - productos de "Bancos para Jugadores" del proveedor Sportsystem*/
		$('#bancos_jugadores a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('banco_para_jugadores_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Tableros de Baloncesto" del proveedor Sportsystem*/
		$('#tableros_baloncesto a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('tableros_baloncesto_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Tableros de Baloncesto para Techo y Pared" del proveedor Sportsystem*/
		$('#tableros_techo_pared a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('tableros_baloncesto_techo_pared_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Tableros de baloncesto y mini baloncesto, pads protectores, aros, redes" del proveedor Sportsystem*/
		$('#tableros_pads a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('tableros_pads_protectores_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Tableros de baloncesto y mini baloncesto," del proveedor Sportsystem*/
		$('#tableros_mini a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('tableros_mini_baloncesto_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Tableros de baloncesto Portátiles" del proveedor Sportsystem*/
		$('#tableros_portables a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('tableros_portables_baloncesto_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Unidades de Recreación de baloncestos" del proveedor Sportsystem*/
		$('#unidades_recreacion a').click(function(){		
			$('#divisiones_container_sportSystem_baloncesto').hide('slow');	
			$('#ctm').load('unidades_recreacion_baloncesto_sportSystem.html');
		});

	/*funciones para abrir la sección de productos de "Balones" del proveedor Sportsystem*/
	$('#balones a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sub_balones').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');		
	});

		/*funciones para abrir la sección de sub - productos de "balones/Balones de Baloncesto y Mini Baloncesto " del proveedor Sportsystem*/
		$('#balon_baloncesto a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_baloncesto_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "balones/Balones de Balonmano" del proveedor Sportsystem*/
		$('#balon_balonmano a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_balonmano_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "balones/Balones de Futbol y Futbol Sala" del proveedor Sportsystem*/
		$('#balon_futbol a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_futbol_futbolSala_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "balones/Balones de Voleibol y Mini Voleibol" del proveedor Sportsystem*/
		$('#balon_voleibol a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_voleibol_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "balones/Balones de Playa Rugby Waterpolo" del proveedor Sportsystem*/
		$('#balon_playa a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_playa_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "balones/Carros Porta Balones" del proveedor Sportsystem*/
		$('#balon_carros a').click(function(){		
			$('#divisiones_container_sub_balones').hide('slow');	
			$('#ctm').load('balones_carros_sportSystem.html');
		});

	/*funciones para abrir la sección de productos de "Fútbol" del proveedor Sportsystem*/
	$('#futbol a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sub_futbol').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');			
	});

		/*funciones para abrir la sección de sub - productos de "Futbol/Accesoreos para Albitro" del proveedor Sportsystem*/
		$('#accesoriosAlbitros a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('accesorios_arbitros_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Futbol/Accesoreos para Entrenamiento" del proveedor Sportsystem*/
		$('#accesoriosEntrenamiento a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('accesorios_entrenamiento_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Futbol/Arcos Estandar y Reducidos" del proveedor Sportsystem*/
		$('#arcosFutbol a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('arcos_futbol_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Futbol/Bancos Suplentes para Equipos" del proveedor Sportsystem*/
		$('#bancosSuplentes a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('bancos_suplentes_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Futbol/Carro Marcador Banderines y Accesorios" del proveedor Sportsystem*/
		$('#carroMarcador a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('carro_marcador_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Futbol/Redes para Arcos de Fútbol y Fútbol Reducido" del proveedor Sportsystem*/
		$('#redesArcos a').click(function(){		
			$('#divisiones_container_sub_futbol').hide('slow');	
			$('#ctm').load('redes_arcosFutbol_sportSystem.html');
		});

	/*funciones para abrir la sección de productos de "Voleibol" del proveedor Sportsystem*/
	$('#voleybol a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');	
		$('#divisiones_container_sub_voleibol').show('slow');
		$('.sportSystem_color div').addClass('sportSystem_bgcolor');			
	});

		/*funciones para abrir la sección de sub - productos de "Voleibol/Accesorios para Albitros" del proveedor Sportsystem*/
		$('#voleibolAccesoriosAlbitros a').click(function(){		
			$('#divisiones_container_sub_voleibol').hide('slow');	
			$('#ctm').load('voleibol_accesorios_albitro_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Voleibol/Poster de Voleibol" del proveedor Sportsystem*/
		$('#voleibolPostes a').click(function(){		
			$('#divisiones_container_sub_voleibol').hide('slow');	
			$('#ctm').load('postes_voleibol_sportSystem.html');
		});

		/*funciones para abrir la sección de sub - productos de "Voleibol/Redes y Accesorios" del proveedor Sportsystem*/
		$('#voleibolRedes a').click(function(){		
			$('#divisiones_container_sub_voleibol').hide('slow');	
			$('#ctm').load('redes_voleibol_sportSystem.html');
		});

	/*funciones para abrir la sección de productos de "Tennis" del proveedor Sportsystem*/
	$('#tenis a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('tennis_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Tennis de Mesa" del proveedor Sportsystem*/
	$('#tenisMesa a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('tennis_mesa_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Fútbol de Mesa y Mesas de Billar" del proveedor Sportsystem*/
	$('#futbolMesaBillar a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('futbol_mesa_billar_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Deportes de Playa" del proveedor Sportsystem*/
	$('#playa a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('deportes_playa_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Badminton" del proveedor Sportsystem*/
	$('#badminton a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('badminton_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Fútbol Sala" del proveedor Sportsystem*/
	$('#futbolSala a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('futbol_sala_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "balonmano" del proveedor Sportsystem*/
	$('#balonMano a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('balonmano_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Hockey" del proveedor Sportsystem*/
	$('#hockey a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('hockey_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Streetball" del proveedor Sportsystem*/
	$('#streetball a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('streetball_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Tableros Electrónicos" del proveedor Sportsystem*/
	$('#tableroselectronicos a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('tableros_electronicos_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Ropa de Vestir y Accesorios" del proveedor Sportsystem*/
	$('#ropaAccesorios a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('ropa_accesorios_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Netball" del proveedor Sportsystem*/
	$('#netball a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('netball_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Multideporte" del proveedor Sportsystem*/
	$('#multiDeporte a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('multideporte_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Rugby" del proveedor Sportsystem*/
	$('#rugby a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('rugby_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Beisbol" del proveedor Sportsystem*/
	$('#beisbol a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('beisbol_sportSystem.html');					
	});

	/*funciones para abrir la sección de productos de "Natación y Waterpolo" del proveedor Sportsystem*/
	$('#natacion a').click(function(){		
		$('#divisiones_container_sportSystem').hide('slow');
		$('#ctm').load('natacion_waterpolo_sportSystem.html');					
	});

		


	
	/*--------------------------------------------------------------------------------------*/
	/*funciones para hacer aparecer el screen "Volver", de las secciones del proveedor SportSystem*/

	$('.topic_divisiones_sub_division_mix_wide').click(function(){
		$('#back_hablador_2topics').show();
	});



});

			


