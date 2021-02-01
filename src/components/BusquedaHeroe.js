import React from 'react'
import { useParams } from 'react-router-dom';

export const BusquedaHeroes = () => {
    const {termino} = useParams();
    return (
        <div>
            <h1>Buscando: <small>{ termino }</small></h1>
        </div>
    )
}