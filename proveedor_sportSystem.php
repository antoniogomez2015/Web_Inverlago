<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SportSystem</title>

<!--css-->
    <!--global-->
<link rel="stylesheet" href="css/global.css" type="text/css">
	<!--general-->
<link rel="stylesheet" href="css/proveedores_globales.css" type="text/css">

<!--Js-->
    <!--jquery-->
<script type="text/javascript" src="js/jquery.js"></script>
    <!--jquery cycle-->
<script type="text/javascript" src="js/jquery.cycle.all.js"></script>
    <!--funciones jquery-->
<script type="text/javascript" src="js/functions.js"></script>

</head>

<body>

	<div id="wrapper">    	
        
        <?php include("modulo1_proveedores_heather.php"); ?>

        <div id="ctm"></div>
		
        <?php include("sportSystem_divisiones_productos.php"); ?>

        <?php include("sportSystem_sub_division_gimnasia.php"); ?>

        <?php include("sportSystem_sub_division_atletismo.php"); ?>

        <?php include("sportSystem_sub_division_baloncesto.php"); ?>

        <?php include("sportSystem_sub_division_balones.php"); ?>

        <?php include("sportSystem_sub_division_futbol.php"); ?>

        <?php include("sportSystem_sub_division_voleibol.php"); ?>

        <?php include("back_sportSystem.php"); ?>         
       
    </div>

</body>
</html>

