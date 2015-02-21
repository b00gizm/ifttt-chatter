var React       = require('react');
var socket      = require('socket.io-client')(window.location.host);
var moment      = require('moment');
var MessageList = require('./messagelist');

var Chat = module.exports = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    };
  },

  componentWillMount: function() {
    var self = this;

    socket.on('message', function(data) {
      var newMessages = [{
        id        : data.id,
        nickname  : data.nickname,
        text      : data.text,
        timestamp : moment().unix()
      }].concat(self.state.messages.slice(0, self.props.maxMessages - 1));

      self.setState({ messages: newMessages });
    });
  },

  render: function() {
    var messageCountLabel = this.props.maxMessages == 1 ? 'the most recent message' : 'the last ' + this.props.maxMessages + 'messages';

    return (
      <div>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
});
