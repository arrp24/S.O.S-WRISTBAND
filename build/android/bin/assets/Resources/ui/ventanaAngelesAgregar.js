function ventanaAngelesAgregar(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
    var ventanaAngeles = require('ui/ventanaAngeles');
    var ventanaEnvioAlerta = require('ui/ventanaEnvioAlerta');
    
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - ANGELES',
		backgroundColor:'white'
	});
		
	var botonCerrar = Ti.UI.createButton({
		title: 'atras',
		backgroundColor:'#ea9c67',
		top: 20,
		left: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
	
	self.add(botonCerrar);
	
	var entradaNombre = Ti.UI.createTextField({
		hintText: 'Nombre',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 90, left: 35,
	  width: 250, height: 60
	});
 
	var entradaApellidoA = Ti.UI.createTextField({
		hintText: 'Apellido',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 150, left: 35,
	  width: 250, height: 60
	});
	
	var entradaFonoA = Ti.UI.createTextField({
		hintText: 'Telefono',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 200, left: 35,
	  width: 250, height: 60
	});
	
	var entradaEmailA = Ti.UI.createTextField({
		hintText: 'Email',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 250, left: 35,
	  width: 250, height: 60
	});
	
	var enviarTextoA = Ti.UI.createButton({
		title:'Agregar Angel',
		backgroundColor: '#cddc39',
		top:350
	});
	
	enviarTextoA.addEventListener('click',function(){
		var i = 0;
		do {
			if(entradaNombre.value != '' && entradaApellidoA.value != ''){
					bd.execute("INSERT INTO angeles (nombreA,apellidoA,fonoA,emailA) VALUES (?,?,?,?)", entradaNombre.value,entradaApellidoA.value,entradaFonoA.value,entradaEmailA.value);
					alert('Angel Registrado: "'+entradaNombre.value+' '+entradaApellidoA.value+'".');
					ventanaAngeles(bd).open();
				}else{
					alert('Deben estar llenos todos los campos.');
				}//fin else
				
				console.log(i);
		    i++;
		}
		while (i === 3);
		ventanaEnvioAlerta(bd).open();
	});//fin eventListener
	
	self.add(entradaNombre);
	self.add(entradaApellidoA);
	self.add(entradaFonoA);
	self.add(entradaEmailA);
	self.add(enviarTextoA);
	return self;
}
module.exports = ventanaAngelesAgregar;