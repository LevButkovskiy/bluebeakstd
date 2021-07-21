var mongoose = require('mongoose');
var readLine = require("readline");
var config = require('../src/config');
const DB_URL = config.DB_URL;

if (process.platform === "win32"){
    var rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function (){
        process.emit ("SIGINT");
    });
}

// Подключение к mongodb
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,  // установка опций
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', function(){
    console.log('Mongoose connect to ' + DB_URL);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connect error ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

// Перехват события завершения процесса
var gracefulShutdown = function(msg,callback){
    mongoose.connection.close(() => {
        console.log("Mongoose disconnect through " + msg);
    }
)};

process.once('SIGUSR2',function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT',()=>{
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});
