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
		.attr("font-size", function(d) { return fontSize(Math.random()); })
		.attr('x', function(d) { return getX(Math.random()); })
		.attr('y', function(d) { return getY(Math.random()); })
		.text(function(d) { return d.name; });

	taipeiText = g.selectAll('.text')
		.data(taipei)
		.enter().append('text')
		.attr('class', 'taipeiText')
		.attr("font-size", function(d) { 
			// console.log(fontSize(Math.random()));
			return fontSize(Math.random()); 
		})
		.attr('x', function(d) { return getX(Math.random()); })
		.attr('y', function(d) { return getY(Math.random()); })
		.text(function(d) { return d.name; });
}

// var myVar = setInterval(function () {myTimer()}, 3000);
function Move() {

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

    // FIRST QUESTION
    setTimeout(function () { showQ(0); }, 16000);
    setTimeout(function () { 
    	hideStory();
    	showA(0); }, 18000);
    setTimeout(function () { hideQ(0); }, 18000);

    // SECOND QUESTION
    setTimeout(function () { showQ(1); }, 28000);
    setTimeout(function () { hideA(); }, 30000);
    setTimeout(function () { hideQ(1); }, 31000);
    setTimeout(function () { showA(1); }, 31000);
}

// Functions
function hideIntro() {
	d3.select('#heading').transition().duration(2000)
		.style('opacity', 0);
}

function showQ(index) {
	var question = questions[index];

	d3.select('#heading').text(question);
	d3.select('#heading').transition().duration(2000).style('opacity', 1);
}

function hideStory() {
	// console.log(d3.select(newyorkStory[0][0]).attr('cx'));
	newyorkStory.each(function(e, i) {
		// d3.select(this).transition().duration(4000).style('opacity', 0);
		d3.select(this).transition().duration(4000).attr('r', 0);
	});

	taipeiStory.each(function(e, i) {
		// d3.select(this).transition().duration(4000).style('opacity', 0);
		d3.select(this).transition().duration(4000).attr('r', 0);
	});
}

function hideA() {
	newyorkText.each(function(e, i) {
		d3.select(this).transition().duration(2000).style('opacity', 0);
	});

	taipeiText.each(function(e, i) {
		d3.select(this).transition().duration(2000).style('opacity', 0);
	});
}

function showA(index) {

	newyorkText.each(function(e, i) {

		var cx = d3.select(newyorkStory[0][i]).attr('cx');
		var cy = d3.select(newyorkStory[0][i]).attr('cy');

		d3.select(this).attr('x', cx);
		d3.select(this).attr('y', cy);
		d3.select(this).text(function(e) { return getAnswer(e, index); });
		d3.select(this).style('visibility', 'visible');
		d3.select(this).transition().duration(10000).style('opacity', 0.5);
	});

	taipeiText.each(function(e, i) {

		var cx = d3.select(taipeiStory[0][i]).attr('cx');
		var cy = d3.select(taipeiStory[0][i]).attr('cy');

		d3.select(this).attr('x', cx);
		d3.select(this).attr('y', cy);
		d3.select(this).text(function(e) { return getAnswer(e, index); });
		d3.select(this).style('visibility', 'visible');
		d3.select(this).transition().duration(10000).style('opacity', 0.5);
	});
}

function hideQ() {
	d3.select('#heading').transition().duration(2000).style('opacity', 0);
}

function getAnswer(e, index) {
	if(index == 0) { return e.name; }
	else if(index == 1) { return e.favorite; }
	else if(index == 2) { return e.breakfast; }
	else if(index == 3) { return e.prepare; }
	else if(index == 4) { return e.body; }
	else if(index == 5) { return e.happy; }
}

// var answers = [ 'name', 'favorite', 'breakfast', 'prepare', 'body', 'happy'];






















// Scale
var xScale = d3.scale.linear()
	.domain([0, 1]).range([ 20, width - 20]);

var yScale = d3.scale.linear()
	.domain([0, 1]).range([ 20, height - 20]);

var yScale2 = d3.scale.linear()
	.domain([0, 1]).range([ -20, -1000 ]);

var yScale3 = d3.scale.linear()
	.domain([0, 1]).range([ height + 20, height + 1000 ]);

var rScale = d3.scale.linear()
	.domain([0, 1]).range([ 2, 8 ]);

var fontScale = d3.scale.linear()
	.domain([0, 1]).range([ 4, 18 ]);

function getX(d) { return Math.floor( xScale(d) ); }
function getY(d) { return Math.floor( yScale(d) ); }
function getY2(d) { return Math.floor( yScale2(d) ); }
function getY3(d) { return Math.floor( yScale3(d) ); }
function getR(d) { return Math.floor( rScale(d) ); }

function fontSize(d) { 
	var num = Math.floor( fontScale(d) );
	// console.log(num.toString() + "px");
	return num + "px"; 
}

