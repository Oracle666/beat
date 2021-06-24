const openButton = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".closeButton");
const closeHref = document.querySelectorAll(".menu__item");

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

closeHref.forEach((closeHref) => {
    closeHref.addEventListener("click", e =>{
        e.preventDefault();
        menu.style.display = ("none");
        closeButton.style.display = ("none");
    })
})

$(document).ready(() =>{
    $('.team-name').on('click', function(e){
        e.preventDefault();
        const triangle = $(this)
        const teamdesc = $('.team-desc');

        if(triangle.hasClass('triangleup')){
            triangle.removeClass('triangleup');
            teamdesc.css('height', '0%');
        }
        else{
            triangle.addClass('triangleup');
            teamdesc.css('height', '100%');
        }
    });
    
})



    /*$('.team-name').on('click', function(e){
        e.preventDefault();

        const triangle = $('.team-name')

            if(triangle.hasClass('triangleup')){
                triangle.removeClass('triangleup');
            }
            else{
                triangle.addClass('triangleup');
            }
        
        const teamdesc = $('.team-desc');

        if(teamdesc.hasClass('active')){
            teamdesc.css('height', '0%');
            teamdesc.removeClass('active');
            
        }
        else {
            teamdesc.css('height', '100%');
            teamdesc.addClass('active');
        }
    });*/
        /*$('.team-name').click(function(e){
            e.preventDefault();
            $(this){
                $('.team-name').css('color', 'blue')
            }
        });*/

