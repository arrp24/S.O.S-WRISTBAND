function ventanaInformacion(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
    
   // var ventana = require('ui/ventanaAngeles');
   
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - USUARIO',
		backgroundColor:'white'
	});
	
	var textoInicio= Titanium.UI.createLabel({
		text: 'Alerta Enviada',
		font: {fontSize:25},
		top: 10,
		textAlign: 'center',
		color: 'black'
	});
	self.add(textoInicio);
		
	var botonCerrar = Ti.UI.createButton({
		title: 'atras',
		backgroundColor: '#ea9c67',
		top: 20,
		left: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
	
	self.add(botonCerrar);
	return self;
}
module.exports = ventanaInformacion;