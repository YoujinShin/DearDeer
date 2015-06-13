var width = parseInt($(window).width(), 10),
	height = parseInt($(window).height(), 10);

var svg = d3.select('#viz2').append('svg')
	.attr('width', width)
	.attr('height', height);

var g = svg.append('g')
	.attr('transform', 'translate(' + 0 + ',' + 0 + ')');

queue()
	.defer(d3.csv, 'newyork.csv')
	.defer(d3.csv, 'taipei.csv')
	.await(makeViz);

var questions = [
	'Q1. What’s your name?',
	'Q2. What was your favorite thing when you were a child?',
	'Q3. What do you usually have for breakfast?',
	'Q4. How you prepare it?',
	'Q5. What’s your favorite part of your body?',
	'Q6. What’s one thing you did last time you were happy?'
];

var answers = [ 'name', 'favorite', 'breakfast', 'prepare', 'body', 'happy'];

function makeViz(error, newyork, taipei) {

	newyorkLength = newyork.length;
	taipeiLength = taipei.length;

	newyorkStory = g.selectAll('.dot')
		.data(newyork)
		.enter().append('circle')
		.attr('class','newyorkStory')
		.attr('cx', function(d) { return getX(Math.random()); })
    	.attr('cy', function(d) { return getY2(Math.random()); })
		.attr('r', function(d) { return getR(Math.random()); });

	taipeiStory = g.selectAll('.dot')
		.data(taipei)
		.enter().append('circle')
		.attr('class','taipeiStory')
		.attr('cx', function(d) { return getX(Math.random()); })
		.attr('cy', function(d) { return getY3(Math.random()); })
		.attr('r', function(d) { return getR(Math.random()); });

	newyorkText = g.selectAll('.text')
		.data(newyork)
		.enter().append('text')
		.attr('class', 'newyorkText')
		// .attr("font-size", function(d) { return fontSize(Math.random()); })
		.attr('x', function(d) { return getX(Math.random()); })
		.attr('y', function(d) { return getY(Math.random()); })
		.text(function(d) { return d.name; });

	taipeiText = g.selectAll('.text')
		.data(taipei)
		.enter().append('text')
		.attr('class', 'taipeiText')
		// .attr("font-size", function(d) { return fontSize(Math.random()); })
		.attr('x', function(d) { return getX(Math.random()); })
		.attr('y', function(d) { return getY(Math.random()); })
		.text(function(d) { return d.name; });
}

// var myVar = setInterval(function () {myTimer()}, 3000);
function Move() {

	selectOne(Math.random());

    newyorkStory.each(function(e) {
    	d3.select(this).transition().duration(18000)
    		.attr('cx', function(d) { return getX(Math.random()); })
    		.attr('cy', function(d) { return getY(Math.random()); });
    });

    taipeiStory.each(function(e) {
    	d3.select(this).transition().duration(18000)
    		.attr('cx', function(d) { return getX(Math.random()); })
    		.attr('cy', function(d) { return getY(Math.random()); });
    });

  	d3.select('#heading').style('visibility', 'visible');

    d3.select('#heading').transition().duration(4000)
    	.style('opacity', 1);

    setTimeout(function () { hideIntro(); }, 8000);
    setTimeout(function () { hideStory(); }, 18000);

    randomPoem();
    setTimeout(function() { showButton(); }, 52000);
}

function randomPoem() {


    setTimeout(function () { 
    	// showOneTP();
    	showOneNY(0); 
    }, 22000);
    setTimeout(function () { 
    	// showOneATP(0);
    	showOneANY(0); 
    }, 25500);

    setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(1);
    	// showOneNY(); 
    },   27000);
    setTimeout(function () { 
    	showOneATP(1);
    	// showOneANY(1); 
    }, 30500);

    setTimeout(function () { 
    	selectOne(Math.random());
    	// showOneTP();
    	showOneNY(2); 
    },   31000);
    setTimeout(function () { 
    	// showOneATP(2);
    	showOneANY(2); 
    }, 34500);

     setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(3);
    	// showOneNY(); 
    },   35000);
    setTimeout(function () { 
    	showOneATP(3);
    	// showOneANY(3); 
    }, 38500);

    setTimeout(function () { 
    	selectOne(Math.random());
    	// showOneTP();
    	showOneNY(4); 
    },   39000);
    setTimeout(function () { 
    	// showOneATP(4);
    	showOneANY(4); 
    }, 42500);

    setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(5);
    	// showOneNY(); 
    },   43000);
    setTimeout(function () { 
    	showOneATP(5);
    	// showOneANY(5); 
    }, 46500);
    

    setTimeout(function() {
    	d3.select('#q1').text(a1)
    		.style('color', '#40e4c2');
    	d3.select('#q2').text(a2);
    	d3.select('#q2_1').text(a2);
    	d3.select('#q2_2').text(a2);
    	d3.select('#q3').text(a3);
    	d3.select('#q4').text(a4);
    	d3.select('#q5').text(a5);
    	d3.select('#q6').text(a6);

    	hideText();
    	hideStory2();

    	d3.select('.poem').transition().duration(8000).style('opacity', 1);
    }, 47000);
}

function randomPoem2() {

	var minus = 18000;


    setTimeout(function () { 
    	// showOneTP();
    	showOneNY(0); 
    }, 22000 - minus);
    setTimeout(function () { 
    	// showOneATP(0);
    	showOneANY(0); 
    }, 25500 - minus);

    setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(1);
    	// showOneNY(); 
    },   27000 - minus);
    setTimeout(function () { 
    	showOneATP(1);
    	// showOneANY(1); 
    }, 30500 - minus);

    setTimeout(function () { 
    	selectOne(Math.random());
    	// showOneTP();
    	showOneNY(2); 
    },   31000 - minus);
    setTimeout(function () { 
    	// showOneATP(2);
    	showOneANY(2); 
    }, 34500 - minus);

     setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(3);
    	// showOneNY(); 
    },   35000 - minus);
    setTimeout(function () { 
    	showOneATP(3);
    	// showOneANY(3); 
    }, 38500 - minus);

    setTimeout(function () { 
    	selectOne(Math.random());
    	// showOneTP();
    	showOneNY(4); 
    },   39000 - minus);
    setTimeout(function () { 
    	// showOneATP(4);
    	showOneANY(4); 
    }, 42500 - minus);

    setTimeout(function () { 
    	selectOne(Math.random());
    	showOneTP(5);
    	// showOneNY(); 
    },   43000 - minus);
    setTimeout(function () { 
    	showOneATP(5);
    	// showOneANY(5); 
    }, 46500 - minus);
    

    setTimeout(function() {
    	d3.select('#q1').text(a1)
    		.style('color', '#40e4c2');
    	d3.select('#q2').text(a2);
    	d3.select('#q2_1').text(a2);
    	d3.select('#q2_2').text(a2);
    	d3.select('#q3').text(a3);
    	d3.select('#q4').text(a4);
    	d3.select('#q5').text(a5);
    	d3.select('#q6').text(a6);

    	hideText();
    	hideStory2();

    	d3.select('.poem').transition().duration(8000).style('opacity', 1);
    }, 47000 - minus);
}