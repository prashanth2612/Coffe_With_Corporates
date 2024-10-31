import { combineReducers } from 'redux';
import crudReducer from './crud/reducer';
import authReducer from './auth/reducer';


// Combine all reducers.

const rootReducer = combineReducers({

    auth:authReducer,

    crud:crudReducer,

});

export default rootReducer;
