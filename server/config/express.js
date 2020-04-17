const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());

    app.use(cookieParser('secret'))
    app.use(express.json());
};