import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import authRoutes from './routes/auth-routes';
import passport from 'passport';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

const app = express();
const router = express.Router();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

/*================ Connect to MongoDB ================*/
mongoose.connect(process.env.PROD_DB);

/*================ Config ================*/
app.use(staticFiles);
app.use(cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());


router.get('/cities', (req, res) => {
    const cities = [
        {name: 'New York City', population: 8175133},
        {name: 'Los Angeles', population: 3792621},
        {name: 'Cape Town', population: process.env.SHOPIFY_API_SECRET}
    ];
    res.json(cities);
});

app.use('/auth', authRoutes);
app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});