
const express = require('express')
const app = express()
const port = 5000
var axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();
// require('dotenv').config()

const { API_URL, API_KEY } = process.env;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/routes', (req, res) => {
    const origin = req.params.origin
    const destination = req.params.destination

    var config = {
        method: 'GET',
        // url: '{https://maps.googleapis.com/maps/api}/directions/json?origin={origin}&destination={destination}&key={APIKEY}',
        url: `${process.env.API_URL}/directions/json?origin=${origin}&destination=${destination}&key=${process.env.API_KEY}`,
        headers: { }
    };

    axios(config)
    .then(function (response) {
        res.send(JSON.stringify(response.data))
        // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})