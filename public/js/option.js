var questions = [

	'What’s your name?',
	'What was your favorite thing when you were a child?',
	'What do you usually have for breakfast?',
	'How you prepare it?',
	'What’s your favorite part of your body?',
	'What’s one thing you did last time you were happy?'
];

function makeDropDown() {

	dropDown = d3.select('body').append("select")
		.attr("name", "indicator-list")
		.attr("class", "indicator_list");

	options = dropDown.selectAll("option")
			.data(questions)
		.enter()
			.append("option")
			.text(function(d, i) { 
				console.log(i + ', ' + d);
				return d; 
			})
			.attr("value", function (d) { return d; });

	// dropDown.on("change", menuChanged );
}

// function menuChanged() {

// 	selectedValue = d3.event.target.value.replace(/ /g, '');

// 	heatmapLayer.setStyle( getStyleBar2 );
// 	getDescription2(selectedValue);

// 	selectedCollection.forEach(function(e, i) {

// 		var rect_id = e.id;

// 		barObjects[rect_id]
// 				.transition().duration(490)
// 				.attr('y', function(d) {
// 					var value = selectIndicators(e, selectedValue);
// 					return yScale(value); 
// 				})
// 				.attr('height', function(d) {
// 					var value = selectIndicators(e, selectedValue);
// 					return yScale(0) - yScale(value);
// 				});
// 	});
// }
