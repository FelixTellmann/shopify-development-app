import {Strategy} from 'passport-shopify';
import User from '../models/user';

/*================ .env Variables ================*/
const appApiKey = process.env.SHOPIFY_API_KEY;
const appApiSecret = process.env.SHOPIFY_API_SECRET;
const appURI = process.env.SHOPIFY_APP_URI;
const appScopes = process.env.SHOPIFY_APP_SCOPES;
const appGrantOptions = process.env.SHOPIFY_APP_GRANT_OPTIONS;

const authStrategy = function createUniqueStrategy(shop, state) {
    const ShopifyStrategy = new Strategy({
        clientID: appApiKey,
        clientSecret: appApiSecret,
        callbackURL: appURI + '/auth/shop',
        scope: appScopes,
        shop: shop
    }, (accessToken, refreshToken, params, profile, done) => {
        User.findOne({shop: profile.id}).then((currentUser) => {
            if (currentUser && process.env.SHOPIFY_APP_GRANT_OPTIONS !== '') {
                User.findOneAndUpdate({shop: profile.id, "users.id": params.associated_user.id}, {
                    $set: {
                        "users.$.id": params.associated_user.id,
                        "users.$.first_name": params.associated_user.first_name,
                        "users.$.last_name": params.associated_user.last_name,
                        "users.$.email": params.associated_user.email,
                        "users.$.associated_scope": params.associated_user_scope,
                        "users.$.access_token": params.access_token,
                    }
                }).then((updatedUser) => {
                    if (updatedUser) {
                        return done(null, updatedUser);
                    } else {
                        User.findOneAndUpdate({shop: profile.id}, {
                            $addToSet: {
                                users: {
                                    access_token: params.access_token,
                                    associated_scope: params.associated_user_scope,
                                    email: params.associated_user.email,
                                    last_name: params.associated_user.last_name,
                                    first_name: params.associated_user.first_name,
                                    id: params.associated_user.id,
                                }
                            }
                        }).then((updatedUser) => {
                            return done(null, updatedUser);
                        });
                    }
                });
            } else if (currentUser) {
                return done(null, currentUser);
            } else {
                new User({
                    shop: profile.id,
                    shop_URI: profile.profileURL,
                    shop_name: profile.username,
                    email: profile.emails[0].value,
                    access_token: accessToken,
                    scope: params.scope,
                    charge_approved: false,
                    users: [
                        {
                            id: params.associated_user.id,
                            first_name: params.associated_user.first_name,
                            last_name: params.associated_user.last_name,
                            email: params.associated_user.email,
                            associated_scope: params.associated_user_scope,
                            access_token: params.access_token,
                        }
                    ]
                }).save().then((newUser) => {
                    return done(null, newUser);
                });
            }
        });
    });
    ShopifyStrategy.authorizationParams = () => {
        return {
            state: state,
            'grant_options[]': appGrantOptions
        };
    };
    return ShopifyStrategy;
};

export default authStrategy;