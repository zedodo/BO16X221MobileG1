document.addEventListener("online", onDeviceReady, false);
var map;


function onDeviceReady(){
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
	
	navigator.geolocation.watchPosition(onSuccess, onError, geolocOptions);
}


function onSuccess(position) {
	var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
	//google.maps.Marker.setMap(null);
	
	map.panTo(latLng);
	var marker = new google.maps.Marker({
		position: latLng,
		map: map
	}); 
}


function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}