const passport = require('passport');

module.exports = app => {

    /**
     * Normal email and password login
     */
    app.post(
        '/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
        }));

/*
Web Dev Simplified's example
------------------------------
    app.post('/register', async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
            res.redirect('/login')
        } catch {
            res.redirect('/register')
        }
    });
*/

/*
Brad Traversy's example
------------------------------
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
 */


    /**
     * Google OAUTH
     */
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        })
    );
    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
                successRedirect: '/',
                failureRedirect: '/'
            }
        ));
    ;

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