console.clear();
$('.home-slider .side-bars > div').click(function () {
    var index = $(this).index();

    var isLeft = index == 0;

    var $slider = $(this).closest('.home-slider');

    var $current = $slider.find(' > .slides > div.active');
    var $post = null;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .slides > div:last-child');
        } else {
            $post = $slider.find(' > .slides > div:first-child');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');
});

$('.home-slider').mouseenter(function () {
    $(this).attr('data-top-.home-slider-auto-work', 'N');
});

$('.home-slider').mouseleave(function () {
    $(this).attr('data-top-.home-slider-auto-work', 'Y');
});

$('.home-slider .page-btns > li').click(function () {
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');

    var index = $(this).index();
    var $slider = $(this).closest('.home-slider');

    $slider.find(' > .slides > div.active').removeClass('active');
    $slider.find(' > .slides > div').eq(index).addClass('active');
});

setInterval(function () {
    $('.home-slider .page-btns > li.active').each(function (index, node) {
        var $current = $(node);
        var $slider = $current.closest('.home-slider');

        if ($slider.attr('data-top-slider-box-1-auto-work') !== 'Y') {
            var $post = $current.next();

            if ($post.length == 0) {
                $post = $current.siblings().eq(0);
            }

            $post.click();
        }
    });
}, 3000);
