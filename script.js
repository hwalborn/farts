$(document).ready(function(){
  $(document).on('keypress', function() {
  	playSoundAsync("fart-noises/fart-" + Math.floor((Math.random() * 10) + 1) + ".wav");
  })
})

function playSoundAsync(url){
    new Audio(url).play();
}
