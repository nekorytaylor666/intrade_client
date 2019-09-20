import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Dashboard extends Component {
  async componentDidMount() {
    this.props.getSecret()
  }

  render() {
    return (
      <div>
        This is a Dashboard component
        <br/>
        Our secret: <h3>{this.props.secret}</h3>
        this shit was retrieved from api with jwt token.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    secret: state.dash.secret
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
