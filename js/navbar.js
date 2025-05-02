const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
});
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

navLinks.forEach(link=>{
    link.addEventListener("click",()=> menuOpenButton.click());
});