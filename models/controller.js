const db = require('./conn');
const User = require('../models/user');
const Restaurant = require('./restaurants');

const express = require('express'); // Bring in the express library
const app = express();              // Create a new express app

const hostname = '127.0.0.1';
const port = 3000;


/////////// RESTAURANTS //////////////////////

async function getRestaurants(req, res) {
    const allRestaurants = await Restaurant.getAll();
    res.json(allRestaurants);
}
app.get('/restaurants', getRestaurants);

async function sendPost(req, res) {
    res.send('You sent a POST');
}
app.post('/restaurants', sendPost);

async function sendPut(req, res) {
    res.send('You sent a PUT');
}
app.put('/restaurants', sendPut);

async function deleteRequest(req, res) {
    res.send('You sent a DELETE request');
}
app.delete('/restaurants', deleteRequest);


//////////////// USERS ////////////////

async function getUsers(req, res) {
    const allUsers = await User.getAll();
    res.json(allUsers);
}
app.get('/users', getUsers);

async function sendPostUsers(req, res) {
    res.send('You sent a POST!!');
}
app.post('/users', sendPostUsers);

async function sendPutUsers(req, res) {
    res.send('You sent a PUT!!');
}
app.put('/users', sendPutUsers);

async function deleteUserRequest(req, res) {
    res.send('Are you sure you want to delete?');
}
app.delete('/users', deleteUserRequest);

////////////// MULTIPLE USERS ////////////////////

async function getIndividualUser(req, res) {
    const {id} = req.params;
    const theUser = await User.getById(id);
    res.json(theUser);
}
app.get('/users/:id', getIndividualUser);

async function sendPostEachUser(req, res) {
    res.send('Posting 123');
}
app.post('/users/:id', sendPostEachUser);

async function sendPutEachUser(req, res) {
    res.send('PUT it down!');
}
app.put('/users/:id', sendPutEachUser);

async function deleteEachUser(req, res){
    res.send('Delete????????');
}
app.delete('/users/:id', deleteEachUser)

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`)
// });

module.exports = app; 