//-------------------Работа бургер меню------------------------
var navigation = document.querySelector(".nav-list");
var burgerMenu = document.querySelector(".burger-menu");

function myFunction() {
	if (navigation.className === "nav-list") {
		navigation.className += " nav-list--expand";
	} else {
		navigation.className = "nav-list";
	}
	burgerMenu.classList.toggle("burger-menu--open");
}

//----Добавление активного класса выбранному элементу навигации----
var navElement = navigation.querySelectorAll(".nav-list__link");

for (let i = 0; i < navElement.length; i++) {
	navElement[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("nav-list__link--active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" nav-list__link--active", "");
		}
		this.className += " nav-list__link--active";
	});
}

//----Добавление активного класса выбранному периоду для абонемента----
var clubCardsPeriod = document.querySelectorAll(".club-cards__period-link");

for (let i = 0; i < clubCardsPeriod.length; i++) {
	clubCardsPeriod[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("club-cards__period-link--active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" club-cards__period-link--active", "");
		}
		this.className += " club-cards__period-link--active";
	});
}

//-----------Пересчет стоимости абонементов в зависимости от выбранного периода-------
var oneMonth = document.querySelector(".one-month");
var halfYear = document.querySelector(".half-year");
var oneYear = document.querySelector(".one-year");

var prices = document.querySelectorAll(".club-cards__price");

oneMonth.onclick = function () {
	for (let i = 0; i < prices.length; i++) {
		prices[i].textContent = prices[i].dataset.price + " Р";
	}
};
halfYear.onclick = function () {
	for (let i = 0; i < prices.length; i++) {
		prices[i].textContent = prices[i].dataset.price * 6 - prices[i].dataset.price * 6 * 0.1 + " Р";
	} // Считаем стоимость за 6 месяцев и вычитаем скидку 10%
};
oneYear.onclick = function () {
	for (let i = 0; i < prices.length; i++) {
		prices[i].textContent = prices[i].dataset.price * 12 - prices[i].dataset.price * 12 * 0.15 + " Р";
	} // Считаем стоимость за 12 месяцев и вычитаем скидку 15%
};

//--------------------------Слайдер для блока Наша команда---------------------------------
var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var slides = document.querySelectorAll(".team__slide");
	var previews = document.querySelectorAll(".team__preview-item");

	// Механизм перелистывания слайдов
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	// Механизм показа слайдов
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < previews.length; i++) {
		previews[i].className = previews[i].className.replace(" team__preview-item--active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	previews[slideIndex - 1].className += " team__preview-item--active";
}

//--------------------------Слайдер для блока Галерея---------------------------------
var gallerySlideIndex = 1;
showGallerySlides(gallerySlideIndex);

// Вперед/назад элементы управления
function plusGallerySlides(n) {
	showGallerySlides((gallerySlideIndex += n));
}

function showGallerySlides(n) {
	var gallerySlides = document.querySelectorAll(".gallery__item");

	// Механизм перелистывания слайдов
	if (n > gallerySlides.length) {
		gallerySlideIndex = 1;
	}
	if (n < 1) {
		gallerySlideIndex = gallerySlides.length;
	}

	// Механизм показа слайдов
	for (let i = 0; i < gallerySlides.length; i++) {
		gallerySlides[i].style.display = "none";
	}
	gallerySlides[gallerySlideIndex - 1].style.display = "block";
}
