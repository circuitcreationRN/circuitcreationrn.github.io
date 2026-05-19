function copyCode(){
  let code = document.getElementById("code").innerText;
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}


window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    }, 700);

});




const text = "Welcome To Circuit Creation RN Official Website";

let i = 0;

function typing(){

    if(i < text.length){

        document.querySelector(".typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }

}

typing();

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.pageX + "px";

    glow.style.top = e.pageY + "px";

});


// TYPING AI ANIMATION

const text =
"⚡ Welcome to Circuit AI Assistant. Ask about components, Arduino code, or electronics projects.";

let i = 0;

function typingAnimation(){

    if(i < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingAnimation,50);

    }

}

typingAnimation();



// AI RESPONSE SYSTEM

function generateResponse(){

    const input =
    document.getElementById("userInput").value.toLowerCase();

    const answerBox =
    document.getElementById("answerBox");



    // BC547

    if(input.includes("bc547")){

        answerBox.innerHTML =
        "🔧 BC547 is an NPN transistor used for switching and amplification. Common projects: touch alarm, amplifier, LED flasher.";

    }



    // LED BLINK

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



    // HC05

    else if(input.includes("hc05")){

        answerBox.innerHTML =
        "📡 HC-05 is a Bluetooth module used for wireless Arduino communication.";

    }



    // PROJECT IDEAS

    else if(input.includes("project")){

        answerBox.innerHTML =
        "🚀 Project Ideas: Home automation, robot car, water detector, line follower robot.";

    }



    // DEFAULT

    else{

        answerBox.innerHTML =
        "🤖 Sorry, I am still learning. Try searching electronics components or Arduino code.";

    }

}



// VOICE ASSISTANT

function startVoice(){

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
