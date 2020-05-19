import * as actionTypes from './actionTypes';

export const toggleSidedraw = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAW,
  }
} 

export const closeSidedraw = () => {
  return {
    type: actionTypes.CLOSE_SIDEDRAW,
  }
}