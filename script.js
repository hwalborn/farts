$(document).ready(function(){

  $(document).on('keydown', function(){
    document.getElementById('sound1').play();
  })
  $(document).on('keyup', function(){
    document.getElementById('sound1').stop();
  })
})
