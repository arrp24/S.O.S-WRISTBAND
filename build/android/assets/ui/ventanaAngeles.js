function ventanaAngeles(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
	var ventanaAngelesAgregar = require('ui/ventanaAngelesAgregar');
		
	var ventanaAgregarAngeles = require('ui/ventanaAngelesAgregar');
	var ventanaListar = require('ui/ventanaListar');
	
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
		});
	
	var textoAngeles= Titanium.UI.createLabel({
		text: 'Registro de Angeles de la Guardia',
		font: {fontSize:30},
		color : 'black',
		textAlign: 'center',
		top: 10
		
	});
	self.add(textoAngeles);


	var botonAngeles = Ti.UI.createButton({
		title:'Registrar Angel',
		backgroundColor: '#cddc39',
		top: 175
	});
	var botonA = Ti.UI.createButton({
		title:'Ver Angeles',
		backgroundColor: '#cddc39',
		top: 275
	});
	
	self.add(botonAngeles);
	self.add(botonA);	

botonA.addEventListener('click',function(e){
		ventanaListar(bd).open();
	});
	
botonAngeles.addEventListener('click',function(e){
		ventanaAngelesAgregar(bd).open();
	});
 
	return self;
}

module.exports = ventanaAngeles;
 