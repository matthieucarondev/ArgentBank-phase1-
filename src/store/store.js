import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';


const customMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer, 
 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(customMiddleware))
);

export default store;