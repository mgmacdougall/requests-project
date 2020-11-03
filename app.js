const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyparser.json());
app.use(cors());

app.get('/', function (req, res) {
	res.status(200).send({ name: 'hi' });
});

app.post('/:val', (req, res) => {
	res.status(200).send({ message: `Resource updated to: ${req.params.val}` });
});

app.listen(3000, function () {
	console.log(`App started`);
});
