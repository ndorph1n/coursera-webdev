(function(window){
    var logger = document.getElementById("log");
    var speakWord = "Good Bye";

    var byeSpeaker = {
        speak(name){
            logger.innerHTML+=speakWord + " " + name + "<br>";
            logger.scrollTo(0, logger.scrollHeight);
        }
    }

    window.byeSpeaker = byeSpeaker;
})(window);