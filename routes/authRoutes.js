const passport = require('passport');

module.exports = app => {
    /**
     * Google OAUTH
     */
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

    /**
     * Logs the user out of the current session
     */
    app.get('/api/logout', (req, res) => {
        req.logout();
        //res.send("you have been logged out: " + req.user);
        res.redirect('/');
    });

    /**
     * Get the currently authenticated user
     */
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};