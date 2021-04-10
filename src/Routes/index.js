import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../Pages/Home';
import Favoritos from '../Pages/Favoritos';
import Filme from '../Pages/Filme';
import Header from '../components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  )
}