import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './FriendList.css';
import VehicleListItem from './VehicleListItem';

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {
          mapValues(this.props.vehicles, (vehicle) => {
            return (<VehicleListItem
              key={vehicle.id}
              id={vehicle.id}
              make={vehicle.make}
              model={vehicle.model}
              year={vehicle.year}
              doorLocks={vehicle.doorLocks}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}
