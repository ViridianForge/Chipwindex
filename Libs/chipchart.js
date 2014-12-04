
$(document).ready(function() {

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen
	$("#subForm").width($(window).width()*0.2);
	$("#subForm").height($(window).height());
	
	//Major props on helping figure out populating a DataTables table from Google Sheets to raza
	//from:  http://datatables.net/forums/discussion/5611/how-to-grab-datatables-data-from-a-google-spreadsheet
	
	//Original sAjaxSource
	//"<a href="https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"" target="_blank" rel="nofollow">https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json"</a>",
	
  $('#chipcharttable').DataTable({
    "bServerSide":false,
	"bProcessing":true,
	"sAjaxDataProp":"feed.entry",
	"sAjaxSource":"https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",
	"aoColumns":[
		{ "mData": "gsx$title.$t"},
		{ "mData": "gsx$artist.$t"},
		{ "mData": "gsx$label.$t"},
		{ "mData": "gsx$releasedate.$t"},
		{ "mData": "gsx$availableat.$t"}
	]
	//"aoColumsDef": "_all"

    });
});
