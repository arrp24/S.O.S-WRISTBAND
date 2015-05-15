function ventanaAngeles(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
	var ventanaAngelesAgregar = require('ui/ventanaAngelesAgregar');
	var ventanaListar = require('ui/ventanaListar');
	
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND',
		backgroundColor:'white'
		});
	
	var textoAngeles= Titanium.UI.createLabel({
		text: 'Angeles de la Guardia',
		font: {fontSize:30},
		color : 'black',
		textAlign: 'center',
		top: 10
		
	});
	self.add(textoAngeles);

	var botonAngeles = Ti.UI.createButton({
		title:'Registrar Angel',
		top: 175,
		backgroundColor: '#cddc39',
		color: 'black',
		borderRadius: 10,
		width:200,
		height:40
	});
	var ayuda1= Titanium.UI.createLabel({
		text: 'Ingresa un Ángel ',
		font: {fontSize:14},
		color : 'black',
		textAlign: 'center',
		top: 220
		
	});
	var botonDir = Ti.UI.createButton({
		title:'Contactos',
		top: 275,
		backgroundColor: '#cddc39',
		color: 'black',
		borderRadius: 10,
		width:200,
		height:40
	});
	var ayuda2= Titanium.UI.createLabel({
		text: 'Escoge un Ángel desde tu libreta',
		font: {fontSize:14},
		color : 'black',
		textAlign: 'center',
		top: 320
		
	});
	var botonA = Ti.UI.createButton({
		title:'Ver Angeles',
		backgroundColor: '#cddc39',
		color: 'black',
		top: 375,
		borderRadius: 10,
		width:200,
		height:40
	});
	
	var botonCerrar = Ti.UI.createButton({
		title: 'Atras',
		top: 5,
		backgroundColor: '#cddc39',
		color: 'black',
		borderRadius: 10,
		width: 100,
		height: 40,
		right: 20
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
	
	self.add(botonCerrar);
	self.add(botonAngeles);
	self.add(ayuda1);
	self.add(botonA);
	self.add(botonDir);
	self.add(ayuda2);	
	
	function selectContactEmails() {
	    var options = {};
 
    options.selectedPerson = function(e) {
        var mail = e.person.email.other;
        //var nombre = e.person.fullName;
        var nombre = e.person.firstName;
        var apellido = e.person.middleName + " " + e.person.lastName;
        var fono = e.person.getPhone().mobile;
        	
        	Ti.API.info("fono: " + fono);
	        Ti.API.info("Email: " + mail);
	        Ti.API.info("selected person: " + nombre + ' ' + apellido);
	        guardarAngel(nombre,apellido,fono,mail);
	    };
	    Ti.Contacts.showContacts(options);
	};
	
	function guardarAngel(nombre,apellido,fono,mail){
		bd.execute("INSERT INTO angeles (nombreA,apellidoA,fonoA,emailA) VALUES (?,?,?,?)", nombre,apellido,fono,mail);
		alert('Angel Registrado: "'+ nombre +' '+ apellido +'".');
	};//fin guardar Angel
	
	botonA.addEventListener('click',function(e){
		ventanaListar(bd).open();
	});
	
	botonAngeles.addEventListener('click',function(e){
		ventanaAngelesAgregar(bd).open();
	});
	
	botonDir.addEventListener('click',selectContactEmails);
	
	return self;
}

module.exports = ventanaAngeles;
 