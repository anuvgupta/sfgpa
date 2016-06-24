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

wordsInit();
//$(document).ready(wordsInit);
