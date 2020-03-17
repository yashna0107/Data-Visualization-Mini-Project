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
	var earliest = ["1992"];
	var latest = ["2008"];

	for (var i = 1; i<data.length; i++){
		if((data[i][1] === "Canada") && (data[i][3] === "Total, registration status") && (data[i][4] === "Total, program level" && data[i][6] === "Males")){
			if((data[i][5] === "Education")){
							if(data[i][0] === "1992/1993"){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][5] === "Visual and performing arts and communications technologies")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Humanities")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Social and behavioural sciences and law")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Business, management and public administration")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Physical and life sciences and technologies")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Mathematics, computer and information sciences")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Architecture, engineering and related technologies")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Agriculture, natural resources and conservation")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Health, parks, recreation and fitness")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
			if((data[i][5] === "Other instructional programs")){
				if(data[i][0] === "1992/1993"){
					earliest.push(data[i][13]);
				}
				if(data[i][0] === "2008/2009"){
					latest.push(data[i][13]);
				}
			}
		}
	}

	console.log(earliest);
	console.log(latest);

		var full = [
    ['x', "Education", "Visual and performing arts and communications technologies", "Humanities", "Social and behavioural sciences and law", "Business, management and public administration", "Physical and life sciences and technologies", "Mathematics, computer and information sciences", "Architecture, engineering and related technologies", "Agriculture, natural resources and conservation", "Health, parks, recreation and fitness", "Personal, protective and transportation services", "Other instructional programs"],
    earliest,
    latest];

var chart = c3.generate({
		bindto: '#malefields',
    data: {
        x : 'x',
        columns: full,
        type: 'bar',
				height: 430,
    },
    bar: {
        width: {
            ratio: 0.7 // this makes bar width 50% of length between ticks
        }
    },
    axis: {
				rotated: true,
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
