const navbar = document.getElementById("navbar"),
	menuBtn = document.getElementById("menu-btn"),
	closeBtn = document.getElementById("close-menu"),
	mobileMenu = document.getElementById("mobile-menu"),
	mobileLinks = document.querySelectorAll(".mobile-link");

// Open Menu
menuBtn.addEventListener("click", () => {
	mobileMenu.classList.remove("translate-x-full");
});

// Close Menu
const closeMobileMenu = () => {
	mobileMenu.classList.add("translate-x-full");
};

closeBtn.addEventListener("click", closeMobileMenu);

// Close menu when a link is clicked
mobileLinks.forEach((link) => {
	link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 150) {
		navbar.classList.remove("-translate-y-full", "opacity-0");
		navbar.classList.add("translate-y-0", "opacity-100");
	} else {
		navbar.classList.add("-translate-y-full", "opacity-0");
		navbar.classList.remove("translate-y-0", "opacity-100");
	}
});
