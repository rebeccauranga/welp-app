
const express = require('express'); // Bring in the express library
const app = express();              // Create a new express app
const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

// Import my model cass
const Restaurant = require('./models/restaurants');
const User = require('./models/user');

app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.getAll();
    // const restaurantJSON = JSON.stringify(allRestaurants);
    // res.json will do 2 things:
     // 1. It converts your JavaScript object or array into a JSON string
     // 2. It put the correct Content-Type header on the response
    res.json(allRestaurants);
});

app.get('/users', async (req, res) => {
    const allUsers = await User.getAll();
    res.json(allUsers);
});

app.get('/users/:id', async (req, res) => {
    const theUser = await User.getById(req.params.id);
    res.json(theUser);
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});