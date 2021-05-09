var jumbo=document.getElementById("jumbo");
var bgImage=document.getElementById("bg-image")
var comJumbo=window.getComputedStyle(jumbo)
var jumboHeight=comJumbo.height;
bgImage.style.height=jumboHeight;
window.addEventListener("resize", function(){
    var comJumbo=window.getComputedStyle(jumbo)
    var jumboHeight=comJumbo.height;
    bgImage.style.height=jumboHeight;
})