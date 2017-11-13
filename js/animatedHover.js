function animating(elem){
	var effect = elem.data('effect');
	elem.addClass('animated ' + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		elem.removeClass('animated ' + effect);
	}); //animated jello
}

function animateimgElem(){
	$(".productItem").mouseenter(function() {
		animating($(this));
	});
}

$(document).ready(function($) {
	animateimgElem();
});