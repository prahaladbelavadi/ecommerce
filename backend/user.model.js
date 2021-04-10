var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var User = new Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    age: Number
    gender: String,
    cartId: String,
    phoneNumber: {
        type: String,
        required: true
    }
} );




module.exports = mongoose.model( 'User', User );