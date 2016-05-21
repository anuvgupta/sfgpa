var gpaLetters = [' F ', ' D ', ' D+', ' C-', ' C ', ' C+', ' B-', ' B ', ' B+', ' A-', ' A '];
var gpaGpas = [0.0, 1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4];
var gpaCourses = [10, 10, 10, 10, 10, 10, 10];
var gpaHonors = [false, false, false, false, false, false, false];

function gpaRecalculate() {
	var newGPA = 0.000;
	for(var i = 0; i < 7; i++) {
		newGPA += gpaGpas[gpaCourses[i]];
		if(gpaHonors[i]) newGPA++;
	}
	newGPA = newGPA/7;
	_('gpaText').innerHTML = 'GPA: ' + newGPA.toFixed(2);
}

function gpaArrowHandler(j, t) {
	return function(event) {
		if((gpaCourses[j] > 0) && (t == 'l')) gpaCourses[j]--;
		else if(gpaCourses[j] < 10) gpaCourses[j]++;
		_('gpa' + (j + 1)).innerHTML = gpaLetters[gpaCourses[j]];
		gpaRecalculate();
		resize();
	};
}

function gpaHonorsHandler(j) {
	return function(event) {
		if(gpaHonors[j]) _('gpaH' + (j + 1)).src = './tools/gpa/box.png';
		else _('gpaH' + (j + 1)).src = './tools/gpa/box2.png';
		gpaHonors[j] = !gpaHonors[j];
		gpaRecalculate();
	};
}

function gpaSetEvents() {
	for (var i = 0; i < 7; i++) {
		$('#gpaL' + (i + 1)).click(gpaArrowHandler(i, 'l'));
		$('#gpaR' + (i + 1)).click(gpaArrowHandler(i, 'r'));
		$('#gpaH' + (i + 1)).click(gpaHonorsHandler(i));
	}
	resize();
}

function resize() {
	//if () {
	if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) {
		/*
		_('gpa').style.fontSize = '35px';
		_('gpaTitle').style.fontSize = '45px';
		_('gpaText').style.fontSize = '37px';
		$('.gpaTHead').css('font-size', '24px');
		$('.gpaA').css('height', '22px');
		$('.gpaH').css('height', '24px');
		alert('hey');
		*/
		_('gpa').style.fontSize = '30px';
		_('gpaTitle').style.fontSize = '38px';
		_('gpa').style.fontSize = '30px';
		_('gpaText').style.fontSize = '32px';
		$('.gpaTHead').css('font-size', '19px');
		$('.gpaA').css('height', '17px');
		$('.gpaA').css('padding', '0 7px 0 7px');
		$('.gpaH').css('height', '19px');
		$('.gpaH').css('padding', '0 7px 0 7px');
		$('#gpa td').css('font-size', '22px');
		
	} else {
		_('gpa').style.fontSize = '43px';
		_('gpaTitle').style.fontSize = '53px';
		_('gpa').style.fontSize = '43px';
		_('gpaText').style.fontSize = '45px';
		$('.gpaTHead').css('font-size', '32px');
		$('.gpaA').css('height', '30px');
		$('.gpaA').css('padding', '0 20px 0 20px');
		$('.gpaH').css('height', '32px');
		$('.gpaH').css('padding', '0 20px 0 20px');
		$('#gpa td').css('font-size', '43px');
	}
}

$(window).resize(resize);
gpaSetEvents();