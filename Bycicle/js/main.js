//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js
$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body, span').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

$(document).ready(function(){
	$('.slider__body').slick({
		arrows:false,
		dots:true,
		infinite:true,
		speed:400,
		autoplay:false,
		autoplaySpeed:5000,
		// Автоматическая адаптивная высота слайдера [для включения .slick-track{align-items:flex-start}]
		adaptiveHeight:true,
		// Количество слайдов, которое показано за 1 раз
		slidesToShow:1,
		// Количество пролистываемых слайдов за одно нажатие
		slidesToScroll:1,
		// Вид переключения [искать в шпаргалке к keyframes]
		easing:'linear',
		// С какого слайда начнём
		initialSlide:0,
		// Пауза при наведении курсора
		pauseOnHover:true,
		// Пауза при клике
		pauseOnFocus:true,
		// Пауза при наведении курсора на точки
		pauseOnDotHover:true,
		// Перенос по зажатию мыши
		draggable:true,
		// Перенос по зажатию пальца
		swipe:true,
		// Сколько нужно свайпить для перехода на следующий [чем больше число - тем меньше нужно свайпить]
		touchThreshold:15,
		// Включает возможности для тачскринов
		touchMove:true,
		// Возможность быстро скролить, не дожидаясь кoнца анимации
		waitForAnimate: false,
		// Делает активный слайд центральным
		centerMode:false,
		// Адаптив для ширины
		variableWidth:false,
		// Ряды
		rows:1,
		// Количество слайдов в ряду
		slidesPerRow:1,
		// Переход выгоранием
		fade:false,
		// Адаптив
		responsive:[
			{
				breakpoint: 768,
				settings: {}
			}
		]
	});
})