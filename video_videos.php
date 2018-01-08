<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Inverlago Corporativo</title>
<!--css-->
<link rel="stylesheet" href="css/videos_videos.css" type="text/css">
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
        
        <?php include("modulo1_videos_videos.php"); ?>
        
        <?php include("modulo2_videos_videos.php"); ?>
        
        <?php include("modulo3_videos_videos.php"); ?>        
        
    </div>

</body>
</html>