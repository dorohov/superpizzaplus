var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
/*$('.navbar-category__nav .navbar-category__link[href="'+url+'"]').addClass('is--active'); 
$('.navbar__nav').on('click', '.navbar__nav-dropdown a[data-toggle="tab-dropdown"]', function(e) {
    e.preventDefault();
    e.stopPropagation();
});*/

//if(screenJS.deviceLg()) {
	//$('.navbar-category__link.dropdown-toggle').removeAttr('data-toggle');
	$('.navbar__town-link').removeAttr('data-toggle');
	$('.navbar__town-link').on('click', function(e) {
		$(this).toggleClass('is--active');
		$(".navbar__town-menu").toggleClass('is--active');
	});
//} else {
	//$('.navbar-category__link.dropdown-toggle').attr('data-toggle', 'dropdown');
	//$('.navbar__town-link').attr('data-toggle', 'dropdown');
//}