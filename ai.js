// ====================
// TYPING ANIMATION
// ====================

const typingElement =
document.getElementById("typing-text");

if(typingElement){

    const text =
    "⚡ Welcome to Circuit AI Assistant.";

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



// ====================
// AI RESPONSE
// ====================

function generateResponse(){

    const input =
    document.getElementById("userInput").value.toLowerCase();

    const answerBox =
    document.getElementById("answerBox");



    if(input.includes("bc547")){

        answerBox.innerHTML =
        "🔧 BC547 is an NPN transistor.";

    }

    else if(input.includes("blink led")){

        answerBox.innerHTML =
        "💻 Arduino Blink LED example project.";

    }

    else{

        answerBox.innerHTML =
        "🤖 Sorry, I am learning.";

    }

}



// ====================
// VOICE ASSISTANT
// ====================

function startVoice(){

    if('webkitSpeechRecognition' in window){

        const recognition =
        new webkitSpeechRecognition();

        recognition.lang = "en-US";



        recognition.onresult =
        function(event){

            const voiceText =
            event.results[0][0].transcript;

            document.getElementById("userInput").value =
            voiceText;

            generateResponse();

        };



        recognition.start();

    }

                        }
