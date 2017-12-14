import {Strategy} from 'passport-shopify';
import User from '../models/user';
import Shop from '../models/shop';

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
        /*================ Find or Insert Shop ================*/
        Shop.findOneAndUpdate(
            {
                shop: profile.id
            },
            {
                $setOnInsert: {
                    shop: profile.id,
                    shop_URI: profile.profileURL,
                    shop_name: profile.username,
                    email: profile.emails[0].value,
                    scope: params.scope,
                    access_token: params.access_token,
                    charge_approved: false,
                    users: []
                }
            },
            {
                new: true,
                upsert: true
            }).then((shop) => {
            if (appGrantOptions) { // If Online access_token is required based on user Scope Levels
                /*================ Find, Update or Insert User ================*/
                User.findOneAndUpdate(
                    {
                        id: params.associated_user.id
                    },
                    {
                        id: params.associated_user.id,
                        first_name: params.associated_user.first_name,
                        last_name: params.associated_user.last_name,
                        email: params.associated_user.email,
                        associated_scope: params.associated_user_scope,
                        access_token: params.access_token
                    },
                    {
                        upsert: true, new: true,
                        runValidators: true
                    }).then((user) => {
                    /*================ Find Shop & AddToSet User._id ================*/
                    Shop.findOneAndUpdate(
                        {
                            shop: profile.id
                        },
                        {
                            $addToSet: {
                                users: user._id
                            }
                        }).then((updatedUser) => {
                        return done(null, user);
                    });
                });
            } else { // If Offline access_token is required based app requested Scope
                return done(null, shop);
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