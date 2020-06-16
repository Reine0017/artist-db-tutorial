import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Artist from "./components/Artist";
import NavBar from "./components/NavBar";
import User from "./components/user";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/artist/:artistId" component={Artist} />
        <Route path="/user" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
