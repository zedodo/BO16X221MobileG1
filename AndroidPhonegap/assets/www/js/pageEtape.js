var etape = 0;

$('#pageEtape').live('pagebeforeshow', function(event, data) {

	
	$.ajax({
	  type: "GET",
	  url: "http://bo16x221mobileg1.dx.am/service.php?type=etapeSuivante&params=groupe-1",
	  dataType: "json"
	}).done(function(msg) {	
		etape = msg;
	});
	
});