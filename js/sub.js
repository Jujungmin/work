// const
var wH; // window height

/*-------------------------------------------------------------------
    sub1.html
    sub2.html
    sub4.html
    sub5.html
-------------------------------------------------------------------*/


$(document).ready(function() {
    /* sub1.html */
    philoWrap();
   
    /* sub4.html */
    commuWrap();

    /* sub5.html */
    shopGallery();

}); // END



/*-------------------------------------------------------------------
    sub1.html
-------------------------------------------------------------------*/
function philoWrap() {
    var $philoContainer = $('.philo_container');
    var $philoSection = $('.philo_section');
    var $scrollDown = $('.philo_container .scroll_down > a');
    var $philoBtn = $('.philo_nav_btn');
    var speed = 1000;
    /* 초기화 */
    $philoSection.eq(0).css({top: 0});
    $philoBtn.eq(0).addClass('philoBtn');
    
    $(window).on('resize', function() {
        wH = $(window).height();
        philoResize();
    }).trigger('resize')
    
    // resize 시 현재 보여지는 section 고정.
    function philoResize() {
        var philoT = (-1) * philoIdx * wH;
        // $('.--full_height_scroll').css({top: philoT, height: wH});
        $('.--full_height_scroll').css({height: wH});
        $philoSection.css({top: philoT, height: wH});
    }

    var animating = false;
    var philoTotal = $philoSection.length;
    var philoIdx = 0; // 버튼 순서
    $('html .sub1').on('mousewheel DOMMouseScroll', function(event) {
        if(!animating) {
            animating = true;
            var sectionTop = $philoSection.offset().top;
            if(event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // console.log('up');
                if(0 < philoIdx) { // 더이상 up 스크롤 방지
                    if($('#footer').hasClass('footerFixed')) {
                        $('#footer').removeClass('footerFixed');
                    } else {
                        philoIdx--;
                        sectionTop += wH;
                    }
                }
            } else {
                // console.log('down');
                if(philoIdx < (philoTotal - 1)) { // 0 1 2 더이상스크롤방지
                    philoIdx++;
                    sectionTop -= wH;
                } else {
                    $('#footer').addClass('footerFixed');
                }
            }
        }
        $philoBtn.removeClass('philoBtn').eq(philoIdx).addClass('philoBtn');
        $philoSection.animate({top: sectionTop}, speed, function() {
            animating = false;
        });
    });
    
    
    $philoBtn.on('click', 'a', function() {
        philoIdx = $(this).parent('li').index();
        $philoBtn.removeClass('philoBtn').eq(philoIdx).addClass('philoBtn');
        philoT = (-1) * philoIdx * wH;
        $philoSection.animate({top: philoT}, speed);
        $('#footer.footerFixed').removeClass('footerFixed');
        return false;
    });
    $scrollDown.on('click', function() {
        philoIdx++;
        console.log(philoIdx)
        philoT = (-1) * philoIdx * wH;
        $philoSection.animate({top: philoT}, speed);
        $philoBtn.removeClass('philoBtn').eq(philoIdx).addClass('philoBtn');
        return false;
    });
} //philoWrap() END



/*-------------------------------------------------------------------
    sub2.html
-------------------------------------------------------------------*/
$('.sub2').on('resize', sub2Skroll);

function sub2Skroll() {
    if ($(window).width() < 1024) {
        skrollr.init().destroy();
    } else {
        skrollr.init({
        smoothScrolling: false,
        forceHeight: false
        });
    }
}



/*-------------------------------------------------------------------
    sub4.html
-------------------------------------------------------------------*/
function commuWrap() {
    // 초기 설정.
    $('.form_kit_wrap').addClass('formOn');
   $('.form_kit_btn').find('a').addClass('formTitle');
   
   $('.form_btn').on('click', 'a', function() {
        var commuFormTop = $('.community_form_title').offset().top - $('#header').height();
        $('html, .sub4').animate({scrollTop : commuFormTop}, 'slow'); 

        if($(this).parent().hasClass('form_kit_btn')) {
            $('.form_kit_wrap').addClass('formOn');
            $('.form_academy_wrap').removeClass('formOn');
        } else {
            $('.form_academy_wrap').addClass('formOn');
            $('.form_kit_wrap').removeClass('formOn')
        }

        $('.form_btn').find('a').removeClass('formTitle');
        $(this).addClass('formTitle');

        // form 초기화.
        $('input').val('');
        $('input[type="radio"], input[type="checkbox"]').prop('checked', false);
        $('.requiredOk').removeClass('requiredOk');
        // .required_box_apply 초기화
        if($('.formOn .required_box_apply').css('display') === 'block') {
            $('.required_box_apply').css({display: 'none'})
        }
        return false;
    });

    var $requiredBox = $('.required_box');
    var flag = false;
    var mobileNum = '';
    
    // name[required]
    var $userName01 = $('#name01');
    var $userName02 = $('#name02');
    // ㄱㄴㄷ..형식 불가능, 띄어쓰기 불가능.
    var regexName = /^[가-힣]+$/;

    // mobile[required]
    var $userMobile01 = $('#mobile01');
    var $userMobile02 = $('#mobile02');
    // 숫자만 가능, 하이픈 가능.
    var regexMobile = /(^02.{0}|^01.{1}|[0-9]{3}?)-?([0-9]+)-?([0-9]{4})/;

    // form_it_wrap :: email[required]
    var $userEmail01 = $('#email01');
    var $userEmail02 = $('#email02');
    var regexEmail = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;

    var $userMessage01 = $('#message01');

    // form_it_wrap :: address[required]
    var $userAddress = $('.address');
    // ㄱㄴ.., 한글, 영어(대소문자), 숫자, 특수문자 가능.
    var regexAddress = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|~!@\#$%<>^&*\()-=+_\s]+$/;

    // form_academy_ wrap :: date[required]
    var $userDate = $('#datepicker');
    // 숫자, 공백 하이픈 가능.
    var regexDate = /^[0-9 \-]+$/; 

    // form_academy_ wrap :: age[required]
    var $userAge = $('input[name="age"]');
    // form_academy_ wrap :: text[required]
    var $userOpinion = $('#opinion');
    // 한글, 영어(대소문자), 숫자, 툭수문자 가능.
    var regexOpinion = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|[~!@#$%^&*()_+|<>?:{}]+$/;
    
    // form_kit_wrap :: name, mobile, email 확인.
    // form_academy_wrap :: name, mobile, date, opinion 확인.
    function checkForm(user, regex) {
        if(!user.val() || !regex.test(user.val())) {
            user.next($requiredBox).addClass('requiredOk');
            user.focus();
            return false;
        }
        user.next($requiredBox).removeClass('requiredOk');
        
        mobileNum = $('.formOn .user_mobile').val().replace(regexMobile,'$1-$2-$3');
        $('.formOn .user_mobile').val(mobileNum);
       return false;
    }

    // form_kit_wrap :: address 확인.
    function checkAddress(addr,regex) {
        for(var i = 0; i < addr.length; i++) {
            var allAddr = $(addr[i]);
            if(!allAddr.val() || !regex.test(allAddr.val())) {
                allAddr.next($requiredBox).addClass('requiredOk');
                allAddr.next().next().find($requiredBox).addClass('requiredOk');
            } else {
                allAddr.next($requiredBox).removeClass('requiredOk');
                allAddr.next().next().find($requiredBox).removeClass('requiredOk');
            }
        }
        return false;
    }

    // form_kit_wrap :: checkbox 확인.
    // form_academy_wrap :: checkbox 확인.
    function checkedBox(userCheck) {
        if(!$(userCheck).prop('checked')) {
            $(userCheck).parent().find($requiredBox).addClass('requiredOk');
        } else {
            $(userCheck).parent().find($requiredBox).removeClass('requiredOk');
        }
        return false;
    }
    
    // form_kit_wrap :: .required_box_apply 확인.
    // form_academy_wrap :: .required_box_apply 확인.
    function submitCheck(requiredBoxApply) {
        if($('.formOn .required_box').not('.required_box_apply').hasClass('requiredOk')) {
            $(requiredBoxApply).css({display: 'block'});
        } else {
            $(requiredBoxApply).css({display: 'none'});
        }
        return false;
    }

    $('#apply_post01').on('click', function() {
        flag = true;
        if(flag) {
            checkAddress($userAddress, regexAddress)
            || checkForm($userEmail01,regexEmail)
            || checkForm($userMobile01,regexMobile)
            || checkForm($userName01,regexName) 
            || checkedBox('#allcheck01');
        }
        submitCheck('#required01');
    });
            
    $('#apply_post02').on('click', function() {
        flag = true;
        if(flag) {
            checkForm($userOpinion, regexOpinion)
            || checkForm($userDate, regexDate)
            || checkForm($userMobile02,regexMobile)
            || checkForm($userName02,regexName)
            || checkedBox('#allcheck02');
        }
        
        // radio check 확인.
        if(flag) {
            if(!$userAge.is(':checked')) {
                $userAge.closest('fieldset').next($requiredBox).addClass('requiredOk');
            } else {
                console.log('check')
                $userAge.closest('fieldset').next($requiredBox).removeClass('requiredOk');
            }
        }
        submitCheck('#required02');
    });
} // commuWrap() END



/*-------------------------------------------------------------------
    sub5.html
-------------------------------------------------------------------*/
function shopGallery() {
    var $shopSlide = $('.shop_slide'); // 높이고정
    var $shopSlideLi = $('.shop_slide_item');
    var shopSlideTotal = $shopSlideLi.length; // 6
    var currentIdx = 0; // 현재슬라이드
    var shopSlideW; // 이미지 넓이
    var shopSlideH; // 이미지 높이
    var shopInterval;
    var speed = 600;
    var $shopNavArrow = $('.shop_nav_arrow');
    $(window).resize(function() {
        shopSetImg();
    }).trigger('resize');  
    
    $shopNavArrow.on({
        mouseenter: function() {
            clearInterval(shopInterval);
        },
        mouseleave: function() {
            shopAuto();
        }
    },'a');
    
    $shopNavArrow.find('.shop_nav_next').click(shopNextSlide)
    $shopNavArrow.find('.shop_nav_prev').click(shopPrevSlide)
    
    function shopSetImg() {
        shopSlideH = Math.floor($shopSlideLi.find('img').height());
        shopSlideW = Math.floor($shopSlideLi.width());
        $('.shop_gallery').css({height: shopSlideH});
        for(var i = 0; i < shopSlideTotal; i++) {
            if(i === currentIdx) {
                $shopSlideLi.eq(i).css({left: 0});
            } else {
                $shopSlideLi.eq(i).css({left: shopSlideW});
            }
        }
        return false;
    }

    function shopAuto() {
        shopInterval = setInterval(shopNextSlide, 7500);
    }
    shopAuto();

    function shopNextSlide() {
        $shopSlideLi.eq(currentIdx).stop().animate({left: -shopSlideW}, speed, function() {
            $(this).css({left: shopSlideW});
        });
        if(currentIdx < (shopSlideTotal - 1)) {
            currentIdx++;
        } else {
            currentIdx = 0;
        }
        $shopSlideLi.eq(currentIdx).stop().animate({left: 0}, speed);
    }

    function shopPrevSlide() {
        $shopSlideLi.eq(currentIdx).stop().animate({left: shopSlideW}, speed);
        if(currentIdx === 0) {
            currentIdx = (shopSlideTotal - 1);
        } else {
            currentIdx--;
        }
        $shopSlideLi.eq(currentIdx).css({left: -shopSlideW}).stop().animate({left: 0}, speed)
    }

} // shopGallery() END


