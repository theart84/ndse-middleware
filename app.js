const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const booksRouter = require('./routes/books');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', userRouter);
app.use('/api', booksRouter);

module.exports = app;
