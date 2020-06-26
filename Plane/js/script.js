$('.start').click(function(event) {
	$('.start').addClass('started');
	$('.sky').addClass('dig');
	$('.plane').addClass('freak');
	$('.sky__cloud').addClass('fool');
	$('.easter').addClass('egg2');
});

$('.butt').click(function(event) {
	$('.butt').addClass('egg2');
	$('.start').addClass('ready');
});

function create() {
	var element = document.getElementById('bbc');
	var ad = document.createElement('audio');
	ad.id = 'money';
	ad.autoplay = 'autoplay';
	ad.src = '';
	element.appendChild(ad);
};

function play() {
	document.getElementById('money').src = 'img/132.mp3';
};