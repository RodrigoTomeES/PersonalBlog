// JavaScript

$(window).scroll(function(){
	if (window.pageYOffset >= 440) {
		$('header .background .centrar').css("background","#fff");
		$('header .background .centrar').css("box-shadow","0px 2px 4px rgba(0, 0, 0, 0.3)");
		$('header .background .centrar .white_menu').css("background","rgba(51,51,51,.8)");
		}
		else {
		$('header .background .centrar').css("background","transparent");
		$('header .background .centrar').css("box-shadow","none");
		$('header .background .centrar .white_menu').css("background","transparent");
	}
});

$(document).ready(main);

var contador = 1;

function main () {
	$('.button').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	//Cerrar solo el menu
	$('.cerrar').click(function(){
		if (contador == 0) {
			$('nav').animate({
				left: '-100%'
			});
			contador = 1;
		}
	});
}

// var img = document.getElementById('image');
// var css="background-image: url("+img.getAttribute("src")+")"; //el texto y url dentro de Style
//    $('main section .card_row .image img, main section .card .image img').attr('style', css); //Agregamos la Etiqueta Style junto con la "Variable"
//    $('main section .card_row .image img, main section .card .image img').removeAttr("src"); //Quitamos el Atributo SRC de la Imagen

// $(window).on('scroll',parallax);

// function parallax(){
//   //obtener el nivel de scroll
//   var s = $(window).scrollTop();
//   // efecto parallax para los fondos
//   function parallaxBg(el,t){
//     $(el).css({
//       'background-attachment': 'fixed',
//       'background-position': 'center ' + -(s*t) + 'px'
//     })
//   }
//   // efecto parallax para los textos
//   function parallaxFront(el,t){
//     $(el).css({
//       'position': 'relative',
//       'top': -(s*t) + 'px'
//     })
//   }
//   parallaxBg('header',.1);
// }