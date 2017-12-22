'use strict';
$(function() {
	$('.owl-reviews').owlCarousel({
		//navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#owl-next"></use></svg> '],
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		items:1,
		margin: 30,
		loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				nav: false,
			},
			768 : {
				nav: true,
			}
		}
	});
});