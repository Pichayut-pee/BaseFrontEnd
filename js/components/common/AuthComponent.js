import React, { Component } from 'react';
import { connect } from 'react-redux';


export default ChildComponent => {
  class AuthComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {

        console.log('Failed to authenticate');

        this.props.router.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth? state.auth.authenticated:false };
  }

  return connect(mapStateToProps)(AuthComponent);
};