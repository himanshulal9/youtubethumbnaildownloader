import React from "react";
import { Route, Switch } from "react-router";
import App from "./App";
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
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </div>
  );
}
