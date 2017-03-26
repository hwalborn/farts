$(document).ready(function(){
  $(document).on('keydown', function() {
    const num_farts = 11
    function random_fart_id(){
      return Math.floor(Math.random()*num_farts)+1
    }
    document.getElementById(`sound${random_fart_id()}`).play();
  })
})

function playSoundAsync(url){
    new Audio(url).play();
}
