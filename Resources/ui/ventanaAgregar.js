function ventanaAgregar(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosC');
    
    var ventanaMenu = require('ui/ventanaMenu');
 
   
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
	});
	
	var textoInicio= Titanium.UI.createLabel({
		text: 'Registro Usuario',
		font: {fontSize:25},
		top: 10,
		textAlign: 'center',
		color: 'black'
	});
	self.add(textoInicio);
		
	var botonCerrar = Ti.UI.createButton({
		title: 'Atras',
		backgroundColor: '#cddc39',
		color: 'black',
		left: 20,
		borderRadius: 10,
		width: 100,
		height: 40,
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
	
	self.add(botonCerrar);
	
	var entradaTexto = Ti.UI.createTextField({
		hintText: 'Nombre',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	  color: '#336699',
	  top: 90, left: 35,
	  width: 250, height: 60
	});
 
	var entradaApellido = Ti.UI.createTextField({
		hintText: 'Apellido',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	  color: '#336699',
	  top: 150, left: 35,
	  width: 250, height: 60
	});
	
	var entradaFono = Ti.UI.createTextField({
		hintText: 'Telefono',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	  color: '#336699',
	  top: 200, left: 35,
	  width: 250, height: 60
	});
	
	var entradaEmail = Ti.UI.createTextField({
		hintText: 'Email',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	  color: '#336699',
	  top: 250, left: 35,
	  width: 250, height: 60
	});
	
	var enviarTexto = Ti.UI.createButton({
		title:'Agregar usuario',
		backgroundColor: '#cddc39',
		color: 'black',
		right: 20,
		borderRadius: 10,
		width: 200,
		height: 40,
	});
	
	enviarTexto.addEventListener('click',function(){
		if(entradaTexto.value != '' && entradaApellido.value != '' && entradaFono.value != '' && entradaEmail.value != ''){
			bd.execute("INSERT INTO entradas (nombre,apellido,fono,email) VALUES (?,?,?,?)", entradaTexto.value,entradaApellido.value,entradaFono.value,entradaEmail.value);
			alert('Usuario Registrado: "'+entradaTexto.value+' '+entradaApellido.value+'".');
			ventanaMenu(bd).open();
		}else{
			alert('Debe estar lleno todos los campos.');
		}
	});
 
	self.add(entradaTexto);
	self.add(entradaApellido);
	self.add(entradaFono);
	self.add(entradaEmail);
	self.add(enviarTexto);
	return self;
}
module.exports = ventanaAgregar;