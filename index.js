var tools = ['home', 'gpa', 'finals', 'potatoes', 'words', 'easybib'];
var largeMenu = "<tr><td width = '11%' id = 'l1'><center><img id = 'menuLogo' src = './sfhsOut.png'></center></td> <td width = '17.8%' class = 'linkTD' id = 'l2'> <span class = 'link'>GPA CALCULATOR</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l3'> <span class = 'link'>FINAL GRADES</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l4'> <span class = 'link'>POTATOES</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l5'> <span class = 'link'>WORD COUNTER</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l6'> <span class = 'link'>EASYBIB CITE</span> </td> </tr>";
var menuDown = false;

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
	$('#lHamburger').click(function () {
		if(menuDown) {
			menuDown = false;
			$('#menu').css({'transition':'height 0s ease-in-out', '-moz-transition':'height 0s ease-in-out', '-ms-transition':'height 0s ease-in-out', '-webkit-transition':'height 0s ease-in-out', '-o-transition':'height 0s ease-in-out'});
			for(var i = 5; i > 0; i--) _('menuTable').deleteRow(i);
			_('menu').style.height = '80px';
		} else {
			menuDown = true;
			$('#menu').css({'transition':'height 0.5s ease-in-out', '-moz-transition':'height 0.5s ease-in-out', '-ms-transition':'height 0.5s ease-in-out', '-webkit-transition':'height 0.5s ease-in-out', '-o-transition':'height 0.5s ease-in-out'});
			setTimeout(function () { _('menu').style.height = '70%'; }, 1);
			setTimeout(function () {
				$('#menuTable tr:last').after("<tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l2' class = 'linkTD'> <center> <span class = 'link'>GPA CALCULATOR</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l3' class = 'linkTD'> <center> <span class = 'link'>FINAL GRADES</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l4' class = 'linkTD'> <center> <span class = 'link'>POTATOES</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l5' class = 'linkTD'> <center> <span class = 'link'>WORD COUNTER</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l6' class = 'linkTD'> <center> <span class = 'link'>EASYBIB CITE</span> </center> </td> </tr>");
				for (var i = 1; i <= tools.length; i++) $('#l' + i).click(lClickHandler(i));
			}, 10);
		}
	});
}

function resize() {
	if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) {
		_('menu').style.height = '80px';
	} else {
		_('menu').style.height = '73px';
	}
	if (mobile()) {
		//if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) viewport.setAttribute("content", "initial-scale=1.3, maximum-scale=1.3, user-scalable=no");
		//else viewport.setAttribute("content", "initial-scale=1, maximum-scale=1, user-scalable=no");
	}
}

function load() {
	setEvents();
	$.get('./tools/' + tools[0] + '/' + tools[0] + '.html', function(data) {
    	_('mainContent').innerHTML = data;
	});
	$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[0] + "/" + tools[0] + ".css'>");
	$.getScript('./tools/' + tools[0] + '/' + tools[0] + '.js');
	resize();
}

$(window).resize(resize);
$(document).ready(load);