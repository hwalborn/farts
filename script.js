$(document).ready(function(){
var sounds=['sound1', 'sound2', 'sound3']
  $(document).on('keydown', function(){
    document.getElementById(sounds[Math.round(Math.random()*sounds.length)]).play();
  })
  $(document).on('keyup', function(){

    document.getElementById(sounds[Math.round(Math.random()*sounds.length)]).stop();
  })
})
