function ventanaAngelesEditar(id,bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
    	var angeles = bd.execute('SELECT id,nombreA,apellidoA,fonoA,emailA FROM angeles WHERE id='+id+';');
 
    var ventanaListar = require('ui/ventanaListar');
    
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
	});
		
	var botonCerrar = Ti.UI.createButton({
		title: 'Cerrar',
		backgroundColor:'#ea9c67',
		top: 25,
		right: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		ventanaListar(bd).open();
		self.close();
	});
	
	self.add(botonCerrar);
	
	var entradaNombre = Ti.UI.createTextField({
		
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 90, left: 35,
	  width: 250, height: 60,
	  value:angeles.fieldByName('nombreA')
	});
 
	var entradaApellidoA = Ti.UI.createTextField({
	
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 160, left: 35,
	  width: 250, height: 60,
	  value:angeles.fieldByName('apellidoA')
	});
	
	var entradaFonoA = Ti.UI.createTextField({
	
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 210, left: 35,
	  width: 250, height: 60,
	  value:angeles.fieldByName('apellidoA')
	});
	
	var entradaEmailA = Ti.UI.createTextField({
	
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 280, left: 35,
	  width: 250, height: 60,
	  value:angeles.fieldByName('apellidoA')
	});
	
	var enviarTextoA = Ti.UI.createButton({
		title:'Actualizar entrada',
		backgroundColor: '#cddc39',
		top:350
	});
	
	enviarTextoA.addEventListener('click',function(){
		if(entradaNombre.value != '' && entradaApellidoA.value != ''){
			bd.execute('UPDATE angeles SET nombreA=?, apellidoA=?, fonoA=?, emailA=? WHERE id=?;',entradaNombre.value,entradaApellidoA.value,entradaFonoA.value,entradaEmailA.value,id);
			alert('Angel actualizado: "'+entradaNombre.value+' '+entradaApellidoA.value+'".');
			ventanaListar(bd).open();
			self.close();
		}else{
			alert('Debes llenar al menos un campo.');
		}
	});
 
	self.add(entradaNombre);
	self.add(entradaApellidoA);
	self.add(entradaFonoA);
	self.add(entradaEmailA);
	self.add(enviarTextoA);
	return self;
}
module.exports = ventanaAngelesEditar;