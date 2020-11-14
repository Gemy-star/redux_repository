import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from "./Redux/Reducers/counterReducer";
import resultReducer from "./Redux/Reducers/resultReducer";
import ReduxThunk from 'redux-thunk';
import employeeReducers from "./Redux/Reducers/employeeReducer";
const rootReducers = combineReducers({counter : counterReducer , results:resultReducer , employees:employeeReducers})
const middleware = store => {
  return next => {
      return action => {
          console.log('[MIDDLEWARE]' , action);
          const result = next(action)
          console.log('[MIDDLEWARE] next' , store.getState())
          return result ;
      };
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  = createStore(rootReducers , composeEnhancers(applyMiddleware(middleware , ReduxThunk)) );



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
