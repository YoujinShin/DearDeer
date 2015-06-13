
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
	newyorkStory.each(function(e, i) {
		d3.select(this).transition().duration(4000).attr('r', 0);
	});

	taipeiStory.each(function(e, i) {
		// d3.select(this).transition().duration(4000).style('opacity', 0);
		d3.select(this).transition().duration(4000).attr('r', 0);
	});
}

function hideStory2() {
	newyorkStory.each(function(e, i) {
		d3.select(this).transition().duration(5200).attr('r', 0);
	});

	taipeiStory.each(function(e, i) {
		// d3.select(this).transition().duration(4000).style('opacity', 0);
		d3.select(this).transition().duration(5200).attr('r', 0);
	});
}

function hideText() {
	newyorkText.each(function(e, i) {
		d3.select(this).transition().duration(2600).style('opacity', 0);
	});

	taipeiText.each(function(e, i) {
		d3.select(this).transition().duration(2600).style('opacity', 0);
	});
}

function showOneNY(index) {
	newyorkStory.each(function(e, i) {
		if(i == selectedNY) { 
			d3.select(this).transition().duration(4000)
			.attr('r', 4)
    		.attr('cx', function(d) { return getX_text(index); })
    		.attr('cy', function(d) { return getY_text(index); });
		}
	});
}

function showPoemNY(index) {
	newyorkStory.each(function(e, i) {
		if(i == selectedNY) { 
			changePoem(e);
			d3.select(this).style('stroke', '#fff');
			d3.select(this).style('stroke-width', 2);
			d3.select('.poem').transition().duration(2000).style('opacity', 1);
		} else {
			d3.select(this).style('stroke-width', 0);
		}
	});
}


function showOneTP(index) {
	taipeiStory.each(function(e, i) {
		if(i == selectedTP) { 
			d3.select(this).transition().duration(4000)
			.attr('r', 4)
    		.attr('cx', function(d) { return getX_text(index); })
    		.attr('cy', function(d) { return getY_text(index); });
		}
	});
}

function hideA() {
	newyorkText.each(function(e, i) {
		d3.select(this).transition().duration(2000).style('opacity', 0);
		// d3.select(this).transition().duration(2000).attr('font-size', 0+"px");
	});

	taipeiText.each(function(e, i) {
		d3.select(this).transition().duration(2000).style('opacity', 0);
		// d3.select(this).transition().duration(2000).attr('font-size', 0+"px");
	});
}

function showOneANY(index) {

	newyorkText.each(function(e, i) {

		if(i == selectedNY) {
			var cx = d3.select(newyorkStory[0][i]).attr('cx');
			var cy = d3.select(newyorkStory[0][i]).attr('cy');

			d3.select(this).attr('x', cx + 30);
			d3.select(this).attr('y', cy);
			d3.select(this).text(function(e) { return getAnswer(e, index); });
			d3.select(this).style('visibility', 'visible');
			d3.select(this).transition().duration(200).style('opacity', 0.8);
		}
	});
}

function showOneATP(index) {

	taipeiText.each(function(e, i) {

		if(i == selectedTP) {
			var cx = d3.select(taipeiStory[0][i]).attr('cx');
			var cy = d3.select(taipeiStory[0][i]).attr('cy');

			d3.select(this).attr('x', cx + 30);
			d3.select(this).attr('y', cy);
			d3.select(this).text(function(e) { return getAnswer(e, index); });
			d3.select(this).style('visibility', 'visible');
			d3.select(this).transition().duration(0).style('opacity', 0.8);
		}
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
		// d3.select(this).transition().duration(2000).attr("font-size", function(d) { return fontSize(Math.random()); })
		d3.select(this).transition().duration(0).style('opacity', 0.8);
	});

	taipeiText.each(function(e, i) {

		var cx = d3.select(taipeiStory[0][i]).attr('cx');
		var cy = d3.select(taipeiStory[0][i]).attr('cy');

		d3.select(this).attr('x', cx);
		d3.select(this).attr('y', cy);
		d3.select(this).text(function(e) { return getAnswer(e, index); });
		d3.select(this).style('visibility', 'visible');
		// d3.select(this).transition().duration(2000).attr("font-size", function(d) { return fontSize(Math.random()); })
		d3.select(this).transition().duration(0).style('opacity', 0.8);
	});
}

function hideQ() {
	d3.select('#heading').transition().duration(2000).style('opacity', 0);
}

function getAnswer(e, index) {
	if(index == 0) { 
		a1 = e.name;
		return 'My name is ' + e.name; 
	}
	else if(index == 1) { 
		a2 = e.favorite;
		return e.favorite + ' was my favorite thing as a child'; 
	}
	else if(index == 2) { 
		a3 = e.breakfast;
		return 'I had ' + e.breakfast + ' for breakfast'; 
	}
	else if(index == 3) { 
		a4 = e.prepare;
		return 'I '+ e.prepare; 
	}
	else if(index == 4) { 
		a5 = e.body;
		return 'I love my ' + e.body; 
	}
	else if(index == 5) { 
		a6 = e.happy;
		return 'I am happy when ' + e.happy; 
	}
}

// var answers = [ 'name', 'favorite', 'breakfast', 'prepare', 'body', 'happy'];
function selectOne(d) {
	selectedNY = Math.floor(d * newyorkLength); 
	selectedTP = Math.floor(d * taipeiLength); 
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

var fontScale = d3.scale.linear()
	.domain([0, 1]).range([ 4, 14 ]);

var xScale_text = d3.scale.linear()
	.domain([0, 1]).range([ 200, width - 200]);

var yScale_text = d3.scale.linear()
	.domain([0, 1]).range([ 100, height - 100]);

function getX(d) { return Math.floor( xScale(d) ); }
function getY(d) { return Math.floor( yScale(d) ); }
function getY2(d) { return Math.floor( yScale2(d) ); }
function getY3(d) { return Math.floor( yScale3(d) ); }
function getR(d) { return Math.floor( rScale(d) ); }
// function getX_text(d) { return Math.floor( xScale_text(d) ); }
// function getY_text(d) { return Math.floor( yScale_text(d) ); }

function getX_text(index) { 
	if(index == 0) { return width/2 + 130; }
	else if(index == 1) { return width/2 - 20; }
	else if(index == 2) { return width/2 + 30; }
	else if(index == 3) { return width/2 + 0; }
	else if(index == 4) { return width/2 + 40; }
	else if(index == 5) { return width/2 - 60; }
}

function getY_text(index) { 
 	if(index == 0) { return bottomHeight + 90; }
	else if(index == 1) { return bottomHeight + 26; }
	else if(index == 2) { return bottomHeight + 176; }
	else if(index == 3) { return bottomHeight + 230; }
	else if(index == 4) { return bottomHeight + 266; }
	else if(index == 5) { return bottomHeight + 356; }
}

function fontSize(d) { 
	var num = Math.floor( fontScale(d) );
	return num + "px"; 
}

