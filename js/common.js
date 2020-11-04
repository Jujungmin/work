// const
var wW;
var wH;


/*-------------------------------------------------------------------
    header
    footer
-------------------------------------------------------------------*/
$(document).ready(function() {
    // 현재 주소 상태확인
    var url = location.href;
    var urlPara = url.split('/');
    var splitPara;
    for(var i = 0; i < urlPara.length; i++) {
        splitPara = urlPara[urlPara.length-1];
    }
    $.each($('.mo_menu_list'), function() {
        if($(this).attr('href') === splitPara) {
            $(this).addClass('navOn');
            return false;
        }
    });
    $('.navOn').next().find('a').each(function(index, key) {
            if($(key).attr('href') === splitPara) {
                $(key).addClass('navOn');
                return false;
            }
        });

    var $header = $('#header');
    var $document = $(document);
    var $window = $(window);
    var $footer = $('#footer');
    var $scrollTop = $('.scroll_top');
    
    /* 본문 바로가기 */
    $('#skipNav').focusin(function() {
        $(this).animate({top: '0px'}).css({display: 'block'})
    }).focusout(function() {
        $('#skipNav').css({top: '-50px', display: 'none'});
    });
    
    $window.on('resize', function(){
        wW = $window.width();
        wH = $window.height();

        /* pc, mobile menu */
        navMenu();

    }).trigger('resize');


    $scrollTop.on('click', function(){
        $('html, body').animate({scrollTop : 0}, 'slow');
    });

    $window.on('scroll', function() {
        var wTop = $window.scrollTop();
        if(wTop > $header.height()) {
            $header.addClass('headerFixed');
        } else {
            $header.removeClass('headerFixed');
        }
        // scroll_top fixed
        if(wTop < $document.height() - $window.height() - $footer.innerHeight() - ($scrollTop.height()*2)) {
            $scrollTop.addClass('scrollTopFixed');
        } else {
            // false
            $scrollTop.removeClass('scrollTopFixed');
        }
        // scroll_top hide
        if(wTop < $window.height()) {
            $scrollTop.addClass('scrollTopHide');
        } else {
            $scrollTop.removeClass('scrollTopHide');
        }
    }).trigger('scroll');

    /* search_pop */
    searchPop();
}); // END


/* pc. mobile 메뉴 */
function navMenu() {
    var $mainMenu = $('.main_menu');
    var $mainMenuList = $mainMenu.find('.main_menu_list');
    var $navMoBtn = $('.nav_mo_btn');
    var $navMoMenu = $('.nav_mo_menu');
    var $navMoClose = $('.nav_mo_close');
    var $navMoDim = $('.nav_mo_dim');
    var $langSelect = $('.lang_select');
    var $langList = $langSelect.next('.lang_list');
    var flag = false;
    
    function navInit(moMenu) {
        $navMoMenu.css({ right: '-240px', visibility: moMenu});
        $navMoClose.css({left: '0', visibility: 'hidden'});
        $navMoDim.css({display: 'none', opacity: '0'});
        $mainMenuList.find('ul').css({display: 'none'});
        $langList.removeClass('langOn');
    }
    
    /* pc menu */
    if(wW > 1023) {
        // PcMenu event init
        $mainMenu.find('a').off('click');
        navInit('visible');

        $mainMenuList.off().on({
            'mouseenter': function() {
                flag = true;
                $(this).find('> ul').css({display: 'block'});
            },
            'mouseleave': function() {
                flag = false;
                $(this).find('> ul').css({display: 'none'});
            },
            'focusin': function(e) {
                if(flag) {
                    e.target.blur();
                }
                $(this).find('> ul').css({display: 'block'});
            }
        });
        $mainMenuList.find('ul').find('li:last-child').focusout(function() {
            $(this).parent().css({display: 'none'});
        });

    /* mobile menu */
    } else {
        // MobileMenu
        $mainMenuList.off('mouseenter mouseleave focusin');
        
        $('.nav_mo_close, .nav_mo_dim').off().on('click', function() {
            navInit('hidden');
        });

        $navMoBtn.off().on('click', 'a', function() {
            $navMoMenu.css({ right: 0, visibility: 'visible'});
            $navMoClose.css({ left: '-50px', visibility: 'visible'});
            $navMoDim.css({display: 'block'}).animate({opacity: 1}, 600);
        });

        $mainMenu.find('a').off().on('click', function() {
            var _mainMenuNext = $(this).next();
            if(_mainMenuNext.is('ul') && (_mainMenuNext.is(':visible'))) {
                // console.log('up')
                _mainMenuNext.slideUp();
                return false;
            }
            if(_mainMenuNext.is('ul') && !(_mainMenuNext.is(':visible'))) {
                // console.log('down');
                $mainMenu.find('ul').not(_mainMenuNext.parentsUntil('.main_menu')).slideUp();
                _mainMenuNext.slideDown();
                return false;
            }
            _mainMenuNext.find('li:last-child').focusout(function() {
                $(this).closest('ul').slideUp();
            });
        });
    } // else end
    $langSelect.off().on('mousedown', 'a', function() {
        if(!$langList.hasClass('langOn')) {
            $(this).find('i').addClass('langOn');
            $(this).parent().next('ul').addClass('langOn');
        } else {
            $('.lang_select').find('i').removeClass('langOn');
            $('.lang_list.langOn').removeClass('langOn');
        }
        return false;
    })
    .on('focusin', function() {
        $('.lang_list').addClass('langOn');
    });
    $langList.find('li:last-child').focusout(function() {
        $(this).parent().removeClass('langOn');
    });
} // navMenu END()

function searchPop() {
    /* search_pop form */
    var $search = $('.search');
    var $searchPopup = $('.search_popup');
    var $searchForm = $('.search_form, .search_form label');
    var $searchInput = $('input[name="search_input"]');
    var $searchIcon = $('button[name="search_icon"]');
    var $searchClose = $('.search_popup_close');

    $search.on('click', 'a', function() {
        $searchPopup.stop(true).animate({opacity: 1}, 400).queue(function() {
            $(this).css({display: 'block'});
        }).dequeue();
        return false;
    });

    $searchClose.on('click', function() {
        $searchPopup.stop(true).animate({opacity: 0}, 200, function() {
            $(this).css({display: 'none'});
            $searchInput.val('');
        });
        searchInit();
    });

    $searchInput.on('keyup',function() {
        if($(this).val() === ''){ // 공백
            searchInit();
        } else {
            $searchForm.addClass('formOn');
            $searchIcon.css({color: '#222'})
        }
    }).on('keydown', function(){
        $searchForm.addClass('formOn');
    });

    function searchInit() {
        $searchForm.removeClass('formOn');
        $searchIcon.css({color: '#999'})
    }
} // searchPop() END
