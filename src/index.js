import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// routing components
import Index from "views/Index.jsx";
import Alternative1 from "views/landing/Alternative1.jsx";
import Alternative2 from "views/landing/Alternative2.jsx";
import Alternative3 from "views/landing/Alternative3.jsx";

// global template script file
import "./laapp.js";

ReactDOM.render(
  <BrowserRouter>
      <Route path="/" exact render={props => <Alternative2 {...props} />} />
  </BrowserRouter>,
  document.getElementById("root")
);
