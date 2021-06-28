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