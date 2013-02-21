gApp = new Array();
gApp.deviceready = false;
gApp.gcmregid = '';
	
window.onbeforeunload  =  function(e) {

    if (gApp.gcmregid.length > 0)
      window.GCM.unregister( GCM_Success, GCM_Fail );
};

document.addEventListener('deviceready', function() {

  gApp.DeviceReady = true;
  window.plugins.GCM.register("122317153655", "GCM_Event", GCM_Success, GCM_Fail );

}, false );


function GCM_Event(e)
{
  alert('event : '+ e.event);

  switch( e.event )
  {
	  case 'registered':
	    gApp.gcmregid = e.regid;
	    
	    if (gApp.gcmregid.length > 0)
	    {
	      alert('regid : ' + e.regid);
	      $.ajax({ 
				type: "GET",
				url: "http://bo16x221mobileg1.foreverhost.us/service.php?type=gcmRegistration&params=groupe*1*id*"+e.regid, 
				dataType: "json"
			}).done(function(msg){});
	    }
	    	
	    break;
	
	  case 'message':
		alert('message : ' + e.message);
	    alert('msgcnt : ' + e.msgcnt);
	    break;
	
	  case 'error':
	    alert('error : ' + e.msg);
	    break;

	  default:
	    alert('default');
	    break;
	  }
}

function GCM_Success(e)
{
  alert('success');
}

function GCM_Fail(e)
{
  alert('error : ' + e.msg);
}

function GCM_Send(msg, groupe)
{
  alert('bleg');
  $.ajax({  type: "GET",
			url: "http://bo16x221mobileg1.foreverhost.us/service.php?type=gcmNotification&params=groupe*"+groupe+"*notification*"+msg, 
			dataType: "json"
			}).done(function(msg){
			  	alert('bleh ' + msg);
			  });
}
