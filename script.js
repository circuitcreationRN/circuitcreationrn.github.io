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

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark-mode");

}
