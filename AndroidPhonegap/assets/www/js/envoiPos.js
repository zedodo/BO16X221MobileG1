$('#pageIndex').live('pageinit', function(event, data) {appareilPret();});

function appareilPret(){
	//alert("start geoloc");
	var geolocOptions = {
			frequency : 3000,
			enableHighAccuracy : true,
			maximumAge : 3000
	};
	
	navigator.geolocation.watchPosition(successCallback, errorCallback, geolocOptions);
}

function successCallback(position) {
	var lat = position.coords.latitude;
	var lgt = position.coords.longitude;
	
	$.ajax({ 
		type: "GET",
		url: "http://bo16x221mobileg1.dx.am/service.php?type=majGeoloc&params=groupe*2*latitude*"+lat+"*longitude*"+lgt, 
		dataType: "json"
	}).done(function(msg){});
}


function errorCallback(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}