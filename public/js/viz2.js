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
		.attr('x', function(d) { return getX(Math.random()); })
		.attr('y', function(d) { return getY(Math.random()); })
		.text(function(d) { return d.name; });

	taipeiText = g.selectAll('.text')
		.data(taipei)
		.enter().append('text')
		.attr('class', 'taipeiText')
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
    setTimeout(function () { showQ1(); }, 16000);
    // setTimeout(function () { showA1(); }, 18000);
}


// Functions
function hideIntro() {
	d3.select('#heading').transition().duration(2000)
		.style('opacity', 0);
}

function showQ1() {
	makeDropDown();
	// d3.select('#heading').text('What’s your name?');

	// d3.select('#heading').transition().duration(2000)
	// 	.style('opacity', 1);
}

function showA1() {
	// console.log(d3.select(newyorkStory[0][0]).attr('cx'));

	newyorkStory.each(function(e, i) {
		d3.select(this).transition().duration(4000).style('opacity', 0);
	});

	newyorkText.each(function(e, i) {

		var cx = d3.select(newyorkStory[0][i]).attr('cx');
		var cy = d3.select(newyorkStory[0][i]).attr('cy');

		d3.select(this).attr('x', cx);
		d3.select(this).attr('y', cy);
		d3.select(this).style('visibility', 'visible');
		d3.select(this).transition().duration(10000).style('opacity', 0.8);
	});
}










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

function getX(d) { return Math.floor( xScale(d) ); }
function getY(d) { return Math.floor( yScale(d) ); }
function getY2(d) { return Math.floor( yScale2(d) ); }
function getY3(d) { return Math.floor( yScale3(d) ); }
function getR(d) { return Math.floor( rScale(d) ); }

