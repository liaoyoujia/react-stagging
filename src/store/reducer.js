import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	menuName:'首页',
});

// const changeHomeData=(state,action)=>{
//   return state.merge({
// 		topicList: fromJS(action.topicList),
// 		articleList: fromJS(action.articleList),
// 		recommendList: fromJS(action.recommendList)
// 	});
// }
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_MENU_DATA:
      // return changeHomeData(state, action);
      return state.set('menuName', action.menuName);
		default:
			return state;
	}
}