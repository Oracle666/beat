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