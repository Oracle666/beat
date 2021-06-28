/*Team*/
$('.team-item').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active').siblings().removeClass('active')
})