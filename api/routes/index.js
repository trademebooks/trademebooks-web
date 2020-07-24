app.use('/api/users', require('./users'));
app.use('/api/auth', require('./auth'));
app.use('/api/profile', require('./profile'));
app.use('/api/posts', require('./posts'));