/*
$(document.body).on('azbn.setActive', 'svg#azbn-svg .products-pizza__elem-group', {}, function(event){
	event.preventDefault();
	
	//$('svg#azbn-svg .products-pizza__elem-group').removeClass('is--visible');
	
	var block = $(this);
	var area = block.attr('data-id') || 0;
	//block.addClass('is--visible');
	
	//$('.basket-delivery__check-order-item.is--pizza-calc').removeClass('is--active');
	//$('.basket-delivery__check-order-item.is--pizza-calc[data-id="' + area + '"]').addClass('is--active');
	
});
$(document.body).on('azbn.setRemove', 'svg#azbn-svg .products-pizza__elem-group', {}, function(event){
	event.preventDefault();
	
	//$('svg#azbn-svg .products-pizza__elem-group').removeClass('is--visible');
	
	var block = $(this);
	var area = block.attr('data-id') || 0;
	//block.removeClass('is--visible');
	
	//$('.basket-delivery__check-order-item.is--pizza-calc').removeClass('is--active');
	//$('.basket-delivery__check-order-item.is--pizza-calc[data-id="' + area + '"]').removeClass('is--active');
	
}); 

$(document.body).on('click.azbn', '.basket-delivery__check-order-item.is--pizza-calc .is--plus.__amount_btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var block = btn.closest('.basket-delivery__check-order-item.is--pizza-calc');
	var area = block.attr('data-id') || 0;
	
	//$('svg#azbn-svg .products-pizza__elem-group[data-id="' + area + '"]').trigger('azbn.setActive');
	
});
$(document.body).on('click.azbn', '.basket-delivery__check-order-item.is--pizza-calc .is--minus.__amount_btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var block = btn.closest('.basket-delivery__check-order-item.is--pizza-calc');
	var area = block.attr('data-id') || 0;
	
	//$('svg#azbn-svg .products-pizza__elem-group[data-id="' + area + '"]').trigger('azbn.setRemove');
	
});
*/
