/* E NOTE */
function eAudio(){
	var aud1 = document.getElementById("audio1");
 	aud1.play();
  }
function eStop1(){
	var aud1 = document.getElementById("audio1");
	aud1.pause();
	aud1.currentTime = 0;
}
/* E NOTE ENDS*/

/* A NOTE */
function aAudio(){
	var aud2 = document.getElementById("audio2");
	aud2.play();
}
function aStop1(){
	var aud2 = document.getElementById("audio2");
	aud2.pause();
	aud2.currentTime = 0;
}
/* A NOTE ENDS*/

/* D NOTE */
function dAudio(){
	var aud3 = document.getElementById("audio3");
	aud3.play();
}
function dStop1(){
	var aud3 = document.getElementById("audio3");
	aud3.pause();
	aud3.currentTime = 0;
}
/* D NOTE ENDS*/

/* G NOTE */
function gAudio(){
	var aud4 = document.getElementById("audio4");
	aud4.play();
}
function gStop1(){
	var aud4 = document.getElementById("audio4");
	aud4.pause();
	aud4.currentTime = 0;
}
/* G NOTE ENDS*/

/* B NOTE */
function bAudio(){
	var aud5 = document.getElementById("audio5");
	aud5.play();
}
function bStop1(){
	var aud5 = document.getElementById("audio5");
	aud5.pause();
	aud5.currentTime = 0;
}
/* B NOTE ENDS*/

/* E NOTE*/
function stringEaudio(){
	var aud6 = document.getElementById("audio6");
	aud6.play();
}
function eEstop(){
	var aud6 = document.getElementById("audio6");
	aud6.pause();
	aud6.currentTime = 0;
}
/* E NOTE ENDS*/

function Loop(){
	var x= 0;
	setInterval(function(){
		x-=1;
		$('.field').css('background-position', x + 'px 0');
	}, 20);
}
function Loop2(){
	var x= 0;
	setInterval(function(){
		x+=1;
		$('.arloField').css('background-position', x + 'px 0');
	}, 20);
}
$(document).ready(function(){
	Loop();
	Loop2();
	$('.eString, .aString, .dString, .gString, .bString, .stringE').hover(function(){
		$(this).css("background-color", "#FFD700");
	}, function(){
		$(this).css("background-color", "white");
	});
	$('.eStop, .aStop, .dStop, .gStop, .bStop, .eEstop').hover(function(){
		$(this).css("background-color", "#FFD700");
	}, function(){
		$(this).css("background-color", "white");
	});
});