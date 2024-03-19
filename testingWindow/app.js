const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '959fc5d8ebmsh643185756653882p106284jsn69e911d7a1d5',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function getData() {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
}

getData()