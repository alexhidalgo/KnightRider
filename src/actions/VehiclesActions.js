import * as types from '../constants/ActionTypes'

export function addVehicle (make, model, year, doorLocks) {
  return {
    type: types.ADD_VEHICLE,
    make,
    model,
    year,
    doorLocks

  }
}

export function deleteVehicle (id) {
  return {
    type: types.DELETE_VEHICLE,
    id

  }
}
