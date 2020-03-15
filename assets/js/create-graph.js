/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/37100072.csv", {
		download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data);
		}
	});
}

function createGraph(data) {

	var years = [];
	var females = ["Females"];
	var males = ["Males"];

	for (var i = 1; i<data.length; i++){
		if((data[i][1] === "Canada") && (data[i][3] === "Total, registration status") && (data[i][4] === "Total, program level") && (data[i][5] === "Total, instructional programs")){
		if (data[i][6] === "Females"){
						years.push(data[i][0]);
						females.push(data[i][13]);
					}
		if (data[i][6] === "Males"){
						males.push(data[i][13]);}
		}
	}

	console.log(females);

	var chart = c3.generate({
			bindto: '#chart',
		  data: {
		      columns: [
		          females,
							males
		      ]
		  },
		  axis: {
		      x: {
		          type: 'category',
		          categories: years,
							tick: {
								multiline: false,
								culling: {
									max: 24
								}
							}
		      }
		  }
		});
}

parseData(createGraph);

//
// var chart = c3.generate({
// 		bindto: '#chart',
// 		data: {
// 				x: "years",
// 				columns: [
// 					females,
// 					males
// 				],
// 				type: 'bar'
// 		},
// 		bar: {
// 				width: {
// 						ratio: 0.5
// 		}
// });
