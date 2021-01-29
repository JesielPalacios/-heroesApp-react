import React from 'react';
import { HeroeTarjeta } from './HeroeTarjeta'
import data from "../assets/data/heroes.json";

export const Heroes = () => {
    return (
        <div className="container mt-5">
            <h1>Héroes <small>Marvel y DC Comics</small></h1>
            <hr/>
            <div className="card-columns">
            <HeroeTarjeta data={data}/>
            </div>
        </div>
    )
}