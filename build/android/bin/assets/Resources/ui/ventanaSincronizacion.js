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
	text: 'Por favor encienda su Bluetooth, conectese a HC-5',
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

var label3= Titanium.UI.createLabel({
	text: 'Contrasena: 1234',
	top: 90,
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
	backgroundColor:'#cddc39'
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

/*var novarumbluetooth = require('com.novarum.bluetooth');
Ti.API.info("module is => " + novarumbluetooth);


//Enable bluetooth//
novarumbluetooth.enableBluetooth();


var devicestable = Ti.UI.createListView({
		    // Maps the plainTemplate object to the 'plain' style name
		    templates: { 'plain': devicesTemplate},
		    // Use the plain template, that is, the plainTemplate object defined earlier
		    // for all data list items in this list view
		    defaultItemTemplate: 'plain',
		    top:50,
		    height:200          
		});
		
		devicestable.addEventListener('itemclick', function(e)
		{	
			var item = section.getItemAt(e.itemIndex);
			
			alert("Connecting to: "+item.rowname.text);
			novarumbluetooth.connect(item.rowmac.text);
			
		});			 
		
		
		self.add(devicestable);
		
		novarumbluetooth.addEventListener('nb_DevicesFound', function(e)
		{
			    tabledata.push({
			        // Maps to the rowtitle component in the template
			        // Sets the text property of the Label component
			        rowname : { text: e.name},
			        rowmac : { text: e.macaddress},
			        // Sets the regular list data properties
			        properties : 
			        {
			            itemId: 0
			        }
			    });		    
		    
			   section = Ti.UI.createListSection({items: tabledata});
			   devicestable.sections = [section];
			   
	 
		});
		
		novarumbluetooth.addEventListener('nb_onReceiveData', function(e)
		{
		   
		   alert(e.data); 
		    
		});
		
	
		novarumbluetooth.addEventListener('nb_onError', function(e)
		{
		   
		   alert(e.error); 
		    
		});
		
		novarumbluetooth.addEventListener('nb_onConnect', function(e)
		{
		   
		   alert("Connected"); 
		    
		});						
		
		
		
	    var sendbutton = Titanium.UI.createButton({
		   title: 'Send',
		   top: 10,
		   color: '#000',
		   width: '80%',
		   font: { fontSize:20},   
		});	
		
		sendbutton.addEventListener("click",function()
		{		 
			novarumbluetooth.sendData("Test");
		});			
		
		self.add(sendbutton);
		
		
	    var searchbutton = Titanium.UI.createButton({
		   title: 'Search Devices',
		   top: 10,
		   color: '#000',
		   width: '80%',
		   font: { fontSize:20},   
		});
		
		searchbutton.addEventListener("click",function()
		{		 
			novarumbluetooth.searchDevices();		
		});					
		
		self.add(searchbutton);*/
		
self.add(label);
self.add(label2);
self.add(label3);
self.add(button);

return self;

}
module.exports = ventanaSincronizacion;
