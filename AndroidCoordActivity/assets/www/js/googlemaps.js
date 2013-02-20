document.addEventListener("online", appareilPret, false);
var map;


function appareilPret(){
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
	
	navigator.geolocation.watchPosition(succesCallbackSucces, succesCallback, geolocOptions);
}


function succesCallbackSucces(position) {
	var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
	//google.maps.Marker.setMap(null);
	
	map.panTo(latLng);
	var marker = new google.maps.Marker({
		position: latLng,
		map: map
	}); 
}


function succesCallback(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}