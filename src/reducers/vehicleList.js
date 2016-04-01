import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
/*
const initialState = {
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};
*/
const initialState = {
  vehicles: [1, 2, 3],
  vehiclesById: {
    1: {
      id: 1,
      make: 'Chevrolet',
      model: 'Tahoe',
      year: '2007',
      doorLocks: true
    },
    2: {
      id: 2,
      make: 'Chevrolet',
      model: 'Tahoe',
      year: '2008',
      doorLocks: true
    },
    3: {
      id: 3,
      make: 'Chevrolet',
      model: 'Tahoe',
      year: '2009',
      doorLocks: true
    }
  }
}

export default function friends (state = initialState, action) {
  switch (action.type) {

    case types.ADD_VEHICLE:
      const newId = state.vehicles[state.vehicles.length - 1] + 1
      return {
        ...state,
        vehicles: state.vehicles.concat(newId),
        vehiclesById: {
          ...state.vehiclesById,
          [newId]: {
            id: newId,
            make: action.make,
            model: action.model,
            year: action.year,
            doorLocks: action.doorLocks
          }
        }
      }

    case types.DELETE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter(id => id !== action.id),
        vehiclesById: omit(state.vehiclesById, action.id)
      }
    /*
    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
            assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }
    */

    default:
      return state
  }
}
