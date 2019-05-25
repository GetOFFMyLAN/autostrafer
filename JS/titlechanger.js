var index = 0;
var titleArr = [
	"a",
	"au",
	"aut",
	"auto",
	"autos",
	"autost",
	"autostr",
	"autostra",
	"autostraf",
	"autostrafe",
	"autostrafer",
	"autostrafer.",
	"autostrafer.c",
	"autostrafer.cc"
];

function changeTitle() {
	document.title = titleArr[index];
	index++;
	if (index == titleArr.length) {
		index = 0;
	}
};

window.setInterval(changeTitle, 500);
