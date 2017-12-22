$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		scrollOffset: 200
	}
); 
$('[data-plugin="datepicker"]').datepicker({});
$(".form__control[data-plugin='timepicki']").timepicki({
	start_time: ["10", "00", "AM"],
	show_meridian:false,
	min_hour_value:10,
	max_hour_value:18,
	step_size_minutes:10,
	overflow_minutes:true,
	add:true,
	increase_direction:'up',
	disable_keyboard_mobile: true
});
$('button[data-heading]').on('click', function(){
	var heading = $(this).attr("data-heading")
	$(".form__control.is--products").attr("value", heading);
});
$('.form__radio-input').on('click', function(){
	//var heading = $(this).attr("data-heading")checkbox
	$(".form__datetime.is--radio").toggleClass("is--active");
});
//$(".form__control.is--products").attr("value", "1");