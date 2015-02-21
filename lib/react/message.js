var React  = require('react');
var moment = require('moment');

var Message = module.exports = React.createClass({
  componentWillMount: function() {

  },

  render: function() {
    return (
      <div className="chat-message">
        <h3 className="lead">{this.props.nickname} <small>{moment.unix(this.props.timestamp).fromNow()}</small></h3>
        <hr />
        <p className="chat-text">
          <i className="fa fa-quote-left"></i> {this.props.children}
        </p>
      </div>
    );
  }
});
