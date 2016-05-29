var tools = ['home', 'gpa', 'finals', 'words', 'easybib'];
var windowHeight = window.innerHeight;

function lClickHandler(j) {
	return function(event) {
		$('.linkTD').css('backgroundColor', '');
		if (j > 1) _('l' + j).style.backgroundColor = '#C0C0C0';
		$.get('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.html', function(data) {
    		_('mainContent').innerHTML = data;
		});
		$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[j - 1] + "/" + tools[j - 1] + ".css'>");
		$.getScript('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.js');
	};
}

function setEvents() {
	for (var i = 1; i <= tools.length; i++) $('#l' + i).click(lClickHandler(i));
}

function load() {
	if (mobile()) {
		if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) viewport.setAttribute("content", "initial-scale=1.3, maximum-scale=1.3, user-scalable=no");
		else viewport.setAttribute("content", "initial-scale=1, maximum-scale=1, user-scalable=no");
	}
	setEvents();
	$.get('./tools/' + tools[0] + '/' + tools[0] + '.html', function(data) {
    	_('mainContent').innerHTML = data;
	});
	$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[0] + "/" + tools[0] + ".css'>");
	$.getScript('./tools/' + tools[0] + '/' + tools[0] + '.js');
}

if (mobile()) {
	if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) viewport.setAttribute("content", "initial-scale=1.3, maximum-scale=1.3, user-scalable=no");
	else viewport.setAttribute("content", "initial-scale=1, maximum-scale=1, user-scalable=no");
}

$(document).ready(load);