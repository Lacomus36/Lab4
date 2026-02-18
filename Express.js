const express = require('express');
const app = express();

//constant variable set to used port for simplicity
const PORT = 3000;

//hit counter
const hitCounts = {
	index:0,
	page1:0,
	page2:0
};

//serves static files from folder - <Lab4>
app.use(express.static('public'));

app.get('/hits/:page', (req, res) => {
	const page = req.params.page;

	if(hitCounts.hasOwnProperty(page)) {
		hitCounts[page]++;
		res.json({ page: page, hits: hitCounts[page] });
	}
	else {
		res.status(404).json({ error: 'Page Not Found' });
	}
});

//starts the server on port 3000
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);

});
