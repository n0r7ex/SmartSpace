const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open");
  if(burger.classList.contains("menu-open")) document.body.setAttribute("data-scroll", "false");
  if(!burger.classList.contains("menu-open")) document.body.setAttribute("data-scroll", "true");

});
const swiper = new Swiper(".slider-main-block", {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: ".body-main-block__arrow.swiper-button-next",
		prevEl: ".body-main-block__arrow.swiper-button-prev",
	},
});
