
// Function to convert the CSV flat file into a json variable

function csv2DTJson(csvData){

	var lines=csv.split("\n");
 	var result = [];
 
	var headers=lines[0].split(",");
 
	for(var i=1;i<lines.length;i++){
	
		var obj = {};
		var currentline=lines[i].split(",");
 
		for(var j=0;j<headers.length;j++){
			obj[headers[j]] = currentline[j];
		}
 
		result.push(obj); 

	return json.stringify(result)
}

//This snippet here is where we actually render the table.

$(document).ready(function() {

	var csvDB = '';
	
	dbJSON = csv2DTJson(csvDB);

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen

  $('#chipcharttable').DataTable({
    "ajax": {
      "url": "Database/Processed/chartList.json",
      "dataSrc":"chartData"
    },
    "order":[[2,"desc"]],
    "columns": [
      { "title": "Album" },
      { "title": "Artist" },
	  { "title": "Label" },
      { "title": "Release Date"},
	  { "title": "Art"}
    ]
    });
});
