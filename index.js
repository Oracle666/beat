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



$(document).ready(function(){
    /*Team*/
    $('.team-item').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active')
    })
    /*review*/
    const findBlockByAlias = function(alias){
        return $('.review-item').filter(function(ndx, item){
            return $(item).attr('data-linked-with') === alias;
        });
    };

    $('.switcher__item').on('click', function(e){
        e.preventDefault();
        const target = $(e.currentTarget).attr('data-open');
        const itemToShow = findBlockByAlias(target);
        const curItem = $(e.currentTarget);

        itemToShow.addClass('reviewactive').siblings().removeClass('reviewactive');
        curItem.addClass('activelink').siblings().removeClass('activelink');
    });
    /*slider*/
    const slider = $('.assortment__list').bxSlider({
        pager:false,
        controls:false
    });

    $('.slide__left').click(function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    })
    $('.slide__right').click(function(e){
        e.preventDefault();
        slider.goToNextSlide();
    })
    
})

/*const openItem = function(item){
        const container = item.closest('.team-item');
        const contentBlock = container.find('.team-desc');

        container.addClass('active');
        contentBlock.height('100%');
    }

    const closeEveryItem = function(container){
        const items = container.find('.team-desc');
        const itemContainer = container.find('.team-item')
        itemContainer.removeClass('active');
        items.height(0);
    }

    $('.team-name').on('click', function(e) {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const container = $this.closest('.team-list');
        const elemContainer = $this.closest('.team-item');

        if(elemContainer.hasClass('active')){
            closeEveryItem(container);
        }
        else{
            closeEveryItem(container);
            openItem($this);
        }
    })*/