
$(document).ready(function() {

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen
	$("#subForm").width($(window).width()*0.2);
	$("#subForm").height($(window).height());
	
	console.log("Attempting to get JSON.")
	//Grab the data from the publically available copy of the ChipChart master database
	$.getJSON("https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",function(data){
		//Test Print
		console.log(data.feed.entry[0]['gsx$title']['$t']);
		console.log("Success.");
	});

  $('#chipcharttable').DataTable({
    "ajax": {
      "url": "Database/Processed/chartList.json",
      "dataSrc":"chartData"
    },
    "order":[[2,"desc"]],
    "columns": [
      { "title": "Title" },
      { "title": "Artist" },
	  { "title": "Label" },
      { "title": "Release Date"},
	  { "title": "Available At"}
    ]
    });
});
