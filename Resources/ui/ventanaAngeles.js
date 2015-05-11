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
	
	var botonDir = Ti.UI.createButton({
		title:'Ver Contactos',
		backgroundColor: '#cddc39',
		top: 275
	});
	
	self.add(botonDir);	

	/*botonDir.addEventListener('click',function(e){
		var singleValue = ['recordId', 'firstName', 'middleName', 'lastName'];
		var multiValue = ['email', 'address', 'phone', 'instantMessage'];
		
		var people = Ti.Contacts.getAllPeople();
		
		Ti.API.info('Total contacts: ' + people.length);
	
		for (var i=0, ilen=people.length; i<ilen; i++){
		  Ti.API.info('---------------------');
		  
		  var person = people[i];
		  
		  for (var j=0, jlen=singleValue.length; j<jlen; j++){
		    Ti.API.info(singleValue[j] + ': ' + person[singleValue[j]]);
		  }
		  
		  for (var j=0, jlen=multiValue.length; j<jlen; j++){
		    Ti.API.info(multiValue[j] + ': ' + JSON.stringify(person[multiValue[j]]));
		  }
		}
		Ti.Contacts.showContacts(singleValue);
	});*/
	
	setTimeout(selectContactEmails, 1000);
 
	function selectContactEmails() {
	    var options = {};
    	var output = '';
 
    options.selectedPerson = function(e) {
        var output = '';
        for (property in e.person.email) {
            for (item in e.person.email[property]) {
                output += "\n" + property + '[' + item + ']: ' + e.person.email[property][item] + '; ';
            }
        }
	        Ti.API.info("output: " + output);
	        //Ti.API.info("email[home]: " + e.person.email["home"]);
	        //Ti.API.info("email.home: " + e.person.email.home);
	        //Ti.API.info("selected person: " + e.person.fullName);
	    };
	    Ti.Contacts.showContacts(options);
	};
	
	botonDir.addEventListener('click',selectContactEmails);
	return self;
}

module.exports = ventanaAngeles;
 