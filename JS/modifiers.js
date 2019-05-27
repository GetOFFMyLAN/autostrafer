function displayTitle() {
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
}

function displayHeader() {
	var header = document.getElementById("header");
	var index = 0;
	var headerText = ["autostrafer|", "autostrafer"];

	function lines() {
		header.innerHTML = headerText[index];
		index++;

		if (index == headerText.length) {
			index = 0;
		}
	};

	window.setInterval(lines, 600);
}

displayTitle();
