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

	let btnSuivant = document.getElementById('suiv');
	let btnPrecedent = document.getElementById('prec');
	let num = 0
	let dots = Array.from(document.querySelectorAll('.dot'))
	const tagLine = document.getElementById('tagLine')

    btnSuivant.addEventListener('click', () => {
		num = num + 1;
		if (num > slides.length -1)
			num = 0;
		if (num < 0)
			num = slides.length -1;
        document.getElementById("slide").src = "./assets/images/slideshow/" + slides[num].image;
		tagLine.innerHTML = slides[num].tagLine
		dots.forEach(element => {
			let dataId = element.dataset.id
		if (parseInt(dataId) === num){
			element.classList.add('dot_selected')
		} else {
			element.classList.remove('dot_selected')
		}
		});
	});

	btnPrecedent.addEventListener('click', () => {
		num = num - 1;
		if (num > slides.length -1)
			num = 0;
		if (num < 0)
			num = slides.length -1;
        document.getElementById("slide").src = "./assets/images/slideshow/" + slides[num].image;
		tagLine.innerHTML = slides[num].tagLine
		dots.forEach(element => {
			let dataId = element.dataset.id
		if (parseInt(dataId) === num){
			element.classList.add('dot_selected')
		} else {
			element.classList.remove('dot_selected')
		}
		});
	});




});