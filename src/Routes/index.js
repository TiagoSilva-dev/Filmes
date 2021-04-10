import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../Pages/Home';
import Favoritos from '../Pages/Favoritos';
import Filme from '../Pages/Filme';
import Header from '../components/Header';
import Error from '../Pages/Error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}