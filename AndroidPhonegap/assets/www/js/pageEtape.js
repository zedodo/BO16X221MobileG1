
$('#pageEtape').live('pagebeforeshow', function(event, data) {

	alert('bleh');

	$.ajax({
	  type: "GET",
	  url: "http://bo16x221mobileg1.dx.am/service.php?type=etapeSuivante&params=groupe*1",
	  dataType: "json",
	  success: function(msg) {
	  	alert('bleh2');
	  },
	  error: function(a, b, c) {
	  	alert(a);
	  }

	
});