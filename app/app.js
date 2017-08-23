/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var http = require('http');

//var myServer = http.createServer(function (req,res){
//    res.writeHead(200,{"Content-Type":"text/html"});
//    res.write('<h1>welcome to nodejs</h1>');
//    res.end();
//    });
//    
//    myServer.listen(3000);
//    console.log('Go to http://localhost:3000 on your browser');
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var reload = require('reload');
var io = require('socket.io')();
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine','ejs');
app.set('views', 'app/views');
app.locals.siteTitle = 'Art Gallery';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speaker'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server =app.listen(app.get('port'),function (err){
    if(err){
        console.log('unable to start server'+err);
    }else{
        console.log('Go to http://localhost:'+app.get('port') +' on your browser');
    }
});
io.attach(server);
io.on('connection', function(socket){
 socket.on('postMessage', function(data){
    io.emit('updateMessages', data);
 });
});

 reload(app,server);

