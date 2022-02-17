
/*---------------------header----------------------*/
var header = document.getElementById("header")
window.onscroll = function() {
	"use strict";
	if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
	  header.style.background = "black";
	  header.style.transition = ".4s ease all";
	} else {
	  header.style.background = "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.09567577030812324) 15%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0.3) 100%)";
	  header.style.transition = ".4s ease all";
	}
};

/*--------------------Carouseles----------------------*/
let filas = document.querySelectorAll('.contenedor-carousel');
let flechasIzquierda = document.querySelectorAll(".flecha-izquierda");
let flechasDerecha = document.querySelectorAll(".flecha-derecha");

//--------- Event Listener para las flechas izquierda. ----------
flechasIzquierda.forEach(flechaIzquierda =>{
	flechaIzquierda.addEventListener('click', () =>{
		let id = flechaIzquierda.getAttribute("id");
		let fila = id.substr(-1);
		filas[fila-1].scrollLeft -= filas[fila-1].offsetWidth;
	});
});

//---------- Event Listener para las flechas derechas. ----- -----
flechasDerecha.forEach(flechaDerecha =>{
	flechaDerecha.addEventListener('click', () =>{
		let id = flechaDerecha.getAttribute("id");
		let fila = id.substr(-1);
		filas[fila-1].scrollLeft += filas[fila-1].offsetWidth;
	});
});

//----- ----- Hover peliculas de acuerdo al carousel ----- -----
filas.forEach(fila =>{
	let peliculasFila = fila.querySelectorAll('.pelicula');
	console.log(peliculasFila);
	peliculasFila.forEach((pelicula) => {
		pelicula.addEventListener('mouseenter', (e) => {
			const elemento = e.currentTarget;
			setTimeout(() => {
				peliculasFila.forEach(pelicula => pelicula.classList.remove('hover'));
				elemento.classList.add('hover');
			}, 300);
		});
	});

	fila.addEventListener('mouseleave', () => {
		peliculasFila.forEach(pelicula => pelicula.classList.remove('hover'));
	});
});
