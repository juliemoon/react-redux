import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App.js';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//binds redux w. react
import { Provider } from 'react-redux'
//store is default export while history is named export so put inside of {}
import store, {history} from './store.js'
const router = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path="/" component={App}>
      {/* PhotoGrid and Single are children of Main component */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(
  router,
  document.getElementById("root")
);