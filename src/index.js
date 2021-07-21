var createError = require('http-errors');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');

require('./dbMongo')

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req,res) => {
    res.send("Hello world");
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
