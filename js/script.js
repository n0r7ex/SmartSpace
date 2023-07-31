const burger = document.querySelector("#burger");

burger.addEventListener("click", () =>{
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

// Tabs
const tabNavItems =document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll(".item-tabs");
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if(targetElement.closest('.tabs-deals__button')) {
		tabNavItems.forEach((tabNavItem, index)  => {
			if (tabNavItem.classList.contains('active')){
				currentActiveIndex = index;
				tabNavItem.classList.remove("active");
			}
			if (tabNavItem === targetElement){
				newActiveIndex = index;
			}
		});
		targetElement.classList.add("active");
		tabItems[currentActiveIndex].classList.remove("active");
		tabItems[newActiveIndex].classList.add("active");
	}
});
