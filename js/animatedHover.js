function animating(elem){
	var effect = elem.data('effect');
	elem.addClass('animated ' + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		elem.removeClass('animated ' + effect);
	}); //animated jello
}

$(document).ready(function($) {
	$(".header__logo").mouseenter(function() {
		animating($(this));
	});
	
	$(".contact_itemCircle").mouseenter(function() {
		animating($(this));
	});
});