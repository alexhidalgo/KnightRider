import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as VehiclesActions from '../actions/VehiclesActions';
import { VehicleList } from '../components';

@connect(state => ({
  vehiclelist: state.vehicleList
}))
export default class VehicleListApp extends Component {

  static propTypes = {
    vehiclesById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { vehiclelist: { vehiclesById }, dispatch } = this.props;
    const actions = bindActionCreators(VehiclesActions, dispatch);

    return (
      <div className={styles.vehicleListApp}>
        <h1>The Vehicle List</h1>
        <VehicleList vehicles={vehiclesById} actions={actions} />
      </div>
    );
  }
}
