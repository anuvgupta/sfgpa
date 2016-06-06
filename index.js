var curTool = 0;
var tools = ['home', 'gpa', 'finals', 'words', 'easybib'];
var largeMenu = "<tr><td width = '11%' id = 'l1' class = 'linkTD'><center><img id = 'menuLogo' src = './img/logo/sfhsGrey.png'></center></td> <td width = '17.8%' class = 'linkTD' id = 'l2'> <span class = 'link'>GPA CALCULATOR</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l3'> <span class = 'link'>FINAL GRADES</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l4'> <span class = 'link'>WORD COUNTER</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l5'> <span class = 'link'>EASYBIB CITE</span> </td> <td width = '17.8%' class = 'linkTD' id = 'l6'> <span class = 'link'></span> </td> </tr>";
var mobileMenu = "<tr height = '17%'> <td width = '26%' class = 'linkTD' id = 'l1'> <center> <img id = 'menuLogo' src = './img/logo/sfhsGrey.png'> <span class = 'link' style = 'display: none;'>HOME</span> </center> </td> <td width = '48%' id = 'lSpacer'> <center> <span id = 'mobileTitle'>HOME</span> </center> </td> <td width = '26%' class = 'linkTD' id = 'lHamburger'> <center> <img id = 'menuHamburger' src = './img/hamburger.png'> </center> </td> </tr>";
var mobileRows = "<tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l2' class = 'linkTD'> <center> <span class = 'link'>GPA CALCULATOR</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l3' class = 'linkTD'> <center> <span class = 'link'>FINAL GRADES</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l4' class = 'linkTD'> <center> <span class = 'link'>WORD COUNTER</span> </center> </td> </tr> <tr height = '16.6%'> <td width = '88%' colspan = '3' id = 'l5' class = 'linkTD'> <center> <span class = 'link'>EASYBIB CITE</span> </center> </td> </tr>";
var menuDown = false;
var mobileView = false;

function lClickHandler(j) {
	return function(event) {
		$('.linkTD').css('backgroundColor', '');
		_('menuHamburger').src = './img/hamburger.png';
		if (j > 1) _('l' + j).style.backgroundColor = '#C0C0C0';
		curTool = j - 1;
		$.get('./tools/' + tools[curTool] + '/' + tools[curTool] + '.html', function(data) {
    		_('mainContent').innerHTML = data;
		});
		$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[curTool] + "/" + tools[curTool] + ".css'>");
		$.getScript('./tools/' + tools[curTool] + '/' + tools[curTool] + '.js');
		if(menuDown) {
			menuDown = false;
			_('lSpacer').innerHTML = "<center><span id = 'mobileTitle'>" + $('#l' + j + ' .link').html(); + '</span></center>';
			$('#menu').css({'transition':'height 0s ease-in-out', '-moz-transition':'height 0s ease-in-out', '-ms-transition':'height 0s ease-in-out', '-webkit-transition':'height 0s ease-in-out', '-o-transition':'height 0s ease-in-out'});
			for(var i = 4; i > 0; i--) _('menuTable').deleteRow(i);
			_('menu').style.height = '80px';
		}
	};
}

function setEvents() {
	if (mobileView) {
		$('#lHamburger').click(function () {
			if(menuDown) {
				menuDown = false;
				_('menuHamburger').src = './img/hamburger.png';
				$('#menu').css({'transition':'height 0s ease-in-out', '-moz-transition':'height 0s ease-in-out', '-ms-transition':'height 0s ease-in-out', '-webkit-transition':'height 0s ease-in-out', '-o-transition':'height 0s ease-in-out'});
				for(var i = 4; i > 0; i--) _('menuTable').deleteRow(i);
				_('menu').style.height = '80px';
				$('.link').css('fontSize', '0');
			} else {
				menuDown = true;
				_('menuHamburger').src = './img/down.png';
				$('#menu').css({'transition':'height 0.35s ease-in-out', '-moz-transition':'height 0.35s ease-in-out', '-ms-transition':'height 0.35s ease-in-out', '-webkit-transition':'height 0.35s ease-in-out', '-o-transition':'height 0.35s ease-in-out'});
				setTimeout(function () { _('menu').style.height = '70%'; }, 1);
				setTimeout(function () {
					$('#menuTable tr:last').after(mobileRows);
					for (var i = 1; i <= tools.length; i++) $('#l' + i).click(lClickHandler(i));
					$('.link').css('fontSize', '19px');
				}, 10);
			}
		});
	} else for (var i = 1; i <= tools.length; i++) $('#l' + i).click(lClickHandler(i));
}

function resize() {
	if (window.innerWidth < window.innerHeight) {
		mobileView = true;
		_('menu').style.height = '80px';
		_('menuTable').innerHTML = mobileMenu;
		var curL = curTool + 1;
		if (mobileView) _('lSpacer').innerHTML = "<center><span id = 'mobileTitle'>" + $('#l' + curL + ' .link').html(); + '</span></center>';
		setEvents();
	} else {
		mobileView = false;
		_('menu').style.height = '73px';
		_('menuTable').innerHTML = largeMenu;
		setEvents();
	}
}

function load() {
	resize();
	$.get('./tools/' + tools[curTool] + '/' + tools[curTool] + '.html', function(data) {
    	_('mainContent').innerHTML = data;
	});
	$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[curTool] + "/" + tools[curTool] + ".css'>");
	$.getScript('./tools/' + tools[curTool] + '/' + tools[curTool] + '.js');
}

$(window).resize(resize);
$(document).ready(load);