

		<div id="horizontal_nav">       
            
            <!--tutorial: Tutoriales JQuery - Efecto Acordeón
			https://www.youtube.com/watch?v=MUb8bVcTW0g&hd=1-->
            <div id="contenedor_ac" style="text-align: left;" dir="ltr">
                <code style="white-space: nowrap; line-height: 15px;">                
                    <div class="accordeon">
                        <span class="cerrar"><a href="#"><img src="img/cerrar.png" width="28" height="28" alt="cerrar"></a></span>
                        <h3>Gimnasia</h3>
                        <div class="ac">
                            <ul>
                                <li><a href="#">Multideporte</a></li>
                                <li><a href="#">Multiprop&oacute;sito</a></li>
                                <li><a href="#">Cardiovascular</a></li>
                                <li><a href="#">Pesas</a></li>
                                <li><a href="#">Esgrima</a></li>
                            </ul>
                        </div>
                        
                        <h3>titulo 2</h3>
                        <div class="ac">
                            <p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in laoreet odio, egestas convallis lectus. Duis mollis ligula id dui adipiscing, sit amet ultricies dolor sollicitudin. Praesent blandit turpis id ante eleifend, quis luctus tellus tristique. Pellentesque viverra pretium ante pulvinar pharetra. In eleifend nibh vitae leo posuere, at aliquam enim bibendum.</p>
                        </div>
                        
                        <h3>titulo 3</h3>
                        <div class="ac">
                            <p>3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in laoreet odio, egestas convallis lectus. Duis mollis ligula id dui adipiscing, sit amet ultricies dolor sollicitudin. Praesent blandit turpis id ante eleifend, quis luctus tellus tristique. Pellentesque viverra pretium ante pulvinar pharetra. In eleifend nibh vitae leo posuere, at aliquam enim bibendum.</p>
                        </div>
                    </div>
                </code>
            </div>
            
            <!--variantes de deportes-->
            <div id="variante">
            	<ul>                	
                    <li>CARACTERÍSTICAS</li>
                    <li><a href="#">Basketboll</a></li>
                    <li><a href="#">Voleyboll</a></li>
                    <li><a href="#">Futbol Sala</a></li>
                </ul>
            </div>
            
            <!--productos que aplican a variantes seleccionada-->
            <div id="productos_variante">
            	<ul>                	
                    <li>PRODUCTOS</li>
                    <li><a href="#">Producto_1</a></li>
                    <li><a href="#">Producto_2</a></li>
                    <li><a href="#">Producto_3</a></li>
                </ul>
            </div>
            
            <!--proveedores de variantes seleccionada-->
            <div id="proveedores_variante">
            	<ul>                	
                    <li>PROVEEDORES</li>
                    <li><a href="#">Connor</a></li>
                    <li><a href="#">Sport Curt</a></li>
                    <li><a href="#">Dacktronicks</a></li>
                </ul>
            </div>
            
            <!--consulta_variantes_deportes-->
            <div id="consulta">
            	<form class="campos-contacto" name="mail_frm" action="procesar.php" method="post" enctype="application/x-www-form-urlencoded" autocomplete="on">
                        <table border="0" width="500px" height="400px">
                            <tr>
                                <th class="contacto-nombre"><label for="name">Nombre</label></th>
                                <th><input type="text" name="nombre" id="name" placeholder="Ingrese su nombre"></th>
                            </tr>
                            
                            <tr>
                                <td class="contacto-email"><label for="email">E-mail</label></td>
                                <td><input type="correo" name="correo" id="e-mail" placeholder="Ingrese su E-mail"></td>
                            </tr>
                            
                            <tr>
                                <th class="contacto-nombre"><label for="name">Asunto</label></th>
                                <th><input type="text" name="asunto" id="name" placeholder="Ingrese su nombre"></th>
                            </tr>
                            
                            <tr>
                                <td class="contacto-text-area"><label class="label-area" for="mensaje">Mensaje</label></td>
                                <td><textarea name="mensaje" id="mensaje" placeholder="¿Cuál es tu requerimiento?"></textarea></td>
                            </tr>
                            
                            <tr>
                                <td></td>
                                <td><input type="submit" name="enviar_btn" value="Enviar solicitud"></td>
                            </tr>
                            
                        </table> 
                                     
            	</form>
            </div>
        
        </div>