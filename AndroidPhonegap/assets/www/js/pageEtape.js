var etape = null;
$('#pageEtape').live('pagebeforeshow', function(event, data) {

	$.ajax({
	  type: "GET",
	  url: "http://bo16x221mobileg1.foreverhost.us/service.php?type=etapeSuivante&params=groupe*1",
	  dataType: "text",
	  success: function(msg) {
	  	//alert('success');
	  	etape = msg;
	  	
		var split = etape.split('<!--');
		etape = split[0];
		etape = jQuery.parseJSON(etape);
	  },
	  error: function(a, b, c) {
		  alert('Erreur de connexion au serveur. Veuillez vérifier votre connexion et retenter.');
	  	//alert('error' + a + ' ' + b + ' ' + c);
	  }
	  });
});