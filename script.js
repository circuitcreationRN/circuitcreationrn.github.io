// ============================
// LOADER FIX
// ============================

window.onload = function(){

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        },500);

    }

};



// ============================
// TYPING ANIMATION
// ============================

const typingElement =
document.getElementById("typing-text");

if(typingElement){

    const text =
    "⚡ Welcome to Circuit AI Assistant. Ask about components, Arduino code, or electronics projects.";

    let i = 0;

    function typingAnimation(){

        if(i < text.length){

            typingElement.innerHTML +=
            text.charAt(i);

            i++;

            setTimeout(typingAnimation,50);

        }

    }

    typingAnimation();

}



// ============================
// AI RESPONSE SYSTEM
// ============================

function generateResponse(){

    const input =
    document.getElementById("userInput").value.toLowerCase();

    const answerBox =
    document.getElementById("answerBox");



    if(input.includes("bc547")){

        answerBox.innerHTML =
        "🔧 BC547 is an NPN transistor used for switching and amplification.";

    }

    else if(input.includes("blink led")){

        answerBox.innerHTML =
`💻 Arduino LED Blink Code:

void setup(){

pinMode(13,OUTPUT);

}

void loop(){

digitalWrite(13,HIGH);

delay(1000);

digitalWrite(13,LOW);

delay(1000);

}`;

    }

    else if(input.includes("hc05")){

        answerBox.innerHTML =
        "📡 HC-05 is a Bluetooth module used for wireless communication.";

    }

    else if(input.includes("project")){

        answerBox.innerHTML =
        "🚀 Try robot car, home automation, water detector, or line follower.";

    }

    else{

        answerBox.innerHTML =
        "🤖 Sorry, I am still learning.";

    }

}



// ============================
// SAFE VOICE ASSISTANT
// ============================

function startVoice(){

    if('webkitSpeechRecognition' in window){

        const recognition =
        new webkitSpeechRecognition();

        recognition.lang = "en-US";



        recognition.onresult = function(event){

            const voiceText =
            event.results[0][0].transcript;

            document.getElementById("userInput").value =
            voiceText;

            generateResponse();

        };



        recognition.start();

    }

    else{

        alert("Voice recognition not supported on this browser.");

    }

}
