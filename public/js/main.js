// WRITING POEM
// var poem = "MY POEM<br><br>by Rich Accetta-Evans<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.<br><br>September 11, 1993.";
var poem = "MY POEM<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";


$(function(){
    $("#typed").typed({
    	strings: [poem],
        // strings: ["Dear Deer <br> Dear Deer"],
        typeSpeed: 80,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });
});

// FULL SCREEN
$(document).ready(function() {
	$('#fullpage').fullpage({
		// anchors: ['', '', ''],
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#fff', '#fff', '#000'],
		// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['', '', ''],
		// navigationTooltips: ['First page', 'Second page', 'Third and last page'],
		responsive: 900
	});

	var height = $(window).height();  
	// var height = screen.width;
	var t_h = (height - 665)/2;
	if(t_h < 0) t_h = 0;

	$('.poem').css('bottom', t_h+"px");
});




// $(".reset").click(function(){
//     $("#typed").typed('reset');
// });
// function newTyped(){ /* A new typed object */ }
// function foo(){ console.log("Callback"); }