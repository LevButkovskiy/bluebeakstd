const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const packageJson = require('../package.json');
const { verifyToken } = require('./jwt');

require('./dbMongo')

const app = express();

app.use('/admin', require('./adminBro'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './builds/api/index.html'));
});

app.get('/static/*', (req,res) => {
    res.sendFile(path.join(__dirname, './builds/api/' + req.path));
});

app.get('/images/*', (req,res) => {
    res.sendFile(path.join(__dirname, './builds/api/' + req.path));
});

app.get('/locales/*', (req,res) => {
    res.sendFile(path.join(__dirname, './builds/api/' + req.path));
});

app.get('/v1/health', (req,res) => {
    res.status(200);
    res.json({success: true})
});

app.get('/v1/version', (req,res) => {
    res.status(200);
    res.json({success: true, version: packageJson.version})
});

app.use('/v1/*', (req, res, next) => {
    const token = req.header('api-token');

    verifyToken(token).then(
        (result) => {
            if (result) {
                next();
            }
            else {
                return res.status(403);
            }
        },
        (error) => {
            console.log(error);
            return res.status(403).json(error);
        }
    );
});

app.use('/v1/user/', require('./mongo/routes/users'));


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
