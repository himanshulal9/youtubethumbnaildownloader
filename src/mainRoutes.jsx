import React from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import NotFound404Error from "./components/NotFound404Error";
import About from "./components/pages/aboutUs";
import Contact from "./components/pages/contactUs";
import Privacy from "./components/pages/privacy";

export default function MainRoutes() {
  return (
    <div>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/privacypolicy'>
          <Privacy />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/'>
          <NotFound404Error />
        </Route>
      </Switch>
    </div>
  );
}
