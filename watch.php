<head>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  <link rel="stylesheet" type="text/css" href="css/video-js.css">
</head>

<body>
   <?php
   $film = $_GET['film'];
   ?>
   <div class="video-container">
      <video class="video-js video" controls preload="auto" height="500" data-setup="{'autoplay': true}">
       <source src="video/<?php echo $film?>" type='video/mp4'>
     </video>
   </div>
  <script src="http://vjs.zencdn.net/5.4.4/video.js"></script>
</body>
