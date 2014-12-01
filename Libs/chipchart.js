
$(document).ready(function() {

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen
	$("#subForm").width($(window).width()*0.2);
	$("#subForm").height($(window).height());
	
	//console.log("Attempting to get JSON.")
	//Grab the data from the publically available copy of the ChipChart master database
	//$.getJSON("https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",function(data){
		//Test Print
		//var chartData = [];
		//$.each(data.feed.entry, function(key, val){
		//	console.log(key);
		//	console.log(val);
		//});
		//console.log("Success.");
	//});

	//Major props on helping figure out populating a DataTables table from Google Sheets to raza
	//from:  http://datatables.net/forums/discussion/5611/how-to-grab-datatables-data-from-a-google-spreadsheet
	
	//Original sAjaxSource
	//"<a href="https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"" target="_blank" rel="nofollow">https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"</a>",
	
  $('#chipcharttable').DataTable({
    "bServerSide":false,
	"bProcessing":true,
	"sAjaxDataProp":"feed.entry",
	"sAjaxSource":"https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",
	"aoColums": [
		{ "mDataProp": "gsx$title.$t"},
		{ "mDataProp": "gsx$artist.$t"},
		{ "mDataProp": "gsx$label.$t"},
		{ "mDataProp": "gsx$releasedate.$t"},
		{ "mDataProp": "gsx$availableat.$t"}
	]
    });
});
