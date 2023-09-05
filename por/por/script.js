var menu=document.getElementById("menu");

ScrollReveal().reveal('.animate', {delay:0,easing:"ease-in",interval:50,scale:0.9,reset:true});
bars.addEventListener("click",()=>
{
    menu.classList.toggle("opacity-100");
    if (bars.classList.contains("fa-bars"))
    {
        bars.classList.replace("fa-bars","fa-times");
        menu.classList.replace("-top-60","top-12");
    }
    else
    {
        bars.classList.replace("fa-times","fa-bars");
        menu.classList.replace("top-12","-top-60");
    }
})
