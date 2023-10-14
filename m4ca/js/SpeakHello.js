(function(window){
    var speakWord = "Hello";
    var logger = document.getElementById("log");

    var helloSpeaker = {
        speak(name){
            logger.innerHTML+=speakWord + " " + name + "<br>";
            logger.scrollTo(0, logger.scrollHeight);
        }
    };

    window.helloSpeaker = helloSpeaker;
})(window);

