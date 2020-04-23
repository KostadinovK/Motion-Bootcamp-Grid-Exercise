const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {

    //let whitelist = ['http://localhost:3000'];

    let corsOptions = {
        credentials: true,
        // origin: function (origin, callback) {
        //     if (whitelist.indexOf(origin) !== -1) {
        //         callback(null, true)
        //     } else {
        //         callback(new Error('Not allowed by CORS'))
        //     }
        // }
    };

    app.use(cors(corsOptions));

    app.use(cookieParser('secret'))
    app.use(express.json());
};