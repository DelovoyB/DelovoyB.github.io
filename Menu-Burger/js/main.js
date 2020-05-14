//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js
$(function(){
	$('.hello__burger').click(function(){
		$('.hello__burger, .hello__menu, span').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
