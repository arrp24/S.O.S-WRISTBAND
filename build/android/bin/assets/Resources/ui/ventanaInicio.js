function ventanaInicio(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosC');
	/*if (Ti.Facebook.loggedIn == true) {
		ventanaMenu(bd).open();
	} else{
		alert("Login Please");
	};*/
	
	var ventanaAgregar = require('ui/ventanaAgregar');
	var ventanaMenu = require('ui/ventanaMenu');
 
	
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - HOME',
		backgroundColor:'white'
		});
	
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
		top: 150
	});
	/*var botonListar = Ti.UI.createButton({
		title:'Ver Usuarios',
		top: 275
	});*/
	
	self.add(botonCrear);
	//self.add(botonListar);


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
 	var fb = require('facebook');
		fb.appid = 1138932042791009;
		fb.permissions = ['public_profile']; // Permissions your app needs
		fb.forceDialogAuth = true;
		fb.addEventListener('login', function(e) {
		    if (e.success) {
		        alert('Inicio de Sección Exitosa');
		        ventanaMenu(bd).open();
		    } else if (e.error) {
		        alert("Error al iniciar sección, "+e.error);
		    } else if (e.cancelled) {
		        alert("Canceled");
		    }
		});
		fb.authorize();
		
	fb.addEventListener('logout', function(e) {
	    alert('Logged out');
	});
	fb.logout();
	
	self.add(fb.createLoginButton({
	    top : 250,
	    style : fb.BUTTON_STYLE_WIDE
	}));
	
	
	return self;
}

module.exports = ventanaInicio;