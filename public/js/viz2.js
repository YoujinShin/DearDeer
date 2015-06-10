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
    	.attr('cy', function(d) { return getY(Math.random()); })
		.attr('r', function(d) { return getR(Math.random()); });

	taipeiStory = g.selectAll('.dot')
		.data(taipei)
		.enter().append('circle')
		.attr('class','taipeiStory')
		.attr('cx', function(d) { return getX(Math.random()); })
		.attr('cy', function(d) { return getY(Math.random()); })
		.attr('r', function(d) { return getR(Math.random()); });
}

// // Timer
// var myVar = setInterval(function () {myTimer()}, 3000);
function Breathing() {

    newyorkStory.each(function(e) {
    	d3.select(this).transition().duration(1600)
    		.attr('r', function(d) { return getR(Math.random()); });
    });

    taipeiStory.each(function(e) {
    	d3.select(this).transition().duration(1600)
    		.attr('r', function(d) { return getR(Math.random()); });
    });
}

function Move() {

    newyorkStory.each(function(e) {
    	d3.select(this).transition().duration(20000)
    		.attr('cx', function(d) { return getX(Math.random()); })
    		.attr('cy', function(d) { return getY(Math.random()); })
    		.attr('r', function(d) { return getR(Math.random()); });
    });

    taipeiStory.each(function(e) {
    	d3.select(this).transition().duration(20000)
    		.attr('cx', function(d) { return getX(Math.random()); })
    		.attr('cy', function(d) { return getY(Math.random()); })
    		.attr('r', function(d) { return getR(Math.random()); });
    });

  	d3.select('#heading').style('visibility', 'visible');

    d3.select('#heading').transition().duration(4000)
    	.style('opacity', 1);


 //    setTimeout(function () {
	//     setInterval(function() { Breathing() }, 2000);
	// }, 20000);
}

// Scale
var xScale = d3.scale.linear()
	.domain([0, 1]).range([ 20, width - 20]);

var yScale = d3.scale.linear()
	.domain([0, 1]).range([ 20, height - 20]);

var rScale = d3.scale.linear()
	.domain([0, 1]).range([ 2, 8 ]);

function getX(d) { return Math.floor( xScale(d) ); }
function getY(d) { return Math.floor( yScale(d) ); }
function getR(d) { return Math.floor( rScale(d) ); }

