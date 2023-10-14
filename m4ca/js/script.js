(function(){
    var button =document.getElementById("speak");

    button.onclick= function(){
        var names = document.getElementById("names").value.split(", ");
        for (let i = 0; i < names.length; i++) {
            var firstLetter = names[i].toLowerCase().charAt(0);
            
            if (firstLetter == "j") {
                byeSpeaker.speak(names[i]);
            } else {
                helloSpeaker.speak(names[i]);
            }
        }
    }
})();

