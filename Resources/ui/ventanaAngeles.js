function ventanaAngeles(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
	var ventanaAngelesAgregar = require('ui/ventanaAngelesAgregar');
	var ventanaListar = require('ui/ventanaListar');
	var cont = 0;
	
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
		top: 375
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

/*CODIGO PARA CARGAR LOS CONTACTOS*/	
	setTimeout(selectContactEmails, 1000);
 
	botonDir.addEventListener('click',function selectContactEmails(){
		var options = {};
    	var output = '';
 
    options.selectedPerson = function(e) {
        //var output = '';
        var mail = property in e.person.email;
        var name = property in e.person.name;
        //for (mail in e.person.email[property1] && nombre in e.person.name[property2]) {
            
            output += e.person.email[property][mail]+"--" + e.person.name[property][name] ;
         
	        Ti.API.info("output: " + output);
	   };
	    Ti.Contacts.showContacts(options);
	    alert("Selecciono a " + output);
	});
	
	/*Insertar Angeles*/
	var enviarTextoA = Ti.UI.createButton({
		title:'Angel #'+ cont,
		backgroundColor: '#cddc39',
		top:450
	});
	
	enviarTextoA.addEventListener('click',function(){
		if(entradaNombre.value != '' && entradaApellidoA.value != ''){
					bd.execute("INSERT INTO angeles (nombreA,apellidoA,fonoA,emailA) VALUES (?,?,?,?)", entradaNombre.value,entradaApellidoA.value,entradaFonoA.value,entradaEmailA.value);
					alert('Angel Registrado: "'+entradaNombre.value+' '+entradaApellidoA.value+'".');
					ventanaAngeles(bd).open();
				}else{
					alert('Deben estar llenos todos los campos.');
				}//fin else
	});//fin eventListener
	
	self.add(enviarTextoA);
	
	
	
	return self;
}

module.exports = ventanaAngeles;
 