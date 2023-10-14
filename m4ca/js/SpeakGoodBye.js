(function(window){
    var byeSpeaker = {
        speak(name){
            console.log(speakWord + " " + name);
        }
    }
    var speakWord = "Good Bye";
    
    window.byeSpeaker = byeSpeaker;
})(window);