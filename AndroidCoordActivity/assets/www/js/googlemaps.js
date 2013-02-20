document.addEventListener("online", onDeviceReady, false);
function GoogleMap() {

	this.initialize = function() {
		var map = showMap();
	}

	var showMap = function() {
		var mapOptions = {
			zoom : 10,
			center : new google.maps.LatLng(45, -0.5),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"),
				mapOptions);
		return map;
	}
}

function onDeviceReady(){
    var map = new GoogleMap();
    map.initialize();
}

/*
function onSuccess(position) {
    //element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                      //  'Longitude: '          + position.coords.longitude             + '<br />';
    
    return position;
}


function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}*/