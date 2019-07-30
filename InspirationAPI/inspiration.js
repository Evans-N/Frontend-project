'use strict';

const quoteButton = document.body.querySelector('#get-quote');
const quoteOutput = document.body.querySelector('#quote');

function* quoteGenerator() {
	while (true) {
		yield fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    		.then(res => res.json());
 	}
}

const generator = quoteGenerator();

function updateQuote() {
	quoteButton.disabled = true;

	generator.next().value.then(function (data) {
		quoteOutput.innerHTML = `"${data[0]}"`;
		quoteButton.disabled = false;
	});
}

quoteButton.onclick = updateQuote;

updateQuote();