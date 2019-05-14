import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { alert } = state;
  return { alerts: alert };
};

// const mapDispatchToProps = {
//   getAllConversations: messagesOperations.getAllConversations,
//   olderMessagesRequest: messagesOperations.olderMessagesRequest,
//   sendMessage: messagesOperations.sendMessage,
//   messagesMarkRead: messagesOperations.messagesMarkRead,
//   getSingleProfile: profilesOperations.getSingleProfile,
// };

// const mapStateToProps = state => ({
//   alerts: state.alert,
// });

export default connect(mapStateToProps)(Alert);
