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
	
	facebook.appid = '1139084416109105';
	facebook.permissions = ['public_profile'];

	var image = Ti.UI.createImageView({
	  image:'/images/logo.png',
	  top: 90
	});
	self.add(image); 
	
	var botonCrear = Ti.UI.createButton({
		title:'Registrarse',
		top: 450,
		backgroundColor: '#cddc39',
		color: 'black',
		borderRadius: 10,
		width:200,
		height:40
	});
	self.add(botonCrear);

	botonCrear.addEventListener('click',function(e){
		ventanaAgregar(bd).open();
	});
	
	
	/*FACEBOOK*/
 	//
	// Login Status
	//
	var estado = Ti.UI.createLabel({
		text:'Logged In = ' + facebook.loggedIn,
		font:{fontSize:14},
		height:'auto',
		top: 590,
		textAlign:'center'
	});
	self.add(estado);
	
	var forceButton = Ti.UI.createButton({
		title: facebook.forceDialogAuth,
		bottom: 50,
		borderRadius: 10,
		width: 40,
		height: 40
	});
	forceButton.addEventListener('click', function() {
		facebook.forceDialogAuth = !facebook.forceDialogAuth;
		forceButton.title = "Force dialog: "+facebook.forceDialogAuth;
	});
	self.add(forceButton);
	
	function updateLoginStatus() {
		estado.text = 'Logged In = ' + facebook.loggedIn;
	}
	
	// capture
	facebook.addEventListener('login', updateLoginStatus);
	facebook.addEventListener('logout', updateLoginStatus);
	
	//
	// Login Button
	//
	self.add(facebook.createLoginButton({
		style : facebook.BUTTON_STYLE_WIDE,
		top : 550,
		borderRadius: 10,
		width: 200,
		height: 40
	}));
	
	function logVerified(){
		if (facebook.loggedIn == true) {
			ventanaMenu(bd).open();
		} else{
			if (facebook.loggedIn == false) {
				alert("Inicie sesión localmente o con su cuenta de Facebook");
			};
		};
		
	}
	
	return self;
}

module.exports = ventanaInicio;