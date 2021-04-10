import express from 'express';
import mongoose from 'mongoose';
import User from './user.model';
import Product from './product.model';
import Cart from './cart.model';

const app = express();

const url = "mongodb://localhost:27017/ecommerceDB";

const connect = mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true } );
connect.then( ( db ) => {
    console.log( 'DB connected' );
}, ( err ) => {
    console.log( err );
} );

app.get( '/', ( req, res ) => {
    res.send( 'server is ready' );
} );

// app.get( '/api/products', ( req, res ) => {
//     res.send( data.products );
// } );

app.get( '/api/products', ( req, res ) => {
    Product.find( {} ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.post( '/api/products', ( req, res ) => {
    Product.create( req.body ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.put( '/api/products', ( req, res ) => {
    res.json( { status: 203, data: "Operation Not permitted" } );
} );

app.delete( '/api/products', ( req, res ) => {
    Product.deleteMany( req.body ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.get( '/api/cart', ( req, res ) => {
    Cart.find( req.body || {} ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.post( '/api/cart', ( req, res ) => {
    Cart.create( req.body ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.put( '/api/cart', ( req, res ) => {
    res.json( { status: 203, data: "Operation Not permitted" } );
} );

app.delete( '/api/cart', ( req, res ) => {
    Cart.deleteMany( req.body ).then( data => {
        res.json( { status: 200, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );



app.post( '/api/signup', ( req, res ) => {
    User.create( req.body ).then( data => {
        res.json( { status: 201, data } );
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );

app.post( '/api/login', ( req, res ) => {
    User.find( req.body ).then( data => {
        if ( data == null ) {
            res.json( { status: 404, data } );
        } else {
            res.json( { status: 200, data } );
        }
    } ).catch( error => { res.json( { status: 500, error } ); } );
} );



const port = process.env.PORT || 5000;

app.listen( port, () => {
    console.log( `server listening at http://localhost:${port}` );
} );