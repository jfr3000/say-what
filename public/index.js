"use strict";

let recognition = new webkitSpeechRecognition();
let statusText = document.getElementById('status');

recognition.onstart = function() {
    statusText.innerHTML = "I'm all ears";
};

recognition.onspeechstart = function() {
    statusText.innerHTML = "So interesting, tell me more!";
};

recognition.onresult = function(result) {
    result = result.results[0][0];
    let echo = `I am ${Math.round(result.confidence*100)}% sure that you said: ${result.transcript}`;
    statusText.innerHTML = result.transcript;
    let spokenEcho = new SpeechSynthesisUtterance(echo);
    spokenEcho.lang = 'en-US';
    spokenEcho.onend = function() {
        recognition.start();
    };
    window.speechSynthesis.speak(spokenEcho);
};

recognition.start();
