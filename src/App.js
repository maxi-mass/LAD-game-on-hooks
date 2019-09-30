import React from 'react';
import Game from "./components/Game/Game";
import Greeting from "./components/Greeting/Greeting";
import GameOver from "./components/GameOver/GameOver";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Route exact path="/" component={Greeting} />
    <Route path="/game" component={Game} />
    <Route path="/game-over" component={GameOver} />
  </BrowserRouter>;
}

export default App;
