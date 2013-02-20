/* function preventBehavior(e) {
	e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, false);

function onBodyLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	// do your thing!

	var onSuccess = function(position) {

		document.getElementById('map').src = "http://maps.googleapis.com/maps/api/staticmap?center="
			+ position.coords.latitude
			+ ","
			+ position.coords.longitude
			+ "&amp;zoom=11&amp;size=300x300&amp;sensor=false";

	};

	// onError Callback receives a PositionError object

	function onError(error) {
		alert('code: ' + error.code + 'n' + 'message: ' + error.message + 'n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

}


<!-- <!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-type" content="text/html" charset="utf-8" />
</head>
<body>
	<script type="text/javascript" charset="utf-8">

    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
    	
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
        

    }

    </script>
	<p id="geolocation">Finding dghjdghkgeolocation...</p>
	<script type="text/javascript" charset="utf-8"
		src="../libs/cordova-2.4.0.js"></script>
</body>
</html>

$.ajax({ 
	type: "GET",
	url: "http://bo16x221mobileg1.dx.am/service.php?type=majGeoloc&params=groupe-1-latitude-47.3590900-longitude-3.3852100", 
	dataType: "json"
}).done(function(msg) { $("#DIV").html(msg); });; -->



