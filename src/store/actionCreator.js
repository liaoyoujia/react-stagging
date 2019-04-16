import * as constants from './constants'
import menuDatas from '../config/menuConfig'
const changeMenuDetail = (menuName) => ({
  type: constants.CHANGE_MENU_DATA,
  menuName,
});

const matchMenu = (menuDatas, menuName) => {
  return menuDatas.map((item) => {
    if (item.children) {
      return matchMenu(item.children,menuName)
    }
    if (item.key === menuName) {
      return item.title
    }
  })
}

export const changeMenu = (menuName) => {
  return (dispatch) => {
    let menudata = matchMenu(menuDatas, menuName)
    dispatch(changeMenuDetail(menudata));
  }
};