$('#pageInstruction').live('pagebeforeshow', function(event, data) {
			
	/*var nom = 'Nom';
	var descriptif = 'Descriptif';
	var instruction = '["instruction 1", "instruction 2", "instruction 3"]';
			
	$.ajax({
	  type: "GET",
	  url: "http://bo16x221mobileg1.foreverhost.us/service.php?type=ajoutEtape&params=scenario*1*nom*"+nom+"*descriptif*"+descriptif+"*instruction*"+instruction,
	  dataType: "json",
	  success: function(msg) {
	  	alert('success');
	  },
	  error: function(a, b, c) {
	  	alert('error');
	  }
	  });*/	
			
	/*alert('toto');
	alert(etape);
	alert(etape.nomEtape);
	alert(etape.instructionEtape);*/
	
	var parsed = jQuery.parseJSON(etape.instructionEtape);
	

	//alert(parsed);
	
	$.each(parsed, function(i, obj){
		//alert('each');
		$('#listeInstruction').append('<li> - '+ obj +'</li>');
	});
});