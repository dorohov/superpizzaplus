'use strict';
$(function() { 
	var calc = $('[data-slider-slick="slick-calc"]');		
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></button>';
	
	calc.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 567,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 