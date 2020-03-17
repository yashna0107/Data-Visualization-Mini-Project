
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
		if(data[i][1] === "Canada" && data[i][3] === "Total, registration status" && data[i][5] === "Total, instructional programs" && data[i][6] === "Both sexes"){
			if((data[i][4] === "Community college certificate or diploma and other community college level")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Undergraduate level")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Bachelor's and other undergraduate degree")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Other undergraduate level")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Graduate level")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Master's degree")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Doctorate")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Other graduate levels")){
							if((data[i][0] === "1992/1993")){
								earliest.push(data[i][13]);
							}
							if(data[i][0] === "2008/2009"){
								latest.push(data[i][13]);
							}
			}
			if((data[i][4] === "Other program levels")){
							if((data[i][0] === "1992/1993")){
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
    ["x", "Diploma", "Undergraduate level", "Bachelor's degree", "Other undergraduate level", "Graduate level", "Master's degree", "Doctorate", "Other graduate levels", "Other program levels"],
    earliest,
    latest];

var chart = c3.generate({
		bindto: '#degree',
    data: {
        x : 'x',
        columns: full,
        type: 'bar',
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
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
