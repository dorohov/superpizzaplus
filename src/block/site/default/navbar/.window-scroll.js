var topPos = $(document).scrollTop();		
var snb = $('.navbar-site.scroll');	

if(snb.hasClass('opacity')) {
	if(topPos <= 200) {
		snb.removeClass('opacity');
	}
} else {
	if(topPos > 200) {
		snb.addClass('opacity');
	}
}	
if(snb.hasClass('fixed')) {
	if(topPos <= 400) {
		snb.removeClass('fixed');
	}
} else {
	if(topPos > 400) {
		snb.addClass('fixed'); 
	}
} 
if(snb.hasClass('scroll-navbar')) {
	if(topPos <= 500) {
		snb.removeClass('scroll-navbar');
	} 
} else {
	if(topPos > 500) {
		snb.addClass('scroll-navbar');
	} 
}