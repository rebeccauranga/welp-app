
const express = require('express'); // Bring in the express library
const es6Renderer = require('express-es6-template-engine');
const app = express();              // Create a new express app
const http = require('http');
const querystring = require('querystring');

// Require my session and session storage modules
// This module lets express track users as they go from page to page.
const session = require('express-session');

// Import the session storage module, and wire it up to the session module
const FileStore = require('session-file-store')(session);

// Tell express to use the session modules
app.use(session({
    store: new FileStore(), // no options for now 
    secret: 'hashbrowshashtaghasheshashslingingslasher'
}));


const PORT = 3000;

app.engine('html', es6Renderer); // Introduce them:
// "Hey app, meet es6Renderer. They speak HTML."

app.set('view engine', 'html'); // Tell express to use as its view engine the thing that speaks HTML.

app.set('views', 'views'); // Tell express where to find the view files 
// (The second argument is the name of the directory where my template files will live.)

app.use(express.urlencoded({ extended: true }));

// When they ask for the login page, send the login form
app.get('/login', (req, res) => {
    // Send them the form 
    // res.send('This is the login form.')
    res.render('login-form', {
       locals: {
           email: '',
           message: ''
       } 
    });
});


// When they submit the form, process the form data. 
app.post('/login', async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    // res.send('No soup for you');
    // TO-DO: Check password for real. :)
    const theUser = await User.getByEmail(req.body.email);
    theUser.setPassword("password");
    await theUser.save();
    const passwordIsCorrect = theUser.checkPassword(req.body.password);
    if (passwordIsCorrect) {
        // Save the user's id to the session.
        req.session.user = theUser.id;
        // Make sure the session is saved before we redirect
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        // Send the form back, but with the email already filled out. 
        res.render('login-form', {
            locals: {
                email: req.body.email,
                message: 'Password incorrect. Please try again.'
            }
        });
    }
});

app.get('/dashboard', (req, res) => {
    console.log(`The user's id is ${req.session.user}`);
    res.send('Welcome back to WELP!')
});


// Import my model cass
const Restaurant = require('./models/restaurants');
const User = require('./models/user');
const controller = require('./models/controller');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})




