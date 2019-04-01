// "helper function" === "middleware"
// aka "Request handler"
const server = http.createServer(async (req, res) => {
    console.log(req);

    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json');

    // if req.url is "/restaurants", send them all restaurants
    // if it's "/users", send a list of users
    // else if it doesn;t match either, send a welcome message

    if (req.url === "/restaurants") {
        const method = req.method;
        if (method === 'GET') {
            const allRestaurants = await Restaurant.getAll();
            const restaurantJSON = JSON.stringify(allRestaurants);
            res.end(restaurantJSON);
        } else if (method === 'POST') {
            res.end('{message: "it sounds like you would like to create"}');
        } else if (method === 'PUT') {
            res.end('{message: "you wanna update, dontcha?"}');
        } else if (method === 'DELETE') {
            res.end('{message: "rm the user"}');
        }
    } else if (req.url.startsWith("/user")) { 

        const parts = req.url.split("/");
        console.log(parts);

        const method = req.method;
        if (method === 'GET') {
            if (parts.length === 2) {
                const allUsers = await User.getAll();
                const userJSON = JSON.stringify(allUsers);
                res.end(userJSON);
            } else if (parts.length === 3) {
                // the id will be parts[2]
                const userId = parts[2];
                // get user by id
                const theUser = await User.getById(userId);
                const userJSON = JSON.stringify(theUser);
                res.end(userJSON);
            } else {
                res.statusCode = 404;
                res.end('Resource not found.');
            }
        } else if (method === 'POST') {
            res.end('{message: "it sounds like you would like to create"}');
        } else if (method === 'PUT') {
            res.end('{message: "you wanna update, dontcha?"}');
        } else if (method === 'DELETE') {
            res.end('{message: "rm the user"}');
        }

        //when the req.url is "/users", parts is [ '', 'user' ]
        // when the req.url is "/users/3", parts is [ '', 'user', '3' ]
    } else {
        res.end(`{
            message: Hello thereeeeee.
        }`);
    };
});