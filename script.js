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
