// Bring in the database connection.
const db = require('./conn');

// declare the class
class Restaurant {

    constructor(id, name, address, street, state, phone, menu, picture) {
        this.id =id;
        this.name= name;
        this.address=address; 
        this.street=street;
        this.state= state;
        this.phone= phone;
        this.menu = menu; 
        this.picture = picture; 
    }

    // getAll is a static method
    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we `return` the call to db.any
        return db.any(`select * from restaurants`);
    }

    static getRestaurant(id) {
        return db.one(`select * from restaurants where id=${id}`)
        .then((resData) => {
            const newInstance = new Restaurant(
                resData.id,
                resData.name,
                resData.address,
                resData.street,
                resData.state,
                resData.phone,
                resData.menu,
                resData.picture
            );
            return newInstance;
        })
    }

    // get reviews for this restaurant
    getReviews(userId=-1) {
        // if userId is -1, get all reviews
        // else, get reviews written by
        // a specific user
    }
}

// export the class
module.exports = Restaurant;