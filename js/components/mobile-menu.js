export default function mobileMenu() {
	let body = document.querySelector("body");
	let header = document.querySelector("header");
	let hamburger = document.querySelector(".hamburger");


	hamburger.addEventListener("click", function () {
		header.classList.toggle("active");
		body.classList.toggle("menu-active");
	});
}