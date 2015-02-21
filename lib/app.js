var $     = require('jquery');
var React = require('react');

var Chat  = require('./react/chat');

$(function() {

  React.render(
    <Chat maxMessages="3" />,
    document.getElementById('ifttt-chatter')
  );

});
