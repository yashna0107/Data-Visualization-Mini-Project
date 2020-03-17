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

	years = [];
	var earliest = ["Full-time student"];
	var latest = ["Part-time student"];

	for (var i = 1; i<data.length; i++){
		if(data[i][1] === "Canada" && data[i][4] === "Total, program level" && data[i][5] === "Total, instructional programs" && data[i][6] === "Both sexes"){
			if(data[i][0] === "1992/1993"){
					if((data[i][3] === "Full-time student")){
						earliest.push(data[i][13]);
					}
					if(data[i][3] === "Part-time student"){
						latest.push(data[i][13]);
					}
			}
			if(data[i][0] === "2008/2009"){
				if((data[i][3] === "Full-time student")){
					earliest.push(data[i][13]);
				}
				if(data[i][3] === "Part-time student"){
					latest.push(data[i][13]);
				}
			}
		}
	}

	console.log(earliest);
	console.log(latest);

		var full = [
    ["x", "1992", "2008"],
    earliest,
    latest];

var chart = c3.generate({
		bindto: '#allprograms',
    data: {
        x : 'x',
        columns: full,
        type: 'bar',
    },
    bar: {
        width: {
            ratio: 0.1 // this makes bar width 50% of length between ticks
        }
    },
    axis: {
        x: {
            type: 'category', // this is needed to load string x value
						tick: {
							multiline: false,
							culling: {
								max: 24
							}
						}
        }
    },
});
}


parseData(createGraph);
