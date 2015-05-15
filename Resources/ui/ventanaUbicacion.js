function ventanaUbicacion(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');

var ventanaEnvioAlerta = require('ui/ventanaEnvioAlerta');
var longitude;
var latitude;
		
var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND-UBICACION',
		backgroundColor:'white'
	});

var label= Titanium.UI.createLabel({
	text: 'UBICACION',
	top: 2,
	width:400,
	height:'auto',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:14,
		shadowColor: 'white'
			},
	textAlign:'center',
	
});

var currentLocationLabel = Titanium.UI.createLabel({
	text:'Ubicacion Actual',
	font:{fontSize:14, fontWeight:'bold'},
	color:'#111',
	top:110,
	left:10,
	height:15,
	top:10,
	width:300
});
self.add(currentLocationLabel);

var currentLocation = Titanium.UI.createLabel({
	text:'',
	font:{fontSize:11},
	color:'#444',
	top:30,
	left:10,
	height:15,
	width:300
});
self.add(currentLocation);

var reverseGeoLabel = Titanium.UI.createLabel({
	text:'Direccion',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#111',
	top:50,
	left:10,
	height:15,
	width:300
});
self.add(reverseGeoLabel);

var reverseGeo = Titanium.UI.createLabel({
	text:'',
	font:{fontSize:11},
	color:'#444',
	top:70,
	left:10,
	height:15,
	width:300
});
self.add(reverseGeo);

var mapview = Titanium.Map.createView({
	top: 100,
	height:200,
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{
		latitude: -0.2106,
		longitude: -78.4913,
		latitudeDelta:0.006, 
		longitudeDelta:0.006
		},
	animate:true,
	regionFit:true,
	userLocation:true,
	animated:true,
	anchorPoint:true,
	
	
		
});

Ti.Geolocation.preferredProvider = "gps";


if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'S.O.S Wristband', message:'Encienda su GPS'}).show();
}


//Encuentra la ubicacion actual	
Titanium.Geolocation.getCurrentPosition(function(e)
	{
		
		longitude = e.coords.longitude;
		latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info('speed ' + speed);
		currentLocation.text = 'longitud:' + longitude + ' latitud: ' + latitude;

		Titanium.API.info('Ubicacion Actual: ' + new Date(timestamp) + ' longitud ' + longitude + ' latitud ' + latitude + ' accuracy ' + accuracy);
	});

	
var myCallback = function(e) {
 
    myComonent.setTitle(e.places.address);
};

var getAddress = function(latitude,longitude, callback){
    Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
        {
            places = evt.places;
            Ti.API.info("Direccion = "+JSON.stringify(evt));
 
        if(callback) {
            callback.call(null, evt);
        }
  });
  

reverseGeoLabel.text = getAddress(mapview.region.latitude,mapview.region.longitude, myCallback);
};

var botonAlerta = Ti.UI.createButton({
		title:'Auxilio',
		backgroundColor: '#cddc39',
		color: 'black',
		top:350,
		borderRadius: 10,
		width: 200,
		height: 40
	});
	
	botonAlerta.addEventListener('click',function(e){
		//alert('Enviando Alerta');
		//ventanaEnvioAlerta(bd,longitude,latitude).open();
		Titanium.Media.takeScreenshot(function(e) {
	        var emailDialog = Titanium.UI.createEmailDialog();
	        emailDialog.setToRecipients(['arrp19@gmail.com']);
	        emailDialog.setSubject('Alerta');
	        emailDialog.setMessageBody('Alerta Necesito Ayuda......\n'+'Longitud = ' + longitude +'\n Latitud = ' + latitude);
	        emailDialog.setHtml(true);
	
	        emailDialog.addEventListener('complete', function(e) {
	            if(e.result == emailDialog.SENT) {
	
	                alert("CONFIRMACION DE ENVIO DE ALERTA");
	            }
	        });
	        emailDialog.open();
	    });
	    
	    /*SMS SEND*/
	   /*self.addEventListener('open', function () {
		var SMSDialog = Titanium.UI.createSMSDialog();
			if (!SMSDialog.isSupported()) {
				Ti.UI.createAlertDialog({
					title: 'Error',
					message: 'SMS not available'
				}).show();
				return;
			}
	
			SMSDialog.setToRecipients(['+593992900868']);
			SMSDialog.setMessageBody('Alerta Necesito Ayuda......\n'+'Longitud = ' + longitude +'\n Latitud = ' + latitude);
	
			SMSDialog.addEventListener('complete', function (e) {
				if (e.result === SMSDialog.SENT) {
					Ti.API.info('SMS was sent');
				} else if (e.result === SMSDialog.CANCELLED) {
					Ti.API.info('SMS was cancelled');
				} else if (e.result === SMSDialog.FAILED) {
					Ti.API.info('SMS was failed');
				}
			});
	
			SMSDialog.open();
		});// Fin SMS*/
	});

var boton = Titanium.UI.createButton ({
	title: 'Cerrar',
	backgroundColor: '#cddc39',
	color: 'black',
	top:450,
	borderRadius: 10,
	width: 200,
	height: 40
});

 
    
boton.addEventListener('click',function(e){
	self.close();
});
self.add(botonAlerta);
self.add(boton);
self.add(mapview);
return self;

}
module.exports = ventanaUbicacion;