var etape = null;
$('#pageEtape').live('pagebeforeshow', function(event, data) {

	$.ajax({
	  type: "GET",
	  url: "http://bo16x221mobileg1.dx.am/service.php?type=etapeSuivante&params=groupe*1",
	  dataType: "json",
	  success: function(msg) {
	  	//alert('success');
	  	etape = msg;
	  },
	  error: function(a, b, c) {
		  alert('Erreur de connexion au serveur. Veuillez vérifier votre connexion et retenter.');
	  	//alert('error' + a + ' ' + b + ' ' + c);
	  }
	  });
});