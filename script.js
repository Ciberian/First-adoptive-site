function myFunction() {
	var navigation = document.querySelector(".nav-list")
	var burgerMenu = document.querySelector(".burger-menu")

	if (navigation.className === "nav-list") {
		navigation.className += " nav-list--expand"
	} else {
		navigation.className = "nav-list"
	}
	burgerMenu.classList.toggle("burger-menu--open")
}
