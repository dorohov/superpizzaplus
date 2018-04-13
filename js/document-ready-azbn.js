'use strict';

(function($){
	
	
	
	var __body = $(document.body);
	
	
	
	var Azbn7__API__Request = function(method, data, cb) {
		
		var ctrl = this;
		
		console.dir(data);
		
		data.method = method || data.method;
		
		$.ajax({
			url : '/api/',
			type : 'POST',
			dataType : 'json',
			data : data,
			success : cb,
			error : function(jqXHR, textStatus, errorThrown){
				console.warn(textStatus);
			},
		});
		
		return ctrl;
		
	}
	
	
	
	var CartBuilder = function() {
		
		var ctrl = this;
		
		ctrl.get = function(cb) {
			
			var method = 'cart/get';
			
			new Azbn7__API__Request(method, {
				
			}, function(resp){
				
				if(resp.response && resp.response.cart && resp.response.cart.positions) {
					__body.find('.azbn7__cart__positions').html(resp.response.cart.positions);
				}
				
				ctrl.enableOrderBlocks(null, resp);
				
				if(cb && typeof cb == 'function') {
					cb(resp);
				}
				
			});
			
		}
		
		ctrl.add = function(product_id, mod_id, amount, cb) {
			
			var method = 'cart/add';
			
			new Azbn7__API__Request(method, {
				product : product_id,
				mod : mod_id,
				amount : amount,
			}, function(resp){
				
				if(resp.response && resp.response.cart && resp.response.cart.positions) {
					__body.find('.azbn7__cart__positions').html(resp.response.cart.positions);
				}
				
				ctrl.enableOrderBlocks(null, resp);
				
				cb(resp);
				
			});
			
		}
		
		ctrl.change = function(product_id, mod_id, amount, cb) {
			
			var method = 'cart/change';
			
			new Azbn7__API__Request(method, {
				product : product_id,
				mod : mod_id,
				amount : amount,
			}, function(resp){
				
				if(resp.response && resp.response.cart && resp.response.cart.positions) {
					__body.find('.azbn7__cart__positions').html(resp.response.cart.positions);
				}
				
				ctrl.enableOrderBlocks(null, resp);
				
				cb(resp);
				
			});
			
		}
		
		ctrl.enableOrderBlocks = function(enable, resp) {
			
			var blocks = __body.find('.azbn7__cart__order-block');
			
			if(enable || (resp && resp.response && resp.response.cart && resp.response.cart.sum && resp.response.cart.sum > 0)) {
				
				blocks.show('fast');
				
			} else {
				
				blocks.hide();
				
			}
			
		}
		
		return ctrl;
		
	}
	
	
	
	var Cart = new CartBuilder();
	
	
	
	$(function(){
		
		
		Cart.get();
		
		
		__body.on('click.azbn7', '.azbn7__select-region-btn', null, function(event){
			event.preventDefault();
			
			var btn = $(this);
			var region_code = btn.attr('data-region-code') || 'orel';
			
			var method = 'regions/change';
			
			new Azbn7__API__Request(method, {
				region_code : region_code,
			}, function(resp){
				
				console.log(resp);
				
				window.location.href = '/';
				
			});
			
		});
		
		
		
		__body.on('submit', '.azbn7__form__api', {}, function(event){
			event.preventDefault();
			
			var form = $(this);
			var _form = form.clone(true);
			
			var _method = form.attr('data-method') || 'formsave'
			
			_form
				.append($('<input/>', {
					type : 'hidden',
					name : 'method',
					value : _method,
				}))
			;
			
			$.post('/api/', _form.serialize(), function(data){
				
				data = JSON.parse(data);
				
				_form.empty().remove();
				form.trigger('reset');
				
				form.closest('.modal').modal('hide');
				
				//$('.azbn__form__api__result').html(data.response.message.text);
				
				$('#modal-message').modal();
				
			});
			
		});
		
		
		
		(function(){
			
			var __pb = __body.find('.azbn7__pizza-builder');
			
			if(__pb.length) {
				
				PizzaBuilderInit(__body, __pb, __pizza_builder_sections || [], __pizza_builder_catalog || []);
				
				/*
				__body.on('submit.azbn7', '.azbn7__pizza-builder-form', null, function(event){
					event.preventDefault();
					
					var form = $(this);
					var _form = form.clone(true);
					//_form.find('input[value="0"]').remove();
					
					console.log(_form.serialize());
					
				});
				*/
				
			}
			
		})();
		
		
		
		(function(){
			
			var __ns = 'azbn7';
			var __ns_ = '.' + __ns;
			
			__body.on('click.' + __ns, __ns_ + '__product__amount .__btn', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var cont = btn.closest(__ns_ + '__product__amount');
				var value = cont.find('.__value');
				
				var val = parseInt(value.val() || 0);
				var amount = parseInt(btn.attr('data-amount') || 1);
				var product_id = parseInt(cont.attr('data-product-id') || 0);
				
				val = val + amount;
				
				if(val < 0) {
					val = 0;
				}
				
				value.val(val);
				
			});
			
			__body.on('click.' + __ns, __ns_ + '__product__amount .__to-cart', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var cont = btn.closest(__ns_ + '__product__amount');
				var value = cont.find('.__value');
				
				var val = parseInt(value.val() || 0);
				var product_id = parseInt(cont.attr('data-product-id') || 0);
				var mod_id = parseInt(cont.attr('data-mod-id') || '');
				
				Cart.add(product_id, mod_id, val, function(resp){
					
					console.dir(resp);
					
					value.val(0);
					
				});
				
			});



			__body.on('click.' + __ns, __ns_ + '__cart__item .__btn', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var cont = btn.closest(__ns_ + '__cart__item');
				var value = cont.find('.__value');
				
				var val = parseInt(value.val() || 0);
				var amount = parseInt(btn.attr('data-amount') || 1);
				var product_id = parseInt(cont.attr('data-product-id') || 0);
				var mod_id = parseInt(cont.attr('data-mod-id') || '');

				var method = 'cart/change';

				Cart.change(product_id, mod_id, amount, function(resp){
					
					val = val + amount;
					
					if(val < 0) {
						val = 0;
					}
					
					value.val(val);
					
					$('.azbn7__cart__positions__value').html(resp.response.cart.positions);
					$('.azbn7__cart__sum__value').html(resp.response.cart.sum);
					
					if(resp.response.cart && resp.response.cart.items && resp.response.cart.items[product_id] && resp.response.cart.items[product_id][mod_id]) {
						cont.find('.__pos__sum').html(resp.response.cart.items[product_id][mod_id]['sum']);
					}
					
					//Cart.enableOrderBlocks(null, resp);
					
				});
				
			});
			
			__body.on('click.' + __ns, __ns_ + '__cart__item .__btn_delete', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var cont = btn.closest(__ns_ + '__cart__item');
				
				var product_id = parseInt(cont.attr('data-product-id') || 0);
				var mod_id = parseInt(cont.attr('data-mod-id') || '');
				
				var method = 'cart/delete';

				new Azbn7__API__Request(method, {
					product : product_id,
					mod : mod_id,
				}, function(resp){
					
					console.log(resp);
					
					$('.azbn7__cart__positions__value').html(resp.response.cart.positions);
					$('.azbn7__cart__sum__value').html(resp.response.cart.sum);
					
					Cart.enableOrderBlocks(null, resp);
					
					cont
						.empty()
						.remove()
					;
					
				});
				
			});
			
			
			__body.on('click.' + __ns, __ns_ + '__variant-btn', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var value = btn.attr('data-variant-value') || '';
				var target = btn.attr('data-variant-target') || '';
				
				__body.find(__ns_ + '__variant-value[data-variant-target="' + target + '"]').val(value);
				
			});
			
			
			__body.on('click.' + __ns, __ns_ + '__to-cart-animation', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var trg = __body.find(__ns_ + '__cart__positions');
				
				var _clone = $('<div/>', {
					class : 'azbn7__in-cart-animation',
				});
				var _offset = btn.offset();
				var _offset2 = trg.eq(0).offset();
				var _pos2 = trg.eq(0).position();
				
				var btn_w = btn.outerWidth(true);
				
				_clone
					.css({
						left : _offset.left + (btn_w / 2),
						top : _offset.top - 0,
						//width : btn_w + 'px',
					})
					.appendTo(__body)
					.animate({
						opacity : 0,
						left : _offset2.left - 25,//$(window).outerWidth(true) - btn_w - 25,
						top : _offset2.top - 25,
						width : 21 + 'px',
						height : 21 + 'px',
					}, 777, function() {
						
						_clone
							.empty()
							.remove()
						;
						
					});
				;
				
			});
			
			
		})();
		
		
		
		
		
		
		
		/*
		
		
		
		*/
		
		
		
		
	});
	
})(jQuery);