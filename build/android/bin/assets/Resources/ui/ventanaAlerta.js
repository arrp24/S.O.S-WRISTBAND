function ventanaAlerta(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatosA');
    
    var email = [];
    
	var self = Ti.UI.createWindow({
		title: 'S.O.S WRITSBAND - ALERTA',
		backgroundColor:'white'
	});
	
	var textoInicio= Titanium.UI.createLabel({
		text: 'ALERTA ENVIADA',
		font: {fontSize:45},
		top: 20,
		textAlign: 'center',
		color: 'black'
	});
	self.add(textoInicio);
	
	var botonCerrar = Ti.UI.createButton({
		title: 'Cancelar',
		top: 35,
		right: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
	self.add(botonCerrar);
	
	
	

	var entradas = bd.execute('SELECT emailA FROM angeles;');
		
		while (entradas.isValidRow()){
			var i = 0;
			email[i] += entradas.fieldByName('emailA');
			i++;
		}
		alerta(email);
	entradas.close();
	
	/**
	 *-------------------- 
	 *FUNCION MANDAR EMAIL
	 *--------------------
	 *  **/
	//function alerta(mls) {
	function alerta() {
		alert('AVIDO DE EMERGENCIA ENVIADO');
		
		var mails = ["arrp@live.com", "alebonilla7@gmail.com"];
		
		
		for (i = 0; i < mls.length; i++) { 
		    mails[i] += mls[i];
		}
		
		var asunto = "EMERGENCIA";
		var texto = "NECESITO DE TU AYUDA... UBICACION: -0.210082, -78.487369";
		
		/* es necesario un intent que levante la actividad deseada */
        var itSend = new Intent();
                            
        /* vamos a enviar texto plano */
        itSend.setType("plain/text");
                            
       	/* colocamos los datos para el envío */
        itSend.putExtra(Ti.UI.Android.content.Intent.EXTRA_EMAIL, mails);                            
        itSend.putExtra(Ti.UI.Android.content.Intent.EXTRA_SUBJECT, asunto);
        itSend.putExtra(Ti.UI.Android.content.Intent.EXTRA_TEXT, texto);
        alert('AVIDO DE EMERGENCIA ENVIADO');
	}//function alerta
	
	/**
	 *-------------------- 
	 *FUNCION MANDAR EMAIL 2
	 *--------------------
	 *  **/
	function alertaMail() {
		var emailDialog = Ti.UI.createEmailDialog();
			emailDialog.subject = "EMERGENCIA";
			emailDialog.toRecipients = ['arrp@live.com','alebonilla7@gmail.com'];
			emailDialog.messageBody = '<b>Auxilio!! Me encuentro en una Emergencia</b>';
			emailDialog.open();
	}//function alerta
	
	/**
	 *-------------------- 
	 *FUNCION MANDAR SMS
	 *--------------------
	 *  **/
	
	function enviarSMS() {
	    var module = require('com.omorandi');
	    Ti.API.info("module is => " + module);
	
	    //create the smsDialog object
	    var smsDialog = module.createSMSDialog();
	    //check if the feature is available on the device at hand
	    if (!smsDialog.isSupported())
	    {
	        //falls here when executed on iOS versions < 4.0 and in the emulator
	        var a = Ti.UI.createAlertDialog({title: 'warning', message: 'the required feature is not available on your device'});
	        a.show();
	    }
	    else
	    {
	        //pre-populate the dialog with the info provided in the following properties
	        smsDialog.recipients = ['+593992900868'];
	        smsDialog.messageBody = 'Test message from me';
	
	        //set the color of the title-bar
	        smsDialog.barColor = 'red';
		
	        //add an event listener for the 'complete' event, in order to be notified about the result of the operation
	        smsDialog.addEventListener('complete', function(e){
	            Ti.API.info("Result: " + e.resultMessage);
	            var a = Ti.UI.createAlertDialog({title: 'complete', message: 'Result: ' + e.resultMessage});
	            a.show();
	            if (e.result == smsDialog.SENT){
	                alert("MENSAJE DE ALERTA ENVIADO");
	            } else if (e.result == smsDialog.FAILED){
	               alert("MENSAJE DE ALERTA NOENVIADO");
	            }
	        });
	
	        //open the SMS dialog window with slide-up animation
	        smsDialog.open({animated: true});
	    }
	};
     
}
module.exports = ventanaAlerta;