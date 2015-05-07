function ventanaInicio(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosC');
		
	var ventanaAgregar = require('ui/ventanaAgregar');
	//var ventanaAlerta = require('ui/ventanaAlerta');
	
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
		top: 200
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
	
	
	/*
	var fb = require('facebook');
	 fb.appid = 1138932042791009;
	 fb.permissions = [FACEBOOK_APP_PERMISSIONS];
	 fb.authorize();
 	*/
	return self;
}

module.exports = ventanaInicio;