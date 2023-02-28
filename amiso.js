const btnEx = document.querySelector(`.explore-subscribe`);
const scrollEx = document.querySelector(`.help`);

btnEx.addEventListener("click", function (e) {
	const test = scrollEx.getBoundingClientRect();
	console.log(test);
	scrollEx.scrollIntoView({ behavior: "smooth" });
});

const testAmiso = document.querySelector(`.preview-header`);
const overlatHeight = document.querySelector(`.amiso-div`);
const buybtn = document.querySelector(`.buy-now`);
const amisocoords = overlatHeight.getBoundingClientRect();
const amisoHeight = overlatHeight.getBoundingClientRect().height;
console.log(amisocoords.top);

console.log(window.scrollY);
window.addEventListener(`scroll`, function (e) {
	if (window.scrollY > amisocoords.top) {
		testAmiso.classList.remove(`hidden`);
	} else if (window.scrollY < amisocoords.top) testAmiso.classList.add(`hidden`);
});

// reveal section
const allSections = document.querySelectorAll(`.section`);
const revealSection = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;

	entry.target.classList.remove(`section--hidden`);
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add(`section--hidden`);
});

const testi = document.querySelectorAll(`.first-right-testimonial`);
const revealTest = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		entry.target.classList.add(`testimonial-animation`);
		observer.unobserve(entry.target);
	}
};

const testObserver = new IntersectionObserver(revealTest, {
	root: null,
	threshold: 0.15,
});

testi.forEach(function (section) {
	testObserver.observe(section);
	section.classList.add(`testimonial-animation`);
});
