import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

//下面的为浏览器中看redux状况的东西。 
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';

// const store = createStore(reducer,applyMiddleware(thunk));

export default store;