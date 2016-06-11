"use strict";

let recognition = new webkitSpeechRecognition();

recognition.start();

recognition.onresult = function(result) {
    result = result.results[0][0];
    let echo = `I am ${Math.round(result.confidence*100)}% sure that you said: ${result.transcript}`;
    let spokenEcho = new SpeechSynthesisUtterance(echo);
    spokenEcho.lang = 'en-US';
    window.speechSynthesis.speak(spokenEcho);
};
