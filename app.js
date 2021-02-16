const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const loggerMiddleware = require('./middleware/logger');
const errorMiddleware = require('.//middleware/error');
const store = require('./store/store');
const userRouter = require('./routes/user');
const booksRouter = require('./routes/books');

const app = express();
store.createDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(loggerMiddleware);
app.use('/api', userRouter);
app.use('/api', booksRouter);
app.use(errorMiddleware);

module.exports = app;
