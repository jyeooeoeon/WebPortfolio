// dot 메뉴
$(document).ready(function() {

	let dot1 = $('#dot1 > ul > li');
	let contents = $("#contents > div");
	let currentSlide =1;
	dot1.on('click', function(e) {
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		let section = contents.eq(index);
		let $offset = section.offset().top;

 //--------- project에서 페이지를 이동 후에 옆의 불릿을 클릭했을때 activity에서도 첫번째 부터 나오게 하기 위해서
		let currentSlide=1;
		goToSlide(currentSlide);
//-----------------------
		$('body, html').animate({scrollTop: $offset},400, "easeOutQuad");
	})

	$(window).on('load', function(){
		$('body, html').animate({scrollTop: 0},400, "easeOutQuad");
	})

	$(window).on('scroll', function () {
		let wScroll = $(this).scrollTop();

		if (wScroll >= contents.eq(0).offset().top) {
			dot1.removeClass('on');
			dot1.eq(0).addClass('on');
		}
		if (wScroll >= contents.eq(1).offset().top) {
			dot1.removeClass('on');
			dot1.eq(1).addClass('on');
		}
		if (wScroll >= contents.eq(2).offset().top) {
			dot1.removeClass('on');
			dot1.eq(2).addClass('on');
		}
		if (wScroll >= contents.eq(3).offset().top) {
			dot1.removeClass('on');
			dot1.eq(3).addClass('on');
		}
		if (wScroll >= contents.eq(4).offset().top) {
			dot1.removeClass('on');
			dot1.eq(4).addClass('on');
		}
	})

	setTimeout(function(){
		$('.slider__wrap').addClass('slider__wrap--hacked')
	}, 1000);
})
// end of document.ready

// 햄버거 메뉴
var main = function(){
	$('.fa-bars').click(function(){
		$('.nav-screen').animate({right:"0px"}, 200);
		$('body').animate({right:"285px"}, 200);
		this.css('display','none');

	})

	$('.fa-times').click(function(){
		$('.nav-screen').animate({right:"-285px"},200);
		$('body').animate({right:'0px'},200)
	}) // fa-times 끝

	$('.nav-links a').click(function(){
		$('.nav-screen').animate({right:"-285px"}, 200);
		$('body').animate({right:'0px'}, 200);
	})
}
$(document).ready(main);

//About me -> skillbar scroll & top button

window.onscroll=function(){
	calcFunction();
}
function calcFunction() {
	var bodyTop = document.body.scrollTop;
	var htmlTop = document.documentElement.scrollTop;
	var goTop = document.getElementById('goTop');

	if(bodyTop > 60 || htmlTop > 60) {
		$('.percent').each(function(){
			var data1 = $(this).attr('data-percent');
			var x = $(this).find('.skills');
			x.css({'width':data1, 'opacity':'1', 'transition':'width 0.5s ease'})
		});
		goTop.style.display = "block";
	}
	else if(bodyTop <= 10 || htmlTop <= 10){
		$('.percent').each(function(){
			var data2 = $(this).attr('data-min');
			var y = $(this).find('.skills');
			y.css({ 'width': data2, 'opacity':'1', 'transition':'width 0.5s ease'})
		});
		goTop.style.display = "none";
	}
}


// activity

function goToSlide(number){
	$('.slider__slide').removeClass('slider__slide--active');
	$('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}


$('.slider__next, .go-to-next').on('click', function(){
	var currentSlide = Number($('.slider__slide--active').data('slide'));
	var totalSlides = $('.slider__slide').length;
	currentSlide++;
	if(currentSlide > totalSlides){
		currentSlide=1;
	}
	goToSlide(currentSlide);
})




$(document).on('click','#moveDown',function(){
	$.fn.fullpage.moveSectionDown();
});





//부들부들 스크롤링 ( 오류 뜸 확인요망 )

//    $(function(){
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 700);
//                 return false;
//             }
//         }
//     });
// });
