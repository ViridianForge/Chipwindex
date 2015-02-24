//Globals for search filtering functionality
var hiddenFilter = '';
var chipWINDex = null;
var filtChip = false;
var filtNerd = false;
var filtVGM = false;

$(document).ready(function() {

	// We might need a touch right here to grab the size elements
	// of the submission form and alter them to better match the screen
	$("#subForm").width($(window).width()*0.3);
	$("#subForm").height($(window).height()*0.9);
	
	//Prep the iframe dialog
	$("#subDialog").dialog({
		autoOpen: false,
		modal: true,
		maxWidth: $(window).width()*0.3,
		maxHeight: $(window).height()*0.8,
		width: $(window).width()*0.3,
		height: $(window).height()*0.8,
		show: {
			effect: "slide",
			duration: 333
		},
		hide: {
			effect: "slide",
			duration: 333
		}
	});
	
	$("#aboutDialog").dialog({
		autoOpen: false,
		modal: true,
		maxWidth: $(window).width()*0.3,
		maxHeight: $(window).height()*0.5,
		width: $(window).width()*0.3,
		height: $(window).height()*0.5,
		show: {
			effect: "slide",
			duration: 333
		},
		hide: {
			effect: "slide",
			duration: 333
		}
	});
		
	//Prep the button to open the iframe
	$("#submitButton").click(function(){
		$("#subDialog").dialog("open");
	});
	
	$("#aboutButton").click(function(){
		$("#aboutDialog").dialog("open");
	});
	
	//Major props on helping figure out populating a DataTables table from Google Sheets to raza
	//from:  http://datatables.net/forums/discussion/5611/how-to-grab-datatables-data-from-a-google-spreadsheet
	
  chipWINDex = $('#chipwindex').DataTable({
    "bServerSide":false,
	"bProcessing":true,
	"sAjaxDataProp":"feed.entry",
	"sAjaxSource":"https://spreadsheets.google.com/feeds/list/1fSwmSAB-qluTvy8YiTgunHKFbJsKMLg36xDNp8uhFIk/od6/public/values?alt=json",
	"aoColumns":[
		{ "title": "Title", "mData": "gsx$title.$t"},
		{ "title": "Artist Name", "mData": "gsx$artistname.$t", "visible":false},
		{ "title": "Artist Website", "mData": "gsx$artistwebsite.$t", "visible":false},
		{ "title": "Artist", "mData": "gsx$artist.$t"},
		{ "title": "Label Name", "mData": "gsx$labelname.$t", "visible":false},
		{ "title": "Label Website", "mData": "gsx$labelwebsite.$t", "visible":false},
		{ "title": "Label", "mData": "gsx$label.$t"},
		{ "title": "Release Date", "mData": "gsx$releasedate.$t"},
		{ "title": "Available At Address", "mData": "gsx$availableataddress.$t", "visible":false},
		{ "title": "Available At", "mData": "gsx$availableat.$t"},
		{ "title": "Genre", "mData": "gsx$genre.$t", "visible":false},
		{ "title": "Genre", "mData": "gsx$badge.$t" }
	],
	"aaSorting":[[7,"desc"]],
	"fnInitComplete": function(){
		$(".dataTables_scrollBody").jScrollPane();
	},
	"sScrollY": Math.floor(($(window).height())*0.70),
	"bPaginate": false,
	"info": false
    });
	
	$("#filterField").keyup(function(){
		chipWINDex.search($(this).val()).draw();
	});
	
	
});

//Toggle filter state based on button press.
function toggleFilter(button, arg){
	
	if(button === '#chiptune'){
		filtChip = !filtChip;
		filtNerd = false;
		filtVGM = false;
	}else if(button === '#nerdcore'){
		filtChip = false;
		filtNerd = !filtNerd;
		filtVGM = false;
	}else{
		filtChip = false;
		filtNerd = false;
		filtVGM = !filtVGM;
	}
	
	setButtonState('#chiptune',filtChip);
	setButtonState('#nerdcore',filtNerd);
	setButtonState('#VGM',filtVGM);
		
	genreFilt(filtChip,filtNerd,filtVGM);
}

function setButtonState(button, state){
	if(state){
		$(button).removeClass("controlUnselected");
		$(button).addClass("controlSelected");
	}else{
		$(button).removeClass("controlSelected");
		$(button).addClass("controlUnselected");
	}
}

function genreFilt(chip,nerd,vgm){
	var filtString = '';
	chipWINDex.search(filtString).draw();
	if(chip){
		filtString='chiptune';
	}else if(nerd){
		filtString='nerdcore';
	}else if(vgm){
		filtString='vgm';
	}
	//filter
	chipWINDex.search(filtString).draw();
}
