function ventanaListar(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
    var ventanaAngelesEditar = require('ui/ventanaAngelesEditar');
    
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
	});
		
	var botonCerrar = Ti.UI.createButton({
		title: 'Atras',
		top: 25,
		backgroundColor: '#ea9c67',
		right: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
		
	var tabla = Ti.UI.createTableView({
		editable:true
	});
	
	tabla.addEventListener('delete',function(e){
		bd.execute('DELETE FROM angeles WHERE id='+e.source.id+';');
		alert("Angeles id: "+e.source.id+" borrada.");
	});
	
	tabla.addEventListener('click',function(e){
		ventanaAngelesEditar(e.source.id,bd).open();
		self.close();
	});
	
	var angeles = bd.execute('SELECT id,nombreA,apellidoA, fonoA, emailA FROM angeles;');
	while (angeles.isValidRow())
	{
	  tabla.appendRow(Ti.UI.createTableViewRow({
	  	title: angeles.fieldByName('nombreA')+" "+angeles.fieldByName('apellidoA')+" "+angeles.fieldByName('fonoA')+" "+angeles.fieldByName('emailA'),
	  	id: angeles.fieldByName('id')
	  }));
	  angeles.next();
	}
	angeles.close();
	
	self.add(tabla);
	self.add(botonCerrar);
	
	return self;
}
module.exports = ventanaListar;