import * as constants from './constants' 

const changeMenuDetail = (menuName) => ({
	type: constants.CHANGE_MENU_DATA,
	menuName,
});

export const changeMenu = (menuName) => {
  return (dispatch) => {
    dispatch(changeMenuDetail(menuName));
  }
};