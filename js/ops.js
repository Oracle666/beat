const sections = $("section");
const display = $(".wrapper-content");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active-section");

const performTransition = sectionEq => {
    if(inScroll === false){
        inScroll = true;
        const position = sectionEq * -100;
        
            const currentSection = sections.eq(sectionEq);
            const menuTheme = currentSection.attr("data-sidemenu-theme");
            const sideMenu = $(".slide-menu");
            const sideLink = $(".slide-menu__link");

            if(menuTheme == "white"){
                sideLink.addClass("slide-menu__link--colors");
            } else { 
                sideLink.removeClass("slide-menu__link--colors");
            }

        display.css({
            transform: `translateY(${position}%)`
        });

        sections.eq(sectionEq).addClass("active-section").siblings().removeClass("active-section");
        

        setTimeout(() => {
            inScroll = false;
            
            sideMenu
            .find(".slide-menu__item")
            .eq(sectionEq)
            .addClass("slide-menu__item--active")
            .siblings()
            .removeClass("slide-menu__item--active");

        }, 1300);
    }
    
};

const scrollViewport = direction =>{
const activeSection = sections.filter(".active-section");
const nextSection = activeSection.next();
const prevSection = activeSection.prev();

    if(direction === "next" && nextSection.length){
        performTransition(nextSection.index())
    }

    if(direction === "prev" && prevSection.length){
        performTransition(prevSection.index())
    }
}


$(window).on("wheel", e =>{
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0){
        scrollViewport("next");
    }

    if(deltaY < 0){
        scrollViewport("prev");
    }
});


$(window).on("keydown", e =>{
    const tagName = e.target.tagName.toLowerCase();

    if(tagName != "input" && tagName != "textarea"){
        switch (e.keyCode){
            case 38:
                scrollViewport("prev");
                break;
    
            case 40:
                scrollViewport("next");
                break;
        }
    }

    
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    performTransition(reqSection.index());
});



if(isMobile){
    $("body").swipe({
        //Generic swipe handler for all directions
        swipe:function(event,direction) {
            const scroller = viewportScroller();
            let scrollDirection = "";
            if(direction === "up") scrollDirection = "next";
            if(direction === "down") scrollDirection = "prev";
            
            scroller[scrollDirection]();
        },
    });
}
//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

