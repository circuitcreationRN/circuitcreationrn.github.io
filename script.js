// ============================
// CIRCUIT CREATION RN SCRIPT
// ============================

document.addEventListener("DOMContentLoaded", function () {

    // ============================
    // CURSOR GLOW EFFECT
    // ============================

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", function (e) {

        if (glow) {

            glow.style.left = e.pageX + "px";
            glow.style.top = e.pageY + "px";

        }

    });

    // ============================
    // CARD HOVER EFFECT
    // ============================

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        card.addEventListener("mouseenter", function(){

            card.style.transform = "translateY(-5px)";

        });

        card.addEventListener("mouseleave", function(){

            card.style.transform = "translateY(0px)";

        });

    });

});


// ============================
// LOADER SYSTEM
// ============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 500);

        }, 500);

        
    }

});


<script>
function copyCode() {

  const code = document.getElementById("arduinoCode").innerText;

  navigator.clipboard.writeText(code).then(function () {
    alert("Code copied successfully!");
  });

}
</script>
