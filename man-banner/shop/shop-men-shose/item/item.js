$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    /* 성능 향상을 위한 코드 */
    if (scrollTop >= 1000) {
        return false;
    }

    // 현재 스크롤바의 위치를 아주 정확하게 출력해준다.
    //console.log(scrollTop);

    if (scrollTop >= 200) {
        $('.sub-menu-box').addClass('fixed');
    } else {
        $('.sub-menu-box').removeClass('fixed');
    }
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 1000) {
        return false;
    }

    if (scrollTop <= 200) {
        $('.side-menu-bar').addClass('left');
    } else {
        $('.side-menu-bar').removeClass('left');
    }
});

$('.side-menu-btn').click(function () {
    var $클릭된_아이콘 = $(this);

    var nowAnimating = $클릭된_아이콘.attr('data-ico-now-animating');

    if (nowAnimating == 'Y') {
        // 이걸하면 아래 내용이 진행이 되지 않습니다.
        return;
    }

    $클릭된_아이콘.toggleClass('active');
    $클릭된_아이콘.attr('data-ico-now-animating', 'Y');

    setTimeout(function () {
        // 이 함수는 0.6초 후에 딱 1번 실행된다.
        $클릭된_아이콘.attr('data-ico-now-animating', 'N');
    }, 600);

});

$('.side-menu-btn').click(function () {
    var $클릭된_아이콘 = $(this);

    var nowAnimating = $클릭된_아이콘.attr('data-ico-now-animating');

    if (nowAnimating == 'Y') {
        return;
    }

    if ($클릭된_아이콘.hasClass('active')) {
        hideLeftSideBar();
    } else {
        showLeftSideBar();
    }

    $클릭된_아이콘.toggleClass('active');
    $클릭된_아이콘.attr('data-ico-now-animating', 'Y');

    setTimeout(function () {
        $클릭된_아이콘.attr('data-ico-now-animating', 'N');
    }, 300);
});

$('.sub-menu-box > .menu-bar > .side-menu-btn').click(function () {
    var a = $('.side-menu-bar').hasClass('active');
    if (a) {
        $('.side-menu-bar').removeClass('active');
    } else {
        $('.side-menu-bar').addClass('active');
    }
})

$('.side-menu-bar .menu-items ul > li').click(function (e) {
    var $clicked = $(this);

    if ($clicked.hasClass('active')) {
        $clicked.removeClass('active');
    } else {
        // 내 형제 중에서 active 가지고 있는거 빼았는다.
        $clicked.siblings('.active').removeClass('active');
        // 내가 지금 펼치려는 메뉴의 후손 중에 이미 펼쳐진게 있다면 닫는다.
        $clicked.find('.active').removeClass('active');
        // 메뉴를 펼친다.
        $clicked.addClass('active');
    }

    e.stopPropagation();
});

$('.tmi > section').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        //$(this).parent().find('.active').removeClass('active');
        $(this).siblings('.active').removeClass('active');

        $(this).addClass('active');
    }
})

$('button.color').click(function () {
    var a = $(this).hasClass('active');
    if (a) {
        $(this).removeClass('active');
    } else {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    }
})

$('button.size').click(function () {
    var a = $(this).hasClass('active');
    if (a) {
        $(this).removeClass('active');
    } else {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    }
})
