var tools = ['home', 'gpa'];
var html = ["<center> <br/> <br/> <br/> hello world </center>", "<center id = 'gpa'> <form> <b id = 'gpaTitle'>SFHS GPA CALCULATOR</b><br/> <table> <tr> <td class = 'gpaTHead'>COURSE</td> <td class = 'gpaTHead'>GRADE</td> <td class = 'gpaTHead'>H|AP</td> </tr> <tr> <td>1 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL1'/><span id = 'gpa1'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR1'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH1'/></td> </tr> <tr> <td>2 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL2'/><span id = 'gpa2'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR2'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH2'/></td> </tr> <tr> <td>3 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL3'/><span id = 'gpa3'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR3'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH3'/></td> </tr> <tr> <td>4 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL4'/><span id = 'gpa4'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR4'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH4'/></td> </tr> <tr> <td>5 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL5'/><span id = 'gpa5'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR5'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH5'/></td> </tr> <tr> <td>6 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL6'/><span id = 'gpa6'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR6'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH6'/></td> </tr> <tr> <td>7 </td> <td><img src = './tools/gpa/leftArrow.png' class = 'gpaA' id = 'gpaL7'/><span id = 'gpa7'> A </span><img src = './tools/gpa/rightArrow.png' class = 'gpaA' id = 'gpaR7'/></td> <td><img src = './tools/gpa/box.png' class = 'gpaH' id = 'gpaH7'/></td> </tr> </table> <b id = 'gpaText'>GPA: 4.00</b><br/> </form> </center>"];

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
		//_('mainContent').innerHTML = html[j - 1];
		$.get('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.html', function(data) {
    		_('mainContent').innerHTML = data;
		});
		$('head').append("<link rel = 'stylesheet' type = 'text/css' href = './tools/" + tools[j - 1] + "/" + tools[j - 1] + ".css'>");
		$.getScript('./tools/' + tools[j - 1] + '/' + tools[j - 1] + '.js');
	};
}

function setEvents() {
	for (var i = 1; i <= 3; i++) $('#l' + i).click(lClickHandler(i));
}

function load() {
	setEvents();
}

$(document).ready(load);