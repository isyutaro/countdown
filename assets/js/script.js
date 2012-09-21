$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 20*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " dia" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " y ";
			message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				// message += "left until the new year!";
				message += "Dias restantes para iniciar sitio"
			}
			else {
				message += "Quedan 20 dias para abrir sitio!";
			}
			
			note.html(message);
		}
	});
	
});
