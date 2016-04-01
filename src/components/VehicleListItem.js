import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

export default class VehicleListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    doorLocks: PropTypes.bool,
    deleteVehicle: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.make} {this.props.model} {this.props.year} {this.props.doorLocks}</span></div>
          <div><small>xx friends in common</small></div>
        </div>
        <div className={styles.friendActions}>
            <i className={classnames('fa', { 'fa-star': this.props.doorLocks }, { 'fa-star-o': !this.props.doorLocks })} />
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteVehicle(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
