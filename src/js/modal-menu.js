const modalMenu = document.getElementById("modalMenu");
const openMenu = document.getElementById("btnOpenMenu");
const closeMenu = document.getElementById("btnCloseMenu");
const body = document.querySelector("body");

function menuModal(button, display, overflow) {
	button.addEventListener("click", function () {
		modalMenu.style.display = display;
		body.style.overflow = overflow;
	});
}
menuModal(openMenu, "block", "hidden");
menuModal(closeMenu, "none", "visible");

window.addEventListener("click", function (event) {
	if (event.target == modalMenu) {
	  modalMenu.style.display = "none";
	  body.style.overflow = "visible";
	}
 });
 window.addEventListener("resize", function(){
	if (window.innerWidth >= 1440) {
		modalMenu.style.display = "block";
		body.style.overflow = "visible";
	} else {
		modalMenu.style.display = "none";
	}
 });
