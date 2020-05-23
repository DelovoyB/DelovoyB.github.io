//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js
$('.skill__per').each(function(){
	var $this = $(this);
	var per = $this.attr('per');
	$this.css("width",per+'%');
	$({animatedValue: 0}).animate({animatedValue: per},{
		duration: 1500,
		step: function(){
			$this.attr('per', Math.floor(this.animatedValue));
		},
		complete: function(){
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		}
	});
});

