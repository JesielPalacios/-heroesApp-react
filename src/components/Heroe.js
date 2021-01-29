import React from 'react'
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
                    <Link to={`/heroes`} className="btn btn-outline-danger btn-block">Regresar</Link>
                    {/* <button
                        className="btn btn-outline-danger btn-block"
                        onClick={goBack}
                    >
                        Regresar
                    </button> */}
                </div>
                <div className="col-md-8">
                    <h3>{ heroes[id].nombre }</h3><hr/>
                    <p>{ heroes[id].bio }</p>    
                    <div>
                        {/* <img *ngIf="heroe.casa == 'Marvel'" class=" img-logo " src="assets/img/marvel-logo.png " alt="{{ heroe.casa }} " srcset=" ">
                        <img *ngIf="heroe.casa=='DC'" class="img-logo" src="assets/img/dc-logo.jpg" alt="{{ heroe.casa }}" srcset=""> */}
                    </div>
                </div>
            </div>
        </div>
    )
}