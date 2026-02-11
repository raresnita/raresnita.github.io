const navbar = document.getElementById("navbar");

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

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
	// You can set '100' to any value, or use 'window.innerHeight'
	// to wait until the hero is fully scrolled past.
	if (window.scrollY > 100) {
		navbar.classList.remove("-translate-y-full", "opacity-0");
		navbar.classList.add("translate-y-0", "opacity-100");
	} else {
		navbar.classList.add("-translate-y-full", "opacity-0");
		navbar.classList.remove("translate-y-0", "opacity-100");
	}
});
