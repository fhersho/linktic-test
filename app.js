const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const stockRouter = require('./routes/stock.router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/stocks', stockRouter);

module.exports = app;
