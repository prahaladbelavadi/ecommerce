const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const Product = new Schema( {
    name: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        default: null
    },
    photos: [{ type: String }],
    description: {
        type: String,
        default: null
    },
    size: [{
        type: Number,
    }],
    isAccessory: Boolean,
    brand: String,
    price: Number
} );


module.exports = mongoose.model( 'Product', Product );

