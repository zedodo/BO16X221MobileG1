//alert('scan');
$('#pageScanner').live('pagebeforeshow', function(event, data) {

	//alert('scan');
	window.plugins.barcodeScanner.scan( function(result) {
	        /*alert("We got a barcode\n" +
	                  "Result: " + result.text + "\n" +
	                  "Format: " + result.format + "\n" +
	                  "Cancelled: " + result.cancelled);*/
	        
	        $("#pageScannerContent").html("Vous avez scann&eacute; :<br/>" + 
	        		"Resultat: " + result.text + "<br/>" +
	        		"Format: " + result.format + "<br/>");
	    }, function(error) {
	        //alert("Echec du scan: " + error);
	    	$("#pageScannerContent").html("Echec du scan");
	    }
	);
});