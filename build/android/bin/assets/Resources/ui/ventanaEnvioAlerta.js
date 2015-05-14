function ventanaEnvioAlerta(bd,longitude,latitude){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
	
	var ventanaInformacion = require('ui/ventanaInformacion');
	var ventanaUbicacion = require('ui/ventanaUbicacion');
/**ENVIAR MENSAJE EMAIL**/
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - ALERTA',
		backgroundColor:'white'
		});

	var btn = Ti.UI.createButton({
		title:'Enviar Alerta',
		backgroundColor: '#8d2242',
		top:200
	});
	/**comentario*/
	btn.addEventListener('click', function(e) {
	    Titanium.Media.takeScreenshot(function(e) {

	        var emailDialog = Titanium.UI.createEmailDialog();
	        emailDialog.setToRecipients(['arrp19@gmail.com']);
	        emailDialog.setSubject('Alerta');
	        emailDialog.setMessageBody('Alerta......\n'+'Longitud = ' + longitude +'\n Latitud = ' + latitude);
	        emailDialog.setHtml(true);
	
	        emailDialog.addEventListener('complete', function(e) {
	            if(e.result == emailDialog.SENT) {
	
	                alert("CONFIRMACION DE ENVIO DE ALERTA");
	            }
	        });
	        emailDialog.open();
	    });
	});
	
	self.add(btn);
	
	var botonCerrar = Ti.UI.createButton({
		title:'Cerrar',
		backgroundColor: '#8d2242',
		top:270
	});
	
	botonCerrar.addEventListener('click',function(e){
		self.close();
	});
	
	self.add(botonCerrar);

	return self;

	
/**ENVIAR MENSAJE TXT**/	
	var window = Ti.UI.createWindow({
		backgroundColor:'blue'
	});
	
	if (Ti.Platform.name == "android") {
		var smsMod = require('ti.android.sms');
		Ti.API.info("module is => " + smsMod);
	
		smsMod.addEventListener('complete', function(e){
			Ti.API.info('Result: ' + (e.success?'success':'failure') + ' msg: ' + e.resultMessage);
			var result = 'unexpected result...';
			switch (e.result) {
				case smsMod.SENT: 
					result = 'SENT';
					break;
				case smsMod.DELIVERED: 
					result = 'DELIVERED';
					break;
				case smsMod.FAILED:
					result = 'FAILED';
					break;
				case smsMod.CANCELLED:
					result = 'CANCELLED';
					break;
			}
			
			alert('Message sending result: ' + result);
		} );
		
		//smsMod.example('address', 'body', 'id');
		
		var addr_lb = Ti.UI.createLabel({
			text: 'Number: ',
			textAlign: 'left',
			left: 10,
			top: 50,
			width: 80
		});
		window.add(addr_lb);
		var addr_tf = Ti.UI.createTextField({
			top: 50,
			left: 100,
			width: 200,
			height: 44
		});
		window.add(addr_tf);	
		
		var text_lb = Ti.UI.createLabel({
			text: 'Text: ',
			textAlign: 'left',
			left: 10,
			top: 110,
			width: 80
		});
		window.add(text_lb);
		var text_tf = Ti.UI.createTextField({
			top: 110,
			left: 100,
			width: 200,
			height: 44
		});
		window.add(text_tf);	
		
		var bt = Ti.UI.createButton({
			title: 'send', 
			width: 100, 
			height: 44, 
			left: 200, 
			top: 160});
		window.add(bt);
		
	
		bt.addEventListener('click', function(){
			if (addr_tf.value && text_tf.value) {
				smsMod.sendSMS(addr_tf.value, text_tf.value);
				addr_tf.value = "";
				text_tf.value = "";
				addr_tf.focus();					
			}
			else {
				alert('Please provide recipient number and text');
			}
		});
		
		
	}
	else {
		alert('Nothing to see on iOS');
	}
/*DESCOMENTAR PARA MOSTRAR ENVIO DE SMS*/
	//return window;
}
module.exports = ventanaEnvioAlerta;