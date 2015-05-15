function ventanaInicio(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosC');
	
	var platformName = Titanium.Platform.osname;
	var facebook;
	if (platformName == 'android' || platformName == 'iphone' || platformName == 'ipad') {
		facebook = require('facebook');
	} else {
		facebook = Titanium.Facebook;
	}
		
	var ventanaAgregar = require('ui/ventanaAgregar');
	var ventanaMenu = require('ui/ventanaMenu');
 
	
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - HOME',
		backgroundColor:'white'
		});
		
	facebook.appid = '495338853813822';
	facebook.permissions = ['publish_stream', 'read_stream'];

	
	var textoInicio= Titanium.UI.createLabel({
		text: 'S.O.S WRISTBAND 		Siente Seguro',
		font: {fontSize:35},
		top: 10,
		textAlign: 'center',
		color: 'black'
	});
	self.add(textoInicio);
	
	var botonCrear = Ti.UI.createButton({
		title:'Registrarse',
		backgroundColor: '#cddc39',
		top: 250
	});
		
	self.add(botonCrear);


	var imagen = Ti.UI.createImageView({
		imagen:'/images/logo.png',
		width: 15,
		height:15,
		top: 10
	});
	self.add(imagen); 
	
	botonCrear.addEventListener('click',function(e){
		ventanaAgregar(bd).open();
	});
	
	
	/*FACEBOOK*/
 	//
	// Login Status
	//
	var label = Ti.UI.createLabel({
		text:'Logged In = ' + facebook.loggedIn,
		font:{fontSize:14},
		height:'auto',
		top:10,
		textAlign:'center'
	});
	self.add(label);
	
	var forceButton = Ti.UI.createButton({
		title:'Force dialog: '+ facebook.forceDialogAuth,
		top:50,
		width:160,
		height:40
	});
	forceButton.addEventListener('click', function() {
		facebook.forceDialogAuth = !facebook.forceDialogAuth;
		forceButton.title = "Force dialog: "+facebook.forceDialogAuth;
	});
	self.add(forceButton);
	
	function updateLoginStatus() {
		label.text = 'Logged In = ' + facebook.loggedIn;
	}
	
	// capture
	facebook.addEventListener('login', updateLoginStatus);
	facebook.addEventListener('logout', updateLoginStatus);
	
	//
	// Login Button
	//
	self.add(facebook.createLoginButton({
		style : facebook.BUTTON_STYLE_WIDE,
		bottom : 30
	}));
	
	return self;
}

module.exports = ventanaInicio;