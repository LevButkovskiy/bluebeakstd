const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const packageJson = require('../package.json');

require('./dbMongo')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req,res) => {
    res.send(`
        <h1>Documentation</h1>
        <h4>api.bluebeakstd.ru</h4>
        <ul>
            <li>/v1/health/ - 200 if OK</li>
            <li>/v1/version/ - API Version</li>
        </ul>
    `);
});

app.get('/v1/health', (req,res) => {
    res.status(200);
    res.json({success: true})
});

app.get('/v1/version', (req,res) => {
    res.status(200);
    res.json({success: true, version: packageJson.version})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
  
    console.log('>' + (err.status || 500), err.message)
  
    res.end();
});

module.exports = app;
