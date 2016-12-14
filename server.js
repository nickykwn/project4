'use strict'
require('dotenv').config({silent: true});
const express           = require('express');
const logger            = require('morgan');
const path              = require('path');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const app               = express();
const PORT              = process.argv[2] || process.env.PORT || 3000;
const fightersRouter    = require('./routes/fighters');
const usersRouter       = require('./routes/api/users');
const authRouter        = require('./routes/api/auth.js');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api/fighters', fightersRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));
