function showQueryAndResults(q, results) {

	var resultsEl = document.querySelector('#results');
	var html = '';

	html += '<p>Your search query:</p> <pre></pre><ul>';

	for (var index = 0; index < results.length; index++) {
		html += '<li>' + results[index] + '</li>';
	}
	html += '</ul>';

	resultsEl.innerHTML = html;

	var queryTextEl = document.querySelector('#results pre');
	queryTextEl.textContent = q;
    // add the text content to 
}