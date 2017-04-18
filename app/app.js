var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory,browserHistory} = require('react-router');
import createBrowserHistory from 'history/lib/createBrowserHistory'
var mongoose = require('mongoose');
var redux = require('redux');
var {Provider} = require('react-redux');
import {connect} from 'react-redux';
const data="";
// Reducer type article
var type_article = (state = "video", action) => {
    switch (action.type) {
        case 'ARTICLE1':
            return "new";
        case 'ARTICLE2':
            return "video";
        case 'ARTICLE3':
            return "photo";
        case 'ARTICLE4':
            return "stream";
        default:
            return state;
    }
}
// Reducer Content
var conten_post = (state = "LIST", action) => {
    switch (action.type) {
        case 'LIST':
            return "LIST";
        case 'DETAIL':
            return "DETAIL";
        default:
            return state;
    }
}
// Reducer username
var username = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.username;
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
}
// Reducer dataArticle
var dataArticle = (state = data, action) => {
  return state;
}
// Reducer notification
var notification = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.txt;
    case 'HIDE_NOTIFICATION':
      return null;
    default:
      return state;
  }
}
// Cobine cac reducer
var reducer = redux.combineReducers ({dataArticle,username, notification,type_article,conten_post});
var store = redux.createStore(reducer);

var HomePage = require('HomePage');
var Nav = require('Nav');
var Account = require('Account');
var Listdata = require('Listdata');
var Transaction = require('Transaction');
var Main = require('Main');
var NavBar = require('NavBar');
var Redux = require('Redux');
var ItemDetail = require('ItemDetail');
var requireLogin = (nextState, replace, next) => {
  if(store.getState().username === null){
    replace('/');
    store.dispatch({type: 'SHOW_NOTIFICATION', txt: 'You must sign in firts!'})
  }
  next();
}

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!react-simpletabs/lib/react-simpletabs.css');
require('style!css!sass!./css/style.scss');
$(document).ready(() => $(document).foundation());
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Router path="/" component={Main} data={data}>
        <IndexRoute component={HomePage}/>
        <Route path="account" component={Account}/>
        <Route path="transaction" component={Transaction} onEnter={requireLogin}/>
        <Route path="redux" component={Redux}/>
        <Route path="articles/:id"  component={ItemDetail}/>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('root')
);
