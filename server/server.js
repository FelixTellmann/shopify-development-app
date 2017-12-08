import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

router.get('/cities', (req, res) => {
    const cities = [
        {name: 'New York City', population: 8175133},
        {name: 'Los Angeles', population: 3792621},
        {name: 'Cape Town', population: process.env.SHOPIFY_API_SECRET}
    ];
    res.json(cities);
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});