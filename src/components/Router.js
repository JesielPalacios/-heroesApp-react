import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navegabar } from "./shared/Navbar";
import { App } from "../App";
import { Heroes } from "./Heroes";
import { About } from "./About";
import { NotFound } from "./NotFound";
import { Heroe } from "./Heroe";
import { BusquedaHeroe } from "./BusquedaHeroe";
import data from "../assets/data/heroes.json";

export const AppRouter = () => (
    <Router>
        <Navegabar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/heroes" component={Heroes} />
            {/* <Route path="/heroe/:id" component={Heroe} /> */}
            <Route path="/heroe/:id">
                <Heroe data={data} />
            </Route>
            <Route path="/buscar/:termino">
                <BusquedaHeroe data={data} />
            </Route>
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)