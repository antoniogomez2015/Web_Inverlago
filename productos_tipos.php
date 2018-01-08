<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Deportes</title>
<!--css-->
<link rel="stylesheet" href="css/inverlago_deportes_tipos.css" type="text/css">
<!--slideshow-->
<link rel="stylesheet" type="text/css" href="css/slideshow.css">
<script type="text/javascript" src="js/scripts.js"></script>
<!--jquery-->
<script type="text/javascript" src="js/jquery-2.0.3.js"></script>
<!--jquery ui-->
<script type="text/javascript" src="js/jquery-ui.js"></script>
<!--info_hover-->
<link rel="stylesheet" type="text/css" href="css/infoHover.css">
<script type="text/javascript" src="js/intext.js"></script>
<script type="text/javascript" src="js/z7b85.js"></script>
<script type="text/javascript" src="js/pops"></script>

<!--slide-sidebar-right-->
<script type="text/javascript" src="js/jquery.cycle.all.js"></script>
<script type="text/javascript">
     $(document).ready(function() {
     	$('.slideshow').cycle({
             fx: 'scrollVert'
             });
			 
		/*funciones para el acordeon*/
		$(function() {
    		$(".ac").hide();
			$("div.accordion> h3").click(function(){
				$(this).next().slideToggle(90);								
			});
  		});
                
      });
	  
</script>

</head>

<body>

	<div id="wrapper">
    	<?php include("header_estandar.php"); ?>
        
        <?php include("modulo1_deportes_tipos.php"); ?>
        
        <?php include("modulo2_deportes_tipos.php"); ?>
        
	</div>

</body>
</html>