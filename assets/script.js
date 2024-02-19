const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", () => {

	const slide = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];
	let btnSuivant = document.getElementById('suiv');
	let btnPrecedent = document.getElementById('prec');
	let num = 0

    btnSuivant.addEventListener('click', () => {
		num = num + 1;
		if (num > slide.length -1)
			num = 0;
		if (num < 0)
			num = slide.length -1;
        document.getElementById("slide").src = "./assets/images/slideshow/" + slide[num];
	});

	btnPrecedent.addEventListener('click', () => {
		num = num - 1;
		if (num > slide.length -1)
			num = 0;
		if (num < 0)
			num = slide.length -1;
        document.getElementById("slide").src = "./assets/images/slideshow/" + slide[num];
	});




});