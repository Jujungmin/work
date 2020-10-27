/*-------------------------------------------------------------------
    container
    main_visual
    main_philosophy
    main_message
    main_sellers
    main_products
    main_academy
    main_meeting
    main_info
    main_recommend
    main_board
-------------------------------------------------------------------*/

$(document).ready(function() {
    /* main_visual */
    keyvisualGallery();
   
    /* main_philosophy */
    philoGallery();
   
    /* main_sellers */
    sellersGallery();
  
    /* main_products */
    productsGallery();
  
    /* main_board */
    boardGallery();
   
    /* main_recommend */
    recommGallery();

    $(window).on('resize', function() {
        fullHeight();
    }).trigger('resize');


/*-------------------------------------------------------------------
    container
-------------------------------------------------------------------*/
    function fullHeight() {
        var wH = $(window).height();
        var containerH = $('.container').css('padding-top').replace(/[^-\d\.]/g, '');
        $('.--full_height').css({ height: (wH - containerH)});
    }

    var logoScroll = 0;
    var $philoLogo = $('.philo_logo');
    var philoTop = $('.main_philosophy').offset().top;
    var philoH = $('.main_philosophy').innerHeight();
    var wTop = $(window).scrollTop(); // 0

    // scroll_down
    $('.scroll_down').on('click', function() {
        $('html, body').animate({scrollTop: philoTop}, 'slow');
    });
    
    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();
        var windowH = $(window).innerHeight();

        $('.main_message, .main_meeting').each(function() {
            var sectionTop = Math.floor($(this).offset().top);
            var sectionH = Math.floor($(this).innerHeight());
            if((sectionTop >= 0) && (sectionTop + (sectionH)/3) < (windowTop + windowH)) {
                $('.ceo_img').addClass('messageOn');
                $('.ceo_sign').delay(400).queue(function() {
                    $(this).addClass('messageOn')
                });
                $('.meeting_list').addClass('meetingOn');
            }
        });

        if(wW > 1023) {
            // 1024일때
            if(((windowTop + windowH) > philoTop) && (windowTop < (philoTop + philoH))) {
                if(wTop < windowTop) {
                    logoScroll--;
                } else {
                    logoScroll++;
                }
                $philoLogo.css({transform: 'translateX(' + logoScroll + '%)'});
                wTop = windowTop;
            }
        } else {
            // 1023 일때
            $philoLogo.css({transform: 'translateX(0%)'})
        }
    }).trigger('scroll');

}); // END



/*-------------------------------------------------------------------
    main_visual
-------------------------------------------------------------------*/
function keyvisualGallery() {
    var $visualSlide = $('.visual_slide');
    var $visualSlideItem = $visualSlide.find('.visual_slide_item');
    var $visualCnt = $('.visual_content_cell');
    var $visualCntTxt = $visualCnt.find('.inner').children();

    $('.visual_gallery').slick({
        fade: true,
        speed: 1000,
        arrows: true,
        prevArrow: $('#visualPrev'),
        nextArrow: $('#visualNext'),
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true
    })
    .on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide) {
        $visualSlideItem.removeClass('visualOn');
        $visualSlide.eq(nextSlide).find($visualSlideItem).addClass('visualOn');
        $('.visualTxt').removeClass('visualTxt');
        $visualSlide.eq(nextSlide).find($visualCntTxt).each(function(i) {
            $(this).stop(true,false).delay(i * 700).queue(function() {
                $(this).addClass('visualTxt').dequeue();
                return false;
            });
        });
        
        var $visualPageNum = $('.visual_page_num');
        var visualSlideTotal = $visualSlide.length;
        if (nextSlide === 0) {
            $visualPageNum.text(1 + ' / ' + visualSlideTotal);
        } else {
            $visualPageNum.text((nextSlide + 1) + ' / ' + visualSlideTotal);
        }
    }); // slick() END
    
    $visualSlide.eq(0).find($visualSlideItem).addClass('visualOn');
    $visualSlide.eq(0).find($visualCntTxt).addClass('visualTxt');
    
} // keyvisualGallery() END



/*-------------------------------------------------------------------
    main_philosophy
-------------------------------------------------------------------*/
function philoGallery() {
    $('.philo_slide_long').slick({
        prevArrow: $('#philoPrev'),
        nextArrow: $('#philoNext'),
        draggable: false,
        speed: 800,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6500,
        asNavFor: '.philo_slide_content, .philo_slide_square',
        responsive: [{
            breakpoint: 540,
            settings: {
                draggable: true
            }
        }]
    });
    var $philoCnt = $('.philo_slide_content');
    var $philoCntCell = $philoCnt.find('.philo_content_cell');
    var $philoCntCellTxt = $philoCntCell.children();
    $('.philo_slide_content').slick({
        draggable: false,
        fade: true,
        arrows: false,
        speed: 800,
        asNavFor: '.philo_slide_long, .philo_slide_square'
    }).on('afterChange', function(event, slick, currentSlide) {
        $('.philoTxt').removeClass('philoTxt');
        $('.slick-current').find($philoCntCellTxt).each(function(i) {
            $(this).stop(true, false).delay(i * 160).queue(function() {
                $(this).addClass('philoTxt').dequeue();
            });
        });
    });
    $('.philo_slide_square').slick({
        draggable: false,
        arrows: false,
        speed: 800,
        asNavFor: '.philo_slide_long, .philo_slide_content'
    });
    $philoCntCell.eq(0).children().addClass('philoTxt');
} // philoGallery () END



/*-------------------------------------------------------------------
    main_sellers
-------------------------------------------------------------------*/
function sellersGallery() {
    var $bestSellers = $('.main_sellers');
    var $sellersImg = $('.sellers_img_item');
    var $sellersCnt = $('.sellers_cell_txt');
    var $sellersBtn = $bestSellers.find('.comm_nav_arrow');
    var timer  = 0;
    var currentIdx = 0;
    var sellersTotal = $sellersImg.length;

    $sellersImg.eq(0).addClass('sellersOn');
    $sellersCnt.eq(0).children().addClass('sellersTxt');
    
    function sellersSlide(index) {
        $('.sellersOn').removeClass('sellersOn');
        $sellersImg.eq(index).addClass('sellersOn');
        $sellersCnt.children().removeClass('sellersTxt');
        $sellersCnt.eq(index).children().addClass('sellersTxt')
        currentIdx = index;
        //[참고::delay after addClass in each loop] https://stackoverflow.com/questions/40450246/jquery-delay-after-addclass-in-each-loop
    }

    var nextIdx;
    var prevIdx;

    $sellersBtn.off().on('click', 'a', function(e) {
        nextIdx = (currentIdx + 1) % sellersTotal;
        prevIdx = (currentIdx + (sellersTotal - 1)) % sellersTotal;
        if($(this).hasClass('comm_prev')) {
            sellersSlide(prevIdx);
        } else {
            sellersSlide(nextIdx);
        }
    });

    function sellersAutoSlide() {
        timer = setInterval(function() {
            nextIdx = (currentIdx + 1) % sellersTotal;
            sellersSlide(nextIdx);
        }, 7000);
    };
    sellersAutoSlide();
    
    function sellersStopSlide() {
        clearInterval(timer);
    }

    $sellersBtn.on({
        mouseenter : sellersStopSlide,
        mouseleave : sellersAutoSlide,
    });
    
} // sellersGallery() END



/*-------------------------------------------------------------------
    main_products
-------------------------------------------------------------------*/
function productsGallery() {
    var $proSlide = $('.products_slide');
    var $proSlideList = $('.products_slide_list');
    var proSlideListW;
    var $proBtn = $('.products_nav');
    var speed = 700;
    var timer = 0;
    
    $(window).on('resize', function(){
        proSlideListW = Math.floor($proSlideList.width());
    });

    $proBtn.on('click', 'a', function() {
        if($(this).hasClass('comm_next')) {
            proNextSlide();
        } else {
            proPrevSlide();
        }
    });

    function proNextSlide() {
        $proSlide.stop(true).animate({left: -proSlideListW + 'px'}, speed, function() {
            $(this).append($(this).find('.products_slide_list').first());
            $(this).css({left: 0});
        });
    }
    
    function proPrevSlide() {
            $proSlide.css({left: -proSlideListW + 'px'}).prepend($('.products_slide_list').last());
            $proSlide.stop(true).animate({left: 0}, speed)
        }
        function proAutoSlide() {
            timer = setInterval(function() {
                proNextSlide();
            }, 7000);
        }
        // proAutoSlide();

        $('.products_slide_list, .products_nav').hover(function() {
            clearInterval(timer);
        }, function() {
            proAutoSlide();
        });
    } // productsGallery() END



/*-------------------------------------------------------------------
    main_board
-------------------------------------------------------------------*/
    function boardGallery() {
        
        boardNewsGallery();
        boardPrGallery();

    // NEWS
    function boardNewsGallery() {
        var $boardNews = $('.board_content_news');
        var $boardNewsLi = $boardNews.find('li');
        var boardNewsLiTotal = $boardNewsLi.length;
        var timer = 0;
        var curIndex = 0;
        
        $boardNewsLi.eq(curIndex).addClass('boardOn');
        
        function newsAuto() {
            timer = setInterval(newsSlide, 4000);
        }
        // newsAuto();

        function newsSlide() {
            if(curIndex < (boardNewsLiTotal-1)) { // 0 ~ 9
                curIndex++;
            } else {
                curIndex = 0;
            }
            $boardNewsLi.removeClass('boardOn').eq(curIndex).addClass('boardOn');
        }

        $boardNewsLi.hover(function() {
            clearInterval(timer);
        }, function() {
            newsAuto();
        })
    }

    // PR
    function boardPrGallery() {
        var $boardPr = $('.board_content_pr');
        var $boardPrLi = $boardPr.find('li');
        var boardPrLiTotal = $boardPrLi.length;
        var timer = 0;
        var curIndex = 0;

        $boardPrLi.eq(curIndex).addClass('boardOn');

        function prAuto() {
            timer = setInterval(prSlide, 4000);
        }
        prAuto();

        function prSlide() {
            if(curIndex < boardPrLiTotal-1) {
                curIndex++;
            } else {
                curIndex = 0;
            }
            $boardPrLi.removeClass('boardOn').eq(curIndex).addClass('boardOn');
        }

        $boardPrLi.hover(function() {
            clearInterval(timer);
        }, function() {
            prAuto();
        });
    }
} // boardGallery END();



/*-------------------------------------------------------------------
    main_recommend
-------------------------------------------------------------------*/
function recommGallery() {
    var $recommSlide = $('.recommend_slide');
    var $recommSlideLi = $recommSlide.find('.recommend_slide_list');
    var $recommBtn = $('.recommend_nav .comm_nav_arrow');
    var recommSlideLiW;
    var recommSlideShow = 0;
    var curIndex = 0;
    
    $(window).on('resize', function() {
        recommSlideLiW = Math.floor($recommSlideLi.innerWidth());
        if(wW > 767) {
            recommSlideShow = 0;
        } else {
            recommSlideShow = 1;
        }
        $recommSlide.css({left: (-recommSlideLiW * curIndex) + 'px'});
    })

    
    $recommBtn.on('click', 'a', function() {
        if($(this).hasClass('comm_next')) {
            if(curIndex < recommSlideShow) {
                curIndex++;
            }
        } else {
            if(curIndex > 0) {
                curIndex--;
            }
        }
        $recommSlide.animate({left: ((-recommSlideLiW) * curIndex) + 'px'}, 600);
    });
} // recommGallery() END