import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import images from './reducers/images';
import comments from './reducers/comments';

const reducers = combineReducers({
  images,comments
});
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);
