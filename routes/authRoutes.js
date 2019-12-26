const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send("you have been logged out: " + req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};