
// LOADER SYSTEM

window.addEventListener("load", function(){

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display = "none";

            },500);

        },500);

    }

});
