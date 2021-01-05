fetch("https://bravenewcoin.p.rapidapi.com/market-cap?assetId=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"authorization": "Bearer <append token here>",
		"x-rapidapi-key": "565c8b3e49mshdd4ac44d890dff6p1803f9jsn0f968b8ee2b8",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});