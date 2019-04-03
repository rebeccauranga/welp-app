


const users = require('express').Router();
const all = require('./all');
const single = require('./single');


const User = require('./models/user.js');
// Get a list of all users

users.get('/', async (req, res) => {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.status(allUsers);
});


// Get a single user, based on their ID

module.exports = users;