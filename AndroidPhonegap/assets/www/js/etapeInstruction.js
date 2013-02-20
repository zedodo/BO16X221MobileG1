$('#pageInstruction').live('pagebeforeshow', function(event, data) {
			
	alert('toto');
	var parsed = jQuery.parseJSON(etape.instructionEtape);
	alert(etape.instructionEtape);
	alert(parsed);
	
			$.each(parsed, function(i, obj){
				alert('each');
				$('#listeInstruction').append('<li>'+ obj +'</li>');
			});

});