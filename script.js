

(() => {
    $(document).ready(function() {
        $(document).on('keydown', function() {
            const num_farts = 11
            function random_fart_id() {
                return Math.floor(Math.random() * num_farts) + 1
            }
            var url = chrome.runtime.getURL(`fart-noises/fart-${random_fart_id()}.wav`)
            var audio = new Audio(url)
            audio.play()
        })
    })
})();
