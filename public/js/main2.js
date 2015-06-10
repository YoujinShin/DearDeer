// WRITING POEM
// var poem = "MY POEM<br><br>by Rich Accetta-Evans<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.<br><br>September 11, 1993.";
var poem = "MY POEM<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";

$(function(){
    $("#typed").typed({
    	strings: [poem],
    	typeSpeed: 80,
    	backDelay: 500,
    	loop: false,
    	contentType: 'html',
    	loopCount: false
    });
});

var height = $(window).height();  

$(document).ready(function() {

	var t_h1 = ( height - 200 )/2;
	$('#logoImg').css('bottom', 90 + "px");

	var t_h2 = ( height - 667 )/2;
	$('.poem').css('bottom', t_h2 + "px");

	var t_h3 = ( height - 30 )/2;
	// $('#rightArrow').css('bottom', t_h3 + "px");
	// $('#leftArrow').css('bottom', t_h3 + "px");
	$('#rightArrow').css('bottom', t_h2+20 + "px");
	$('#leftArrow').css('bottom', t_h2 +20+ "px");

	// Right
	$('#rightArrow').click(function() {

		$('#rightArrow').css('visibility', 'hidden');
		$('#leftArrow').css('visibility', 'visible');

		console.log('right clicked');
		showViz();
	});

	// Left
	$('#leftArrow').click(function() {

		$('#leftArrow').css('visibility', 'hidden');
		$('#rightArrow').css('visibility', 'visible');

		console.log('left clicked');
		hideViz();
	});
});

function showViz() {

	$('body').css('background-color', '#fff');
	$('#viz2').css('visibility', 'visible');
	$('#logoImg').css('visibility', 'hidden');
	$('.poem').css('visibility', 'hidden');

	Move();
}

function hideViz() {

	$('body').css('background-color', '#fff');
	$('#viz2').css('visibility', 'hidden');
	$('#logoImg').css('visibility', 'visible');
	$('.poem').css('visibility', 'visible');
}


