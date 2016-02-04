<!doctype html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>AguNas</title>

   <link rel="shortcut icon" href="images/favicon.png">

   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.teal-orange.min.css" />
   <link rel="stylesheet" href="css/styles.css">
      <script type="text/javascript" src="js/jquery.min.js"></script>
</head>

<?php
function endsWith($haystack, $needle){
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}

function trimFilm($film){
   $str = explode ('.', $film);
   $newFilm = "";
   for($i = 0; $i < count($film); $i ++){
      $newFilm .= $str[$i];
   }
   return $newFilm;
}

?>

<body class="agunas-player mdl-color--grey-100 mdl-color-text--grey-700 mdl-base" >
   <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--waterfall">
         <!-- Top row, always visible -->
         <div class="mdl-layout__header-row">
            <!-- Title -->
            <div class="mdl-layout-spacer"></div>
            <span class="mdl-layout-title">AguNas Player</span>
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
               <label class="mdl-button mdl-js-button mdl-button--icon" for="waterfall-exp">
                  <i class="material-icons">search</i>
               </label>
               <div class="mdl-textfield__expandable-holder">
                  <input class="mdl-textfield__input" type="text" name="sample" id="waterfall-exp">
               </div>
            </div>
         </div>
         <!-- Bottom row, not visible on scroll -->
         <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark mdl-layout__header-row">
            <a href="#film" class="mdl-layout__tab is-active">Film</a>
            <a href="#tvseries" class="mdl-layout__tab">Serie TV</a>
            <a href="#music" class="mdl-layout__tab">Musica</a>
         </div>
      </header>
      <div class="mdl-layout__drawer">
         <span class="mdl-layout-title">AguNas Menu</span>
         <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Film</a>
            <a class="mdl-navigation__link" href="">Serie TV</a>
            <a class="mdl-navigation__link" href="">Musica</a>
         </nav>
      </div>

      <main class="mdl-layout__content">

         <a name="top" id="top"></a>
         <!-- film -->
         <div class="mdl-layout__tab-panel is-active" id="film">
            <div class="film-content mdl-grid">
               <?php

                   $videos = scandir('video', 0);
                   for($j = 0; $j < 40; $j++){
                   for($i = 2; $i < count($videos); $i++){
                      $video = $videos[$i];
                      if(endsWith($video, '.mp4') || endsWith($video, '.avi') || endsWith($video, '.mkv') || endsWith($video, '.wmv')){
               ?>
               <div class="mdl-cell--2-col"></div>
               <div class="mdl-card mdl-shadow--2dp mdl-cell--8-col mdl-grid video-row">
                  <div class="">
                     <a href="#" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick="filmToPlayer('<?php echo $video;?>')">
                        <i class="material-icons">play_arrow</i>
                     </a>
                     <span class="video-row-title"><?php echo trimFilm($video);?></span>
                  </div>
               </div>
               <div class="mdl-cell--2-col"></div>
                     <?php }}
                  } ?>
            </div>
         </div>

         <!-- Serie TV -->
         <div class="mdl-layout__tab-panel" id="tvseries">
            <section class="section--center mdl-grid mdl-grid--no-spacing">
               <div class="mdl-cell mdl-cell--12-col">
                  <h4>Serie TV</h4>
                  Sezione in allestimento
               </div>
            </section>
         </div>

         <!-- Musica -->
         <div class="mdl-layout__tab-panel" id="music">
            <section class="section--center mdl-grid mdl-grid--no-spacing">
               <div class="mdl-cell mdl-cell--12-col">
                  <h4>Musica</h4>
                  Sezione in allestimento
               </div>
            </section>
         </div>
      </main>
   </div>
   <a href="#top" id="to-top" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
      <i class="material-icons">keyboard_arrow_up</i>
   </a>

   <script type="text/javascript" src="js/material.min.js"></script>
   <script type="text/javascript">
      function filmToPlayer(film){
         window.location = 'watch.php?film=' + film;
      }
      $('#to-top').click(function(event) {
         console.log('passo');
			jQuery('html, body').animate({scrollTop: 0}, 300);
         console.log('doppio');
      });
   </script>
</body>

</html>
