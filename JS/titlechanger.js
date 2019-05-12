var index = 0;
var titleArr = [
	"utostrafer.cc　a",
	"tostrafer.cc　au",
	"ostrafer.cc　aut",
	"strafer.cc　auto",
	"trafer.cc　autos",
	"rafer.cc　autost",
	"afer.cc　autostr",
	"fer.cc　autostra",
	"er.cc　autostraf",
	"r.cc　autostrafe",
	".cc　autostrafer",
	"cc　autostrafer.",
	"c　autostrafer.c",
	"　autostrafer.cc",
	"autostrafer.cc "
];

function changeTitle() {
	document.title = titleArr[index];
	index++;
	if (index == titleArr.length) {
			index = 0;
	}
};

window.setInterval(changeTitle, 1000);
