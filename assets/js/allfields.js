/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/37100072.csv", {
		// download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data);
		}
	});
}

function createGraph(data) {

	var years = [];
	var  ed= ["Education"];
	var  va= ["Visual and performing arts and communications technologies"];
	var  hu= ["Humanities"];
	var  sb= ["Social and behavioural sciences and law"];
	var  bm= ["Business, management and public administration"];
	var  pl= ["Physical and life sciences and technologies"];
	var  mc= ["Mathematics, computer and information sciences"];
	var  ae= ["Architecture, engineering and related technologies"];
	var  an= ["Agriculture, natural resources and conservation"];
	var  hp= ["Health, parks, recreation and fitness"];
	var  pp= ["Personal, protective and transportation services"];
	var  oi= ["Other instructional programs"];

	for (var i = 1; i<data.length; i++){
		if((data[i][1] === "Canada") && (data[i][3] === "Total, registration status") && (data[i][4] === "Total, program level")){
			if((data[i][5] === "Education")){
						if (data[i][6] === "Females"){
								years.push(data[i][0]);
								ed.push(data[i][13]);
					}
			}
			if((data[i][5] === "Visual and performing arts and communications technologies")){
				if (data[i][6] === "Females"){
						va.push(data[i][13]);
				}
			}
			if((data[i][5] === "Humanities")){
				if (data[i][6] === "Females"){
						hu.push(data[i][13]);
				}
			}
			if((data[i][5] === "Social and behavioural sciences and law")){
				if (data[i][6] === "Females"){
						sb.push(data[i][13]);
				}
			}
			if((data[i][5] === "Business, management and public administration")){
				if (data[i][6] === "Females"){
						bm.push(data[i][13]);
				}
			}
			if((data[i][5] === "Physical and life sciences and technologies")){
				if (data[i][6] === "Females"){
						pl.push(data[i][13]);
				}
			}
			if((data[i][5] === "Mathematics, computer and information sciences")){
				if (data[i][6] === "Females"){
						mc.push(data[i][13]);
				}
			}
			if((data[i][5] === "Architecture, engineering and related technologies")){
				if (data[i][6] === "Females"){
						ae.push(data[i][13]);
				}
			}
			if((data[i][5] === "Agriculture, natural resources and conservation")){
				if (data[i][6] === "Females"){
						an.push(data[i][13]);
				}
			}
			if((data[i][5] === "Health, parks, recreation and fitness")){
				if (data[i][6] === "Females"){
						hp.push(data[i][13]);
				}
			}
			if((data[i][5] === "Other instructional programs")){
				if (data[i][6] === "Females"){
						oi.push(data[i][13]);
				}
			}
		}
	}

	console.log(sb);

	var chart = c3.generate({
			bindto: '#chart',
		  data: {
		      columns: [
		         	ed,
							va,
							hu,
							sb,
							bm,
							pl,
							mc,
							ae,
							an,
							hp,
							pp,
							oi
		      ]
		  },
		  axis: {
		      x: {
		          type: 'category',
		          categories: years,
							tick: {
								multiline: false,
								culling: {
									max: 12
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
