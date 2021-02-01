import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Heroe = (props) => {
    const {id} = useParams(), {heroes} = props.data;
    return (
        <div className="container mt-5">
            <h1 className="animated fadeIn">
                { heroes[id].nombre }{" "}
                <small>({ heroes[id].aparicion })</small>
            </h1>
            <hr />
            <div className="row animated fadeIn fas">
                <div className="col-md-4">
                    <img src={heroes[id].img} className="card-img-top" alt={`Imagen de ${heroes[id].nombre}`} />
                    <br /><br />
                    <Link to={`/heroes`} className="btn btn-outline-danger btn-block">Regresar</Link><br />
                    {/* <button className="btn btn-outline-danger btn-block">Regresar</button> */}
                </div>
                <div className="col-md-8">
                    <h3>{ heroes[id].nombre }</h3><hr/>
                    <p>{ heroes[id].bio }</p>
                    <div>
                        {
                            heroes[id].casa > "DC" ?
                            <img src="/img-heroes/marvel-logo.png" className="img-logo" alt={`Imagen de ${heroes[id].casa}`} /> :
                            <img src="/img-heroes/dc-logo.jpg" className="img-logo" alt={`Imagen de ${heroes[id].casa}`} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}