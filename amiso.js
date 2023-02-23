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
	} else testAmiso.classList.add(`hidden`);
});

buybtn.addEventListener(`click`, function (e) {
	testAmiso.classList.remove(`hidden`);
});
