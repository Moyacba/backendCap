const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user.model');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        await User.findOne({ email }, (err, user) => {
            if (!user) {
                return done(null, false, { message: 'email no registrado' })
            } else {
                user.comparePassword(password, (err, eqls) => {
                    if (eqls) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Contraseña no valida' });
                    }
                })
            }
        })
    }
));

module.exports = {
    authenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        };
        res.status(401).json({ message: 'No estas autorizado' })
    }
}