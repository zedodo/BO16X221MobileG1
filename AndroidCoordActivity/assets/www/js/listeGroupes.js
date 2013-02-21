$('#suiviEquipes').live('pagebeforeshow', function(event, data) {
	$.ajax({
		  type: "GET",
		  url: "http://bo16x221mobileg1.foreverhost.us/service.php?type=listeGroupes&params=enquete*1",
		  dataType: "json"
		}).done(function(groupes) {
			$('#tousGroupes li').remove();
			
			$.each(groupes, function(index, groupe){
				$('#tousGroupes').append('<li id="'+groupe.idGroupe+'"><a href="#suiviEquipe" data-transition="slidefade" data-inline="true">' + groupe.nomGroupe +'</a><div>Numéro du groupe : '+ groupe.numeroGroupe +'</div><br/><div>Téléphone : '+ groupe.telephoneGroupe +'</div><br/><div>Score : '+ groupe.scoreGroupe +'</div><br/><div>Latitude : '+ groupe.latitudeGroupe +'</div><br/><div>Longitude : '+ groupe.longitudeGroupe +'</div><br/></li>');
				
			});
			$('#tousGroupes').listview('refresh');
		});

});



