import React from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import NotFound404Error from "./components/NotFound404Error";
import AboutUs from "./components/pages/aboutUs";
import ContactUs from "./components/pages/contactUs";
import Privacy from "./components/pages/privacy";

export default function MainRoutes() {
  return (
    <div>
      <Switch>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/privacyPolicy'>
          <Privacy />
        </Route>
        <Route path='/contact'>
          <ContactUs />
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
