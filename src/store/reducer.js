// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import userReducer from './slices/user';

const reducer = combineReducers({
    cart: persistReducer(),
    user: userReducer,
})

export default reducer;