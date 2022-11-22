import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import application from './features/application';

export const store = createStore(
  combineReducers({
    application,
  }),
  applyMiddleware(thunk)
);
