import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Layout from "./hoc/Layout";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
