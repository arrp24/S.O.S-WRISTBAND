function ventanaSincronizacion(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');

var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND ',
		backgroundColor:'white'
	});


var label= Titanium.UI.createLabel({
	text: 'SINCRONIZACION',
	top: 2,
	width:400,
	height:'auto',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:22,
		shadowColor: 'white'
			},
	textAlign:'center',
});

var label2= Titanium.UI.createLabel({
	text: 'Por favor encienda su Bluetooth',
	top: 40,
	width:400,
	height:'auto',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:18,
			},
	textAlign:'center',
	background: '#F5D0A9'

});


var button = Titanium.UI.createButton ({
	title: 'Sincronizar',
	width:180,
	height:50,
	backgroundColor:'#C8FE2E'
});

button.addEventListener('click',function(e){
	alert('Sincronizando');
	
});

var button = Titanium.UI.createButton ({
	title: 'Cerrar',
	width:180,
	height:50,
	backgroundColor:'#C8FE2E'
});

button.addEventListener('click',function(e){
	self.close();
	
});
self.add(label);
self.add(label2);
self.add(button);

return self;

}
module.exports = ventanaSincronizacion;
