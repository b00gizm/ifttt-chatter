var React   = require('react/addons');
var Message = require('./message');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MessageList = module.exports = React.createClass({
  componentWillMount: function() {

  },

  render: function() {
    var messageElements = this.props.messages.map(function(message) {
      return (<Message key={message.id} id={message.id} nickname={message.nickname} timestamp={message.timestamp}>{message.text}</Message>);
    });

    return (
      <div className="message-list">
        <ReactCSSTransitionGroup transitionName="chat-message">
          {messageElements}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
