
$(document.body).on('fecss.default',	null, {}, function(event) {
	console.log('body trigger:fecss.default');
});

$(document.body).on('fecss.init',		null, {}, function(event) {
	console.log('body trigger:fecss.init');
	
	var t = new Date().getTime();
	$(document.body).attr('data-created_at', t);
	
});

$(document.body).on('fecss.window.unload',		null, {}, function(event, _event) {
	console.log('body trigger:fecss.window.unload: ' + JSON.stringify(_event));
});

$(document.body).on('fecss.ajax.success',		null, {}, function(event) {
	console.log('body trigger:fecss.ajax.success');
});

$(document.body).on('fecss.keydown',		null, {}, function(event, _event) {
	console.log('body trigger:fecss.keydown: ' + JSON.stringify(_event));
});

$(document.body).on('DOMSubtreeModified',		null, {}, function(event, _event) {
	//console.log('body trigger:DOMSubtreeModified: ' + JSON.stringify(_event));
});

$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
	//event.preventDefault();
	
	var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
	//console.log('body trigger:wheel: ' + diff);
	
});
