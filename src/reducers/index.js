import {combineReducers} from 'redux';

import unsplash from './unsplash';

const rootReducer = combineReducers({
  unsplash: unsplash,
});

export default rootReducer;
