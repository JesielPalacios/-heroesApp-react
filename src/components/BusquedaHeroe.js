import React from 'react'
import { useParams } from 'react-router-dom';
import dataHeroes from "../assets/data/heroes.json";
import { HeroeTarjeta } from './HeroeTarjeta';

export const BusquedaHeroes = () => {
    const {termino} = useParams();

    let idx, data = {"heroes": []};

    const buscarHeroes = () => {
        let terminoFinal = termino.toLowerCase();
        for ( let i = 0; i < dataHeroes.heroes.length; i ++ ) {
            let heroe = dataHeroes.heroes[i];
            let nombre = heroe.nombre.toLowerCase();
            if( nombre.indexOf( terminoFinal ) >= 0 ){
                idx = i;
                data.heroes.push( heroe );
            }
        }
        return data;
    };

    return (
        <div>
            <h1>Buscando: <small>{ termino }</small></h1>
            <hr />
            <div className="card-columns">
                {
                    data.heroes.length > 0 ?
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-info" role="alert">
                                <h3 colSpan={3}>No existen resultados con el término: { termino }</h3>
                            </div>
                        </div>
                    </div> :
                    <HeroeTarjeta data={buscarHeroes()} idx={idx} />
                }
            </div>
        </div>
    )
}