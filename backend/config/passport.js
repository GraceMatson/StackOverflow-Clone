const passport = require("passport");
const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2").Strategy;
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(
    new AzureAdOAuth2Strategy({
            clientID: process.env.AZURE_CLIENT_ID,
            clientSecret: process.env.AZURE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URI,
        },
        async(accessToken, refresh_token, params, profile, done) => {
            try {
                var waadProfile = jwt.decode(params.id_token);

                const user = await User.findOne({ email: waadProfile.upn });
                if (user) return done(null, user);

                const newUser = new User({
                    outlookId: waadProfile.oid,
                    name: waadProfile.name,
                    email: waadProfile.upn,
                    accessToken: accessToken
                });
                if (refresh_token) newUser.refreshToken = refresh_token;

                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                console.log(error.message);
            }
        }
    )
);


