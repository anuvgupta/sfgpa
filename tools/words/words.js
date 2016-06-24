var wordsText;

function wordsInit() {
  wordsText = '';
  $('#wordsTA').on('change keyup paste', function () {
    var currentVal = $(this).val();
    if (currentVal != wordsText) wordsText = currentVal;
    var wordCount = 0;;
    for (var i = 0; i < wordsText.length; i++) {
      if (wordsText[i] == ' ') wordCount++;
    }
    _('wordsWordCount').innerHTML = wordCount.toString();
    _('wordsCharCount').innerHTML = wordsText.length.toString();
  });
}

function resize() {
	if ((screen.width < screen.height) || (window.innerWidth < window.innerHeight)) {
		if (mobile()) {
			_('gpa').style.fontSize = '32px';
			_('gpaTitle').style.fontSize = '40px';
			_('gpa').style.fontSize = '32px';
			_('gpaText').style.fontSize = '34px';
			$('.gpaTHead').css('font-size', '21px');
			$('.gpaA').css('height', '19px');
			$('.gpaA').css('padding', '0 7px 0 7px');
			$('.gpaH').css('height', '21px');
			$('.gpaH').css('padding', '0 7px 0 7px');
			$('#gpa td').css('font-size', '24px');
		} else {
			//alert('small');
			_('gpa').style.fontSize = '36px';
			_('gpaTitle').style.fontSize = '46px';
			_('gpa').style.fontSize = '36px';
			_('gpaText').style.fontSize = '38px';
			$('.gpaTHead').css('font-size', '25px');
			$('.gpaA').css('height', '23px');
			$('.gpaA').css('padding', '0 13px 0 13px');
			$('.gpaH').css('height', '25px');
			$('.gpaH').css('padding', '0 13px 0 13px');
			$('#gpa td').css('font-size', '36px');
		}
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
wordsInit();
