/*function initMap() {     
	var coordMapOfficeOne = {lat: 55.6640, lng: 37.7514},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#ebe3cd"}]},{"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#dfd2ae"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#dfd2ae"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#a79893"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#a79893"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			//styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-google'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
		iconOfficeOne = '/wp-content/themes/azbn7theme/img/default/map-placeholder.png',
		//iconOfficeOne = '/img/default/map-placeholder.png',
		//iconOfficeOne = '/img/default/map-placeholder.png',
		
	    iconCoordOfficeOne = {lat: 55.663960, lng: 37.751826}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		});

        $(window).on('resize', function() {
			google.maps.event.trigger(mapOfficeOne, "resize");
			mapOfficeOne.setCenter(coordMapOfficeOne);
        });
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});*/


function initMap() {
 	
	
	var map_container_div_id = 'map-google';
	var cont = $('#' + map_container_div_id);
	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';
	
	if(cont.length) {
		
		var map_data = JSON.parse(cont.attr('data-map') || '{}');
		
		var coordMapOfficeOne = map_data.center;
		if(screenJS.device()) {			
			coordMapOfficeOne = map_data.center;
		};
		if(screenJS.pc()) {	
			coordMapOfficeOne = map_data.center;
		};
		var zoomMapOfficeOne = map_data.zoom,
			styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
			optionsMapOfficeOne = {
				zoom: zoomMapOfficeOne, 
				center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]),
			},
			idOfficeOne = document.getElementById(map_container_div_id),
			mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),	
			iconOfficeOne = '/wp-content/themes/azbn7theme/img/default/map-placeholder.png';
			//iconOfficeOne = '/img/default/icon-map.png',
			/*iconOfficeOne = {		
				path: "M19.3,54.8l15.3-22.2c5.8-7.7,4.9-20.3-1.8-27C29.2,2,24.4,0,19.2,0C14.1,0,9.3,2,5.6,5.6 c-6.7,6.7-7.5,19.3-1.8,27L19.3,54.8z M19.5,12c3.9,0,7,3.1,7,7s-3.1,7-7,7c-3.9,0-7-3.1-7-7S15.6,12,19.5,12z", 
				fillColor: '#17906c',
				strokeColor: '#000000',
				fillOpacity: 1,
				anchor: new google.maps.Point(20,55),
				strokeWeight: 0,
				scale: 1,
			};		*/	 
			if(map_data.placemarks.length) {
				for(var i = 0; i < map_data.placemarks.length; i++) {
					var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
					OfficeOne = new google.maps.Marker({
						position: iconCoordOfficeOne,
						map: mapOfficeOne,
						icon: iconOfficeOne,
					});
				}
			}
			
			
			//$(window).on('resize', function() {
			//	google.maps.event.trigger(mapOfficeOne, "resize");
			//	mapOfficeOne.setCenter(OfficeOne);
			//});
			
			$(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
				event.preventDefault();
				
				var btn = $(this);
				var coord = btn.attr('data-coord');
				var coord_arr = coord.split(',');
				console.dir(coord_arr);
				mapOfficeOne.setCenter({
					lat : parseFloat((coord_arr[0] || '').trim()),
					lng : parseFloat((coord_arr[1] || '').trim()),
				});
				
			});
			
		
	}
	
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');	  
	});  
});