var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";


function menutoggle(){
    if (MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "400px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}






window.addEventListener("scroll" , function(){
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);

})
function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}