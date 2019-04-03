
const express = require('express'); // Bring in the express library
const es6Renderer = require('express-es6-template-engine');
const app = express();              // Create a new express app
const http = require('http');
const querystring = require('querystring');
const PORT = 3000;

app.engine('html', es6Renderer); // Introduce them:
// "Hey app, meet es6Renderer. They speak HTML."

app.set('view engine', 'html'); // Tell express to use as its view engine the thing that speaks HTML.

app.set('views', 'views'); // Tell express where to find the view files 
// (The second argument is the name of the directory where my template files will live.)

// When they ask for the login page, send the login form
app.get('/login', (req, res) => {
    // Send them the form 
    // res.send('This is the login form.')
    res.render('login-form')
})


// Import my model cass
const Restaurant = require('./models/restaurants');
const User = require('./models/user');
const controller = require('./models/controller');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})




