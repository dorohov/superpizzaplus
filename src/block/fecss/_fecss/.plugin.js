function fecss_ScreenJS() {
	
	var ctrl = this;
	
	ctrl.screen = {
		w : 0,
		h : 0,
		type : 'xs',//sm,md,lg
		orientation : 'portrait',//landscape
	};
	
	ctrl.__resizefunctions = {
		'xs' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'sm' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'md' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'md-h' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'lg' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'xl' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'device' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'deviceLg' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'pc' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'screenLG' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
		'xxl' : {
			'default' : [],
			'portrait' : [],
			'landscape' : [],
		},
	};
	
	ctrl.isXS = function() {
		return (ctrl.screen.w < 768);
	};
	
	ctrl.isSM = function() {
		return (ctrl.screen.w > 767 && ctrl.screen.w < 1025);
	};
	
	ctrl.isMD = function() {
		return (ctrl.screen.w > 1024 && ctrl.screen.w < 1200);
	};

	ctrl.isMDH = function() {
		return (ctrl.screen.w > 1024 && ctrl.screen.w < 1281  && ctrl.screen.h > 909);
	};
	
	ctrl.deviceLg = function() {
		return (ctrl.screen.w < 1200);
	};
	ctrl.isLG = function() {
		return (ctrl.screen.w > 1199  && ctrl.screen.w < 1400);
	};
	ctrl.isXL = function() {
		return (ctrl.screen.w > 1399  && ctrl.screen.w < 1681);
	};
	ctrl.isXXL = function() {
		return (ctrl.screen.w > 1680);
	};
	ctrl.device = function() {
		return (ctrl.screen.w < 1010);
	};
	ctrl.screenLG = function() {
		return (ctrl.screen.w > 1199);
	};
	ctrl.pc = function() {
		return (ctrl.screen.w > 1024);
	};
	
	ctrl.screenIs = function() {
		var result = 'noname';
		if(ctrl.isXS()) {
			result = 'xs';
		} else
		if(ctrl.isSM()) {
			result = 'sm';
		} else
		if(ctrl.isMD()) {
			result = 'md';
		} else
		if(ctrl.isMDH()) {
			result = 'md-h';
		} else
		if(ctrl.isLG()) {
			result = 'lg';
		}else
		if(ctrl.isXL()) {
			result = 'xl';
		}else
		if(ctrl.isXXL()) {
			result = 'xxl';
		}else
		if(ctrl.device()) {
			result = 'device';
		}else
		if(ctrl.pc()) {
			result = 'pc';
		}else
		if(ctrl.deviceLg()) {
			result = 'deviceLg';
		}
		return result;
	};
	
	
	
	ctrl.isPortrait = function() {
		return (ctrl.screen.h > ctrl.screen.w);
	};
	
	ctrl.isLandscape = function() {
		return (ctrl.screen.w > ctrl.screen.h);
	};
	
	ctrl.orientationIs = function() {
		var result = 'noname';
		if(ctrl.isPortrait()) {
			result = 'portrait';
		} else
		if(ctrl.isLandscape()) {
			result = 'landscape';
		}
		return result;
	};
	
	ctrl.is = function(str) {
		return (str == ctrl.screenIs() || str == ctrl.orientationIs());
	};
	
	ctrl.onResize = function(scr, fnc) {
		if(scr.type) {
			var type = ctrl.__resizefunctions[scr.type];
			
			if(scr.orientation) {
				type[scr.orientation].push(fnc);
			} else {
				type.default.push(fnc);
			}
		}
	}
	
	ctrl.resizeCall = function(scr) {
		if(scr.type) {
			if(ctrl.__resizefunctions[scr.type].default) {
				for(var i = 0; i < ctrl.__resizefunctions[scr.type].default.length; i++) {
					var fnc = ctrl.__resizefunctions[scr.type].default[i];
					fnc(scr);
				}
			}
			if(ctrl.__resizefunctions[scr.type][scr.orientation]) {
				for(var i = 0; i < ctrl.__resizefunctions[scr.type][scr.orientation].length; i++) {
					var fnc = ctrl.__resizefunctions[scr.type][scr.orientation][i];
					fnc(scr);
				}
			}
		}
	}
	
	ctrl.setScreen = function() {
		ctrl.screen.w = $(window).outerWidth(true);
		ctrl.screen.h = $(window).outerHeight(true);
		ctrl.screen.type = ctrl.screenIs();
		ctrl.screen.orientation = ctrl.orientationIs();
		
		ctrl.resizeCall(ctrl.screen);
		console.log(ctrl.screen);
		
		return ctrl.screen;
	};
	
};

var screenJS = new fecss_ScreenJS();

$(window).on('resize', function(){
	screenJS.setScreen();
});

/*

screenJS.is(xs/sm/md/lg/portrait/landscape) - да/нет

screenJS.isXS() - да/нет
screenJS.device() - да/нет
screenJS.isSM() - да/нет
screenJS.isMD() - да/нет
screenJS.isLG() - да/нет

screenJS.screenIs() - вернет xs/sm/md/lg

screenJS.isPortrait() - да/нет
screenJS.isLandscape() - да/нет

screenJS.orientationIs() - вернет portrait/landscape

//добавляет функцию, которая будет работать при смене на нужный размер и ориентацию экрана. Свойство type (xs/sm/md/lg) - обязательное
screenJS.onResize({type : 'lg',}, function(new_screen){
	
});
screenJS.onResize({type : 'xs', orientation : 'portrait'}, function(new_screen){
	
});


*/






/*
Создание события на смену класса у элемента
*/

(function($){
	
	var originalAddClassMethod = jQuery.fn.addClass;
	var originalRemoveClassMethod = jQuery.fn.removeClass;
	var originalToggleClassMethod = jQuery.fn.toggleClass;
	
	$.fn.addClass = function(){
		var result = originalAddClassMethod.apply(this, arguments);
		$(this).trigger('changeClass', ['add']);
		//console.log('changeClass add');
		return result;
	}
	
	$.fn.removeClass = function(){
		var result = originalRemoveClassMethod.apply(this, arguments);
		$(this).trigger('changeClass', ['remove']);
		//console.log('changeClass remove');
		return result;
	}
	
	$.fn.toggleClass = function(){
		var result = originalToggleClassMethod.apply(this, arguments);
		$(this).trigger('changeClass', ['toggle']);
		//console.log('changeClass toggle');
		return result;
	}
	
})(jQuery);

/*
/Создание события на смену класса у элемента
*/