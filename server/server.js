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

const app = express();
mongoose.connect(process.env.PROD_DB);

/*================ settings ================*/
const cookieConfig = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
};

/*================ Express Middleware ================*/
app.use(cookieSession(cookieConfig));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

/*================ Passport User Identification ================*/
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

/*================ Public Rules - React.js Front-end ================*/
app.use('/static', express.static(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/client_index/build', '/static')));
app.use('/app/static', express.static(path.join(__dirname, process.env.SHOPIFY_APP_RESOURCE_URI, '/client_app/build', '/static')));

/*================ Private Rules - User Specific - Express.js Back-end - React.js Front-end ================*/
app.use('/api', apiRoutes);
app.use('/admin', apiRoutes);
app.use('/app', appRoutes);

/*================ Public Routes - Express.js Passport.js Back-end - React.js Front-end ================*/
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

/*================ Server Startup ================*/
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});