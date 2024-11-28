// Placeholder for possible JS code

window.onscroll = function () {
	const aboutElement = document.getElementById("about");
	const projectsElement = document.getElementById("projects");

	fadeInScroll(aboutElement);
	fadeInScroll(projectsElement);
};

function fadeInScroll(el, offset = 600) {
	if (el.getBoundingClientRect().top <= offset) {
		el.style.opacity = 1;
		el.style.transition = "opacity 2s";
	} else {
		el.style.opacity = 0;
	}
}
