// ====================
// CURSOR GLOW EFFECT
// ====================

const glow =
document.querySelector(".cursor-glow");



document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left =
        e.pageX + "px";

        glow.style.top =
        e.pageY + "px";

    }

});



// ====================
// CARD HOVER EFFECT
// ====================

const cards =
document.querySelectorAll(".card");



cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-5px)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0px)";

    });

});
