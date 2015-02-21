var React  = require('react');
var moment = require('moment');

var Message = module.exports = React.createClass({
  componentWillMount: function() {

  },

  render: function() {
    return (
      <div className="chat-message">
        <div className="chat-message-header">
          <h3 className="lead">{this.props.nickname} <small>{moment.unix(this.props.timestamp).fromNow()}</small></h3>
        </div>
        <div className="chat-text">
          <i className="fa fa-quote-left"></i> {this.props.children}
        </div>
      </div>
    );
  }
});
