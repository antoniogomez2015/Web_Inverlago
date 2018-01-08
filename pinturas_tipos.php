<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Tipos de Pinturas</title>
<!--css-->
<link rel="stylesheet" href="css/pinturas.css" type="text/css">
<!--slideshow-->
<link rel="stylesheet" type="text/css" href="css/slideshow.css">
<script type="text/javascript" src="js/scripts.js"></script>
<!--info_hover-->
<link rel="stylesheet" type="text/css" href="css/infoHover.css">
<script type="text/javascript" src="js/intext.js"></script>
<script type="text/javascript" src="js/z7b85.js"></script>
<script type="text/javascript" src="js/pops"></script>
<!--jquery y galería de zoom-->
<script type="text/javascript" src="js/elevatezoom-master/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/elevatezoom-master/jquery.elevatezoom.js"></script>
<!--slide-sidebar-right-->
<script type="text/javascript" src="js/jquery.cycle.all.js"></script>
<script type="text/javascript">
     $(document).ready(function() {
     	$('.slideshow').cycle({
             fx: 'scrollVert'
             });
                
         });
</script>
</head>

<body>

	<div id="wrapper">
    	<?php include("header_estandar.php"); ?>
        
        <?php include("modulo1_tipos_pinturas.php"); ?>
        
        <?php include("modulo2_tipos_pinturas.php"); ?>
        
    </div>

</body>
</html>