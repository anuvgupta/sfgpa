var tools = ['home', 'gpa'];

function lClickHandler(j) {
	return function(event) {
		$('.linkTD').css('backgroundColor', '');
		if (j > 1) _('l' + j).style.backgroundColor = '#BFBFBF';
		$.get('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.html', function(data) {
    		_('mainContent').innerHTML = data;
		});
		$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[j - 1] + "/" + tools[j - 1] + ".css'>");
		$.getScript('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.js');
		//$('head').append("<meta name = 'viewport' content = 'width=device-width, initial-scale=1.8, maximum-scale=1.8, user-scalable=no'/>");
	};
}

function setEvents() {
	for (var i = 1; i <= tools.length; i++) $('#l' + i).click(lClickHandler(i));
}

function load() {
	setEvents();
}

$(document).ready(load);