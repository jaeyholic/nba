import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Layout from "./hoc/Layout";
import NewsArticle from "./components/Articles/News/Post";
import VideoArticle from "./components/Articles/Videos/Video";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/articles/:id" component={NewsArticle} />
        <Route path="/videos/:id" component={VideoArticle} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
