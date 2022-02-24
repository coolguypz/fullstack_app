const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', async (req, res) => {
	db.execute(`select * from test;`, (err, result) => {
		if (err) {
			res.send('ERROR : ', err);
		} else {
			res.send(result);
		}
	});
});

app.post('/api/post', async (req, res) => {
	console.log('req.body: ', req.body);
	const {username, password, email, ip, coutry, state, city, zipcode} = req.body;
	await db.execute(
		`insert into test 
    (username,password,email,ip,country,state,city,zipcode)
    values
    ("${username}","${password}","${email}","${ip}","${coutry}","${state}","${city}","${zipcode}"); `,
		(err, result) => {
			if (err) {
				res.send('ERROR : ', err);
			} else {
				res.send(result);
			}
		},
	);
});

app.listen(PORT, () => console.log('server is listening on PORT ' + PORT));
