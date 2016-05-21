function resize() {
	if (window.innerWidth < window.innerHeight) {
		_('menu').style.height = '13%';
		_('mainTop').style.height = '13%';
	}
	else {
		_('menu').style.height = '73px';
		_('mainTop').style.height = '73px';
	}
}

function lClickHandler(j) {
	return function(event) {
		$('.linkTD').css('backgroundColor', '');
		if (j > 1) _('l' + j).style.backgroundColor = '#BFBFBF';
	};
}

function setEvents() {
	for (var i = 1; i <= 3; i++) {
		console.log(i);
		$('#l' + i).click(lClickHandler(i));
	}
}

function load() {
	//resize();
	setEvents();
	$.getScript('./tools/gpa/gpa.js');
}

//$(window).resize(resize);
$(document).ready(load);