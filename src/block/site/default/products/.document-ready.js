$(document.body).on('azbn.setActive', 'svg#azbn-svg .products-pizza__elem-group', {}, function(event){
	event.preventDefault();
	
	//$('svg#azbn-svg .products-pizza__elem-group').removeClass('is--visible');
	
	var block = $(this);
	var area = block.attr('data-id') || 0;
	block.addClass('is--visible');
	
	//$('.basket-delivery__check-order-item.is--pizza-calc').removeClass('is--active');
	$('.basket-delivery__check-order-item.is--pizza-calc[data-id="' + area + '"]').addClass('is--active');
	
});
$(document.body).on('azbn.setRemove', 'svg#azbn-svg .products-pizza__elem-group', {}, function(event){
	event.preventDefault();
	
	//$('svg#azbn-svg .products-pizza__elem-group').removeClass('is--visible');
	
	var block = $(this);
	var area = block.attr('data-id') || 0;
	block.removeClass('is--visible');
	
	//$('.basket-delivery__check-order-item.is--pizza-calc').removeClass('is--active');
	$('.basket-delivery__check-order-item.is--pizza-calc[data-id="' + area + '"]').removeClass('is--active');
	
}); 


/*$(document.body).on('click.azbn', 'svg#azbn-svg .products-pizza__elem-group', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	btn.closest('.theme-block').trigger('azbn.setActive');
	
});*/

$(document.body).on('click.azbn', '.basket-delivery__check-order-item.is--pizza-calc .is--plus.azbn7__cart__add__btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var block = btn.closest('.basket-delivery__check-order-item.is--pizza-calc');
	var area = block.attr('data-id') || 0;
	
	$('svg#azbn-svg .products-pizza__elem-group[data-id="' + area + '"]').trigger('azbn.setActive');
	
	/*block.find('li .desc').remove().empty();
	
	var li = btn.parent();
	$('svg#azbn-svg .theme-block[data-area-id="' + area + '"] .desc-cont .cont .desc').clone(true).appendTo(li);	*/
});
$(document.body).on('click.azbn', '.basket-delivery__check-order-item.is--pizza-calc .is--minus.azbn7__cart__add__btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var block = btn.closest('.basket-delivery__check-order-item.is--pizza-calc');
	var area = block.attr('data-id') || 0;
	
	$('svg#azbn-svg .products-pizza__elem-group[data-id="' + area + '"]').trigger('azbn.setRemove');
	
	/*block.find('li .desc').remove().empty();
	
	var li = btn.parent();
	$('svg#azbn-svg .theme-block[data-area-id="' + area + '"] .desc-cont .cont .desc').clone(true).appendTo(li);	*/
});