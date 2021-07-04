const mesureWidth = item =>{
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".colors-list");
    const titlesBlocks = container.find(".color-name");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".color-desc__text");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if(isMobile){
        reqItemWidth = screenWidth - titlesWidth;
    } else{
        reqItemWidth = 536;
    }
    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight -paddingLeft
    }
    
};

const closeEveryItemInContainer = container =>{
    const items = container.find(".color-item");
    const content = container.find(".color-desc");

    items.removeClass("active-color");
    content.width(0);

    $(".colors-title").text('Цвета');
}

const openItem = item =>{
    const hiddenContent = item.find(".color-desc");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".color-desc__text");

    item.addClass("active-color");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);

    $(".colors-title").text('Меню');
}

$(".color-name").on("click",(e) =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-item");
    const itemOpened = item.hasClass("active-color");
    const container = $this.closest(".colors-list");


    if (itemOpened){
        closeEveryItemInContainer(container)
    } else{
        closeEveryItemInContainer(container)
        openItem(item);
    }
    
})