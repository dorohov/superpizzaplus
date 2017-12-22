'use strict';

$(function() {
	
	var yandex_map_div_id = 'yandex-map';
	//var CMS__TPL_PATH = '/bitrix/templates/azbn7theme';
	var CMS__TPL_PATH = '';
	
	var yandex_map = $('#' + yandex_map_div_id);
	
	if(yandex_map.length) {
		
			var 
				map_area = yandex_map, 
				map_area_center = {		
					center: [52.971073, 36.052447], // расположение района
					zoom: 13,
					controls: ['smallMapDefaultSet']
				},
				map_area_block;
			var initYandexMapGlonass = function() {
				
				var map_area_block = new ymaps.Map(yandex_map_div_id, map_area_center, {
					//searchControlProvider: 'yandex#search'
				});				
				//$('.azbn__contacts__item').each(function(index){
					
					var block = $(this);
					var block_data = JSON.parse(block.attr('data-contact') || '{}');
					
					//var polygonLayout_isActive = (index > 0) ? 'is--active' : '';
					var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="contacts-panel__location"><svg class="icon-svg icon-map-location" role="img"><use xlink:href="' + CMS__TPL_PATH + '/img/svg/sprite.svg#map-location"></use></svg></div>');		
					var map_placemark = new ymaps.Placemark([52.969883, 36.045731], {
						//hintContent: '' 
					}, {
						iconLayout: polygonLayout,
						iconImageSize: [42, 52],
						iconImageOffset: [-21, -52]
					});					
					map_area_block
						.geoObjects
							.add(map_placemark)
					;
					
				//});
			}
			
			if(map_area.length) {
				ymaps.ready(initYandexMapGlonass);
			}
		
	}
	
});