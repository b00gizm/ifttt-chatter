
var http     = require('http');
var express  = require('express');
var webhook  = require('express-ifttt-webhook');
var socketio = require('socket.io');
var moment   = require('moment');
var lodash   = require('lodash');
var uuid     = require('uuid');

var app      = express();
var server   = http.Server(app);
var io       = socketio(server);

server.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port', server.address().port);
});

app.use(express.static(__dirname + '/public'));

app.use(webhook(function(json, done) {

  io.emit('message', {
    id       : uuid.v1(),
    nickname : json.username,
    text     : lodash.isString(json.description) ? json.description : JSON.stringify(json.description)
  });

  done();
}));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('socket.io client connected:', socket.id);
});
