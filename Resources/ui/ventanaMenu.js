function ventanaMenu(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
	
	var ventanaAngeles = require('ui/ventanaAngeles');
	var ventanaSincronizacion = require('ui/ventanaSincronizacion');
	var ventanaUbicacion = require('ui/ventanaUbicacion');
	var state = 'Inactive';
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
	});
	self.addEventListener("load", logInStatus);
	
	var textoInicio= Titanium.UI.createLabel({
		text: 'S.O.S WRITSBAND',
		font: {fontSize:35},
		top: 10,
		textAlign: 'center',
		color: 'black'
	});
	self.add(textoInicio);
	var texto2Inicio= Titanium.UI.createLabel({
		text: 'Siéntete Seguro!',
		font: {fontSize:25},
		top: 45,
		textAlign: 'center',
		color: 'black'
	});
	self.add(texto2Inicio);
	
	var textoMenu= Titanium.UI.createLabel({
		text: 'MENU',
		font: {fontSize:20},
		color : 'black',
		textAlign: 'center',
		top: 85
	});
	self.add(textoMenu);

	var botonAngeles = Ti.UI.createButton({
		title:'Angeles',
		backgroundColor: '#cddc39',
		color: 'black',
		top: 175,
		borderRadius: 10,
		width: 200,
		height: 40
	});
	var ayuda1= Titanium.UI.createLabel({
		text: 'Selecciona a tus Ángeles ',
		font: {fontSize:14},
		color : 'black',
		textAlign: 'center',
		top: 215
	});
	var botonSincronizar = Ti.UI.createButton({
		title:'Sincronizar',
		backgroundColor: '#cddc39',
		color: 'black',
		top: 275,
		borderRadius: 10,
		width: 200,
		height: 40
	});
	var ayuda2= Titanium.UI.createLabel({
		text: 'Sincroniza tu S.O.S-WRISTBAND',
		font: {fontSize:14},
		color : 'black',
		textAlign: 'center',
		top: 315
	});
	var botonAlerta = Ti.UI.createButton({
		title:'Enviar Alerta',
		backgroundColor: '#cddc39',
		color: 'black',
		top: 375,
		borderRadius: 10,
		width: 200,
		height: 40
	});
	var ayuda3= Titanium.UI.createLabel({
		text: 'Has click para solicitar Ayuda',
		font: {fontSize:14},
		color : 'black',
		textAlign: 'center',
		top: 415
	});
	
	self.add(botonAngeles);
	self.add(ayuda1);
	self.add(botonSincronizar);
	self.add(ayuda2);	
	self.add(botonAlerta);
	self.add(ayuda3);	
	
	
	botonAngeles.addEventListener('click',function(e){
		ventanaAngeles(bd).open();
	});
 
	botonSincronizar.addEventListener('click',function(e){
		ventanaSincronizacion(bd).open();
	});

	botonAlerta.addEventListener('click',function(e){
		ventanaUbicacion(bd).open();
	});
	
	var estado = Ti.UI.createLabel({
		text:'Logged In = ' + state,
		font:{fontSize:14},
		height:'auto',
		left: 590,
		textAlign:'center'
	});
	self.add(estado);
	
	function logInStatus(){
		alert('BIENVENIDO A S.O.S WRISTBAND ');
		state = 'Active';
		estado.text = 'Logged In = ' + state;
	}
	
	return self;
}

module.exports = ventanaMenu;
 