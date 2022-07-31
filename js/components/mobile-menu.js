export default function mobileMenu() {
	let header = document.querySelector("header");
	let hamburger = document.querySelector(".hamburger");


	hamburger.addEventListener("click", function () {
		header.classList.toggle("active");
	});
}