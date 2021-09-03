var navigation = document.querySelector('.nav-list');
var burgerMenu = document.querySelector('.burger-menu');
var navElement = navigation.querySelectorAll('.nav-list__link');

function myFunction() {
	if (navigation.className === 'nav-list') {
		navigation.className += ' nav-list--expand';
	} else {
		navigation.className = 'nav-list';
	}
	burgerMenu.classList.toggle('burger-menu--open');
}


for (var i=0; i<navElement.length; i++) {
  navElement[i].addEventListener("click", function() {
    var current = document.getElementsByClassName('nav-list__link--active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' nav-list__link--active', '');
    }
    this.className += ' nav-list__link--active';
  });
}