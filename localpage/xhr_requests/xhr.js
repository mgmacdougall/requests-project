const getRequest = document.getElementById('getreq');
const postRequest = document.getElementById('postreq');
const results = document.getElementById('results');

function updateField(data) {
	results.innerText = data;
}

function deleteResults() {
	results.innerText = '';
}

// Example of a get request using xhr
getRequest.addEventListener('click', (e) => {
	deleteResults();
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			updateField(xhr.response);
		}
	};

	xhr.open('GET', 'http://localhost:3000/', true);

	xhr.send();
});

// Exmaple of using a post request
postRequest.addEventListener('click', (e) => {
	deleteResults();
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			updateField(xhr.response);
		}
	};

	xhr.open('POST', 'http://localhost:3000/2', true);

	xhr.send();
});
