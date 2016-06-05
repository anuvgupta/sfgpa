var mode = 1;
var fWorth = 15.00;
var currPrevG = 94.49;
var desNewG = 92.50;
var finalG = 0;

function recalcFinal() {
	finalG = 100/fWorth * (desNewG - (1 - fWorth/100) * currPrevG);
}

function recalcNew() {
	desNewG = fWorth/100 * finalG + (1 - fWorth/100) * currPrevG;
}

function isInvalid(s) {
	var x = _(s).value;
	return ((x == "") || isNaN(x));
}

function finalsRecalculate() {
	if(isInvalid('fWorthInput')) fWorth = 1;
	else fWorth = parseFloat(_('fWorthInput').value);
	if(isInvalid('currGInput')) currPrevG = 1;
	else currPrevG = parseFloat(_('currGInput').value);
	if (mode == 1) {
		if(isInvalid('newInput')) desNewG = 1;
		else desNewG = parseFloat(_('newInput').value);
		recalcFinal();
		_('finalsOutput').innerHTML = String(+finalG.toFixed(2)) + '%';
	} else {
		if(isInvalid('newInput')) finalG = 1;
		else finalG = parseFloat(_('newInput').value);
		recalcNew();
		_('finalsOutput').innerHTML = String(+desNewG.toFixed(2)) + '%';
	}
}

function finalsInit() {
	$('#finals input').on('propertychange change click keyup paste input', function(e) {
		finalsRecalculate();
	});
	_('finalCalcB').style.backgroundColor = '#707070';
	$('#finalCalcB').click(function() {
		mode = 1;
		_('finalCalcB').style.backgroundColor = '#707070';
		_('gradeCalcB').style.backgroundColor = '#444444';
		_('finalDesc').innerHTML = 'FINAL TEST GRADE YOU NEED';
		_('finalsInputDesc').innerHTML = 'Desired Class Grade';
		var temp = _('finalsOutput').innerHTML;
		temp = temp.substring(0, temp.length - 1);
		console.log(temp);
		_('finalsOutput').innerHTML = _('newInput').value + '%';
		_('newInput').value = temp;
		//finalsRecalculate();
	});
	$('#gradeCalcB').click(function() {
		mode = 2;
		_('finalCalcB').style.backgroundColor = '#444444';
		_('gradeCalcB').style.backgroundColor = '#707070';
		_('finalDesc').innerHTML = 'CLASS GRADE AFTER FINAL TEST';
		_('finalsInputDesc').innerHTML = 'Final Test Grade';
		var temp = _('finalsOutput').innerHTML;
		temp = temp.substring(0, temp.length - 1);
		_('finalsOutput').innerHTML = _('newInput').value + '%';
		_('newInput').value = temp;
		finalsRecalculate();
	});
	$('#finalCalcB').hover(function() {
		if (mode != 1) _('finalCalcB').backgroundColor = '#565656';
	}, function () {
		if (mode != 1) _('finalCalcB').backgroundColor = '#444444';
	});
	$('#gradeCalcB').hover(function() {
		if (mode != 2) _('gradeCalcB').backgroundColor = '#565656';
	}, function () {
		if (mode != 2) _('gradeCalcB').backgroundColor = '#444444';
	});
}

finalsInit();