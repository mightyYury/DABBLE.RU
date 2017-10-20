(function($) {
    $(function() {

        $('ul.tabs').delegate('li:not(.active)', 'click', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .parents('div.js-tabs').find('div.tab_cont').hide().eq($(this).index()).fadeIn(350);
        })

    })
})(jQuery)