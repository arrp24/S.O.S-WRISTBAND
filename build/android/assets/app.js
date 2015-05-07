(function() {
	
	var osname = Ti.Platform.osname;
	var	version = Ti.Platform.version;
	var	height = Ti.Platform.displayCaps.platformHeight;
	var	width = Ti.Platform.displayCaps.platformWidth;
	
	alert('Control de Base de datos');
	
	var bd = Ti.Database.open('baseDeDatos');
	bd.execute('DROP TABLE  IF EXISTS entradas');	
	bd.execute('CREATE TABLE IF NOT EXISTS entradas(id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT, fono INTERGER, email TEXT);');
	bd.execute('CREATE TABLE IF NOT EXISTS angeles(id INTEGER PRIMARY KEY, nombreA TEXT, apellidoA TEXT, fonoA INTERGER, emailA TEXT);');
	//alert('1');
	
	var ventanaInicio = require('ui/ventanaInicio');
	
	ventanaInicio(bd).open();
	
})();