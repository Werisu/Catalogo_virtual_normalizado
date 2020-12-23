$('#spot-a a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-a, #spot-a').addClass('spot-aberto');
});

$('#spot-b a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-b, #spot-b').addClass('spot-aberto');
});

$('#spot-c a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-c, #spot-c').addClass('spot-aberto');
});

$('#spot-d a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-d, #spot-d').addClass('spot-aberto');
});

$('#spot-e a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-e, #spot-e').addClass('spot-aberto');
});

$('#spot-f a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-f, #spot-f').addClass('spot-aberto');
});

$('#spot-g a').mouseover(function(e){
	 e.preventDefault();
	$('.spot-position-g, #spot-g').addClass('spot-aberto');
});


$('#warp').mouseout(function(){
	$('.spot, .spot-aberto').removeClass('spot-aberto');
});


$(document).ready(function()
	{
		window.setTimeout(function(){
        	$(".sub-col-info-rosa").addClass("ativo");
    }, 500);
});

/*jQuery(document).ready(function($){
	$('.cd-single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point');
		}
	});
});
*/