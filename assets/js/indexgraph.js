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
							males,
							females
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

		setTimeout(function () {
    chart.transform('pie');
		}, 1000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 2000);

		setTimeout(function () {
		  chart.transform('line');
		}, 3000);

		setTimeout(function () {
    chart.transform('pie');
	}, 4000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 5000);

		setTimeout(function () {
		  chart.transform('line');
		}, 6000);

		setTimeout(function () {
    chart.transform('pie');
	}, 7000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 10000);

		setTimeout(function () {
		  chart.transform('line');
		}, 11000);

		setTimeout(function () {
    chart.transform('pie');
	}, 12000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 13000);

		setTimeout(function () {
		  chart.transform('line');
		}, 14000);

		setTimeout(function () {
    chart.transform('pie');
	}, 15000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 16000);

		setTimeout(function () {
		  chart.transform('line');
		}, 17000);

		setTimeout(function () {
    chart.transform('pie');
	}, 18000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 19000);

		setTimeout(function () {
		  chart.transform('line');
		}, 20000);

		setTimeout(function () {
    chart.transform('pie');
	}, 21000);

		setTimeout(function () {
		  chart.transform('bar');
		}, 22000);

		setTimeout(function () {
		  chart.transform('line');
		}, 23000);
}

parseData(createGraph);
