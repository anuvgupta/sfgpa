function resize() {
	if (window.innerWidth < window.innerHeight) _('menu').style.height = '13%';
	else _('menu').style.height = '73px';
}

//$(window).resize(resize);
//$(document).ready(resize);