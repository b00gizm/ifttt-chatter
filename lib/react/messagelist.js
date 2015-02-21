var React   = require('react/addons');
var Message = require('./message');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MessageList = module.exports = React.createClass({
  componentWillMount: function() {

  },

  render: function() {
    if (!this.props.messages.length) {
      return messageElements = (
        <div className="no-messages">
          <h2><i className="fa fa-paper-plane-o"></i> Waiting for messages ...</h2>
        </div>
      );
    }

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
