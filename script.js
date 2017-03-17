$(document).ready(function(){
var sounds=['sound1', 'sound2', 'sound3', 'sound4', 'sound5','sound6','sound7','sound8','sound9']
  $(document).on('keydown', function(){
    document.getElementById(sounds[Math.round(Math.random()*sounds.length)]).play();
  })
  $(document).on('keyup', function(){

    document.getElementById(sounds[Math.round(Math.random()*sounds.length)]).stop();
  })
})
