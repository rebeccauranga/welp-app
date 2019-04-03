



// Let's get our Express Router fired up...
const routes = require('express').Router();

// Let's create some routes...
const users = require('./users');
const restaurants = require('./restaurants');

// Let's define some routs and their associated handlers...
routes.use('/users', users);
routes.use('/restaurants', restaurants);

// Let's set a default route...
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

// Redudant ellipsis...
module.exports = routes;