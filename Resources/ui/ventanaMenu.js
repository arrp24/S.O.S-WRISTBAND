function ventanaMenu(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');

		
	var ventanaAngeles = require('ui/ventanaAngeles');
	var ventanaSincronizacion = require('ui/ventanaSincronizacion');
	var ventanaUbicacion = require('ui/ventanaUbicacion');
	
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
		});
	
	var textoMenu= Titanium.UI.createLabel({
		text: 'MENU',
		font: {fontSize:30},
		color : 'black',
		textAlign: 'center',
		top: 10
		
	});
	self.add(textoMenu);

	var botonAngeles = Ti.UI.createButton({
		title:'Angeles',
		backgroundColor: '#cddc39',
		top: 175
	});
	var botonSincronizar = Ti.UI.createButton({
		title:'Sincronizar',
		backgroundColor: '#cddc39',
		top: 275
	});
	
	var botonAlerta = Ti.UI.createButton({
		title:'Enviar Alerta',
		backgroundColor: '#cddc39',
		top: 375
	});
	
	self.add(botonAngeles);
	self.add(botonSincronizar);	
	self.add(botonAlerta);	
	
	
	botonAngeles.addEventListener('click',function(e){
		ventanaAngeles(bd).open();
	});
 
	botonSincronizar.addEventListener('click',function(e){
		ventanaSincronizacion(bd).open();
	});

	botonAlerta.addEventListener('click',function(e){
		ventanaUbicacion(bd).open();
	});
	
	/**Login Facebook*/
	/*if(ventanaMenu().visible == true){
			bd.execute("INSERT INTO entradas (nombre,apellido,fono,email) VALUES (?,?,?,?)", nombre,id," "," ");
			alert('Usuario Registrado: "'+entradaTexto.value+' '+entradaApellido.value+'".');
		}else{
			alert('Debe estar lleno todos los campos.');
	}*/
	
	return self;
}

module.exports = ventanaMenu;
 