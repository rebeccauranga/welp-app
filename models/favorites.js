const db = require('./conn');
const User = require('./user')

class Favorite {

    constructor(id, user_id, restaurant_id, ) {
        this.id = id;
        this.userId = user_id;
        this.restaurantId = restaurant_id;
    }


    // static getFavorites(id) {
    //     return db.any(`select * from favorites where id=${id}`)
    //         .then((favoritesData) => {
    //             return new Favorite(
    //                 favoritesData.id, 
    //                 favoritesData.user_id,
    //                 favoritesData.restaurant_id
    //             );
    //         });
    // }




}

module.exports = Favorite;