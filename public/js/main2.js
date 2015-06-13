// var poem = "MY POEM<br><br>by Rich Accetta-Evans<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.<br><br>September 11, 1993.";
// var poem = "MY POEM<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";
var poem = "<span id='q2'>MY POEM</span><br><br><span id='q2_1'>My poem</span> delights me.<br><span id='q2_2'>My poem</span> is mine.<br><br>It is like <span id='q3'>fresh bread</span><br>When <span id='q4'>I bake it</span> myself.<br><br>It is like <span id='q5'>my son</span><br>The day <span id='q5'>he</span> was born.<br><br>I <span id='q6'>laughed</span> as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";
// <span id='q1'>by Rich Accetta-Evans</span>

var height = $(window).height();

$(function(){

	bottomHeight = (height - 610)/2;
	d3.select('.poem').style('bottom', bottomHeight + 'px');
    d3.select('#logoImg').transition().duration(3000).style('opacity', 1);

    setTimeout(function () {
    	typingPoem(); 
    	d3.select('#logoImg').transition().duration(10000).style('opacity', 0.0);
    }, 3000);
});

function typingPoem () {
    $("#typed").typed({
    	strings: [poem],
    	typeSpeed: 60,
    	backDelay: 400,
    	loop: false,
    	contentType: 'html',
    	loopCount: false
    });
};

$(document).ready(function() {

	// Right
	$('#rightArrow').click(function() {

		$('#rightArrow').css('visibility', 'hidden');
		// $('#leftArrow').css('visibility', 'visible');

		console.log('right clicked');
		showViz();
	});
});

function showViz() {

	$('body').css('background-color', '#000');
	$('#viz2').css('visibility', 'visible');
	$('#logoImg').css('visibility', 'hidden');
	$('.poem').css('opacity', 0);

	Move();
}

function hideViz() {

	$('body').css('background-color', '#000');
	$('#viz2').css('visibility', 'hidden');
	$('#logoImg').css('visibility', 'visible');
	$('.poem').css('visibility', 'visible');
}

function showButton() {
	// 
	d3.select('#bttn_one').transition().duration(2000)
		.style('opacity', 0.9);

	d3.select('#bttn_one')
	.on("mouseover", function() {
		d3.select(this).style('opacity', 0.6);
	})
	.on("mouseout", function() {
		d3.select(this).style('opacity', 0.9);
	})
	.on("click", function(){
		console.log('botton one clicked');
		hideStory();
		d3.select('.poem').transition().duration(4000).style('opacity', 0);
		randomPoem2();
	});

	// 
	d3.select('#bttn_all').transition().duration(2000)
		.style('opacity', 0.9);

	d3.select('#bttn_all')
	.on("mouseover", function() {
		d3.select(this).style('opacity', 0.6);
	})
	.on("mouseout", function() {
		d3.select(this).style('opacity', 0.9);
	})
	.on("click", function(){
		console.log('botton all clicked');
		d3.select('.poem').transition().duration(4000).style('opacity', 0);
		hideText();

		//
		newyorkStory.each(function(e) {
	    	d3.select(this).transition().duration(18000)
	    		.attr('r', function(d) { 
	    			var currentR = d3.select(this).attr('r');
	    			if( currentR == 0 ) { return getR(Math.random());  } 
	    			else { return currentR; }
	    		})
	    		.attr('cx', function(d) { return getX(Math.random()); })
	    		.attr('cy', function(d) { return getY(Math.random()); });
	    });

	    taipeiStory.each(function(e) {
	    	d3.select(this).transition().duration(18000)
	    		.attr('r', function(d) { 
	    			var currentR = d3.select(this).attr('r');
	    			if( currentR == 0 ) { return getR(Math.random());  } 
	    			else { return currentR; } 
	    		})
	    		.attr('cx', function(d) { return getX(Math.random()); })
	    		.attr('cy', function(d) { return getY(Math.random()); });
	    });
	});

	hideText();
}

