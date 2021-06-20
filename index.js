const openButton = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".closeButton");

openButton.addEventListener("click", e => {
    e.preventDefault();
    menu.style.display = ("block");
    closeButton.style.display = ("block");
})

closeButton.addEventListener("click", e =>{
    e.preventDefault();
    menu.style.display = ("none");
    closeButton.style.display = ("none");
})
