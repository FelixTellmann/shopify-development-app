import express from 'express';
import path from 'path';
import passport from 'passport';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import apiRoutes from './routes/api-routes'
import appRoutes from './routes/app-routes'
import authRoutes from './routes/auth-routes';
import indexRoutes from './routes/index-routes'
import User from "./models/user";

const app = express();
process.env['ROOT'] = path.join(__dirname, '/..');
console.log(path.join(process.env.ROOT, '/client_index/build', '/static'));

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

/*================ Public Routes - Express.js Passport.js Back-end - React.js Front-end ================*/
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/login', indexRoutes);

/*================ Public Rules - React.js Front-end ================*/
app.use('/static', express.static(path.join(process.env.ROOT, '/client_index/build', '/static')));
app.use('/app/static', express.static(path.join(process.env.ROOT, '/client_index/build', '/static')));

/*================ Private Rules - User Specific - Express.js Back-end - React.js Front-end ================*/
app.use('/api', apiRoutes);
app.use('/app', appRoutes);


app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});