import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import Raven from "raven-js";
//import { sentry_url, logException } from "./data/config";

import store, { history } from "./store";
import App from "./components/App";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

import css from "./styles/style.styl";

/*
Raven.config(sentry_url, {
  tags: {
    git_commit: "assadas9564",
    userLevel: "peon"
  }
}).install();

logException(new Error("download failed"), {
  email: "bob@bob.com"
});
*/

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
