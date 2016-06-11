"use strict";

let recognition = new webkitSpeechRecognition();

document.getElementById('listen').addEventListener('click', function() {
    recognition.start();
});

recognition.onresult = function(result) {
    result = result.results[0][0];
    document.getElementById('tadaah').innerText = `I am ${result.confidence.toFixed(2)}% sure that you said: \"${result.transcript}\"`;
};
