$('#pageScanner').live('pagebeforeshow', function(event, data) {

	window.plugins.barcodeScanner.scan( function(result) {
	
	        $("#pageScannerContent").html("Vous avez scann&eacute; :<br/>" + 
	        		"Resultat: " + result.text + "<br/>" +
	        		"Format: " + result.format + "<br/>" +
	        		"<br/>Etape valid&eacute;e.");
	        		
	        GCM_Send(result.text, 1);
	        
	    }, function(error) {
	    	$("#pageScannerContent").html("Echec du scan");
	    }
	);
});