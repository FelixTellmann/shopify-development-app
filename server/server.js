import express from 'express';
import path from 'path';
import passport from 'passport';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

/*================ Import Routes ================*/
import apiRoutes from './routes/api';
import appRoutes from './routes/app';
import authRoutes from './routes/auth';
import indexRoutes from './routes/index';

/*================ Import Models ================*/
import User from "./models/user";
import Shop from "./models/shop";

const app = express();
mongoose.connect(process.env.PROD_DB);

/*================ settings ================*/
const cookieConfig = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.SHOPIFY_APP_COOKIE_KEY],
    httpOnly: false
};

/*================ Express Middleware ================*/

app.use(cookieSession(cookieConfig));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/*================ Passport User Identification ================*/
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    if (process.env.SHOPIFY_APP_GRANT_OPTIONS) { // If Online access_token is required based on user Scope Levels
        User.findById(id).then((user) => {
            done(null, user);
        });
    } else { // If Offline access_token is required based app requested Scope
        Shop.findById(id).then((user) => {
            done(null, user);
        });
    }
});

/*================ Public Rules - React.js Front-end ================*/
app.use('/static', express.static(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/client_index/build', '/static')));
app.use('/app/static', express.static(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/client_app/build', '/static')));



/*================ Private Rules - User Specific - Express.js Back-end - React.js Front-end ================*/
app.use('/api', apiRoutes);
app.use('/app/api', apiRoutes);
app.use('/app', appRoutes);

/*================ Public Routes - Express.js Passport.js Back-end - React.js Front-end ================*/
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

/*================ Server Startup ================*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});