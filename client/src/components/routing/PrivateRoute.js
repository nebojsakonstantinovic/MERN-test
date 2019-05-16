import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="./login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  const { isAuthenticated, loading } = state.auth;
  return { isAuthenticated, loading };
};

PrivateRoute.propTypes = {
  // auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(PrivateRoute);
