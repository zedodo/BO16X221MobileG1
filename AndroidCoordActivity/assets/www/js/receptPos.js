document.addEventListener("online", appareilPret, false);
var map;


function appareilPret(){
	
	receptPosGroupes();
	
	var mapOptions = {
			zoom : 12,
			center : new google.maps.LatLng(0, 0),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
	
	map = new google.maps.Map(document.getElementById("map_canvas"),
			mapOptions);
	
	var geolocOptions = {
			frequency : 5000,
			enableHighAccuracy : true,
			maximumAge : 5000
	};
	
	navigator.geolocation.watchPosition(succesCallback, erreurCallback, geolocOptions);
}


function succesCallback(position) {
	
	var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
	//google.maps.Marker.setMap(null);
	
	map.panTo(latLng);
	var marker = new google.maps.Marker({
		position: latLng,
		map: map
	}); 
}


function erreurCallback(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


function receptPosGroupes(){
	
	$.ajax({ 
		type: "GET",
		url: "http://bo16x221mobileg1.dx.am/service.php?type=listeGroupes&params=enquete*1",
		dataType: "json",
		error: function (a, b, c) {
			alert(c);
		}
	}).done(function(msg){
			  alert("toto = " + JSON.parse(msg));
		});
}

