import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const HeroeTarjeta = (props) => {
    return (
        <div>
            {props.data.heroes.map((heroe, index) => (
                <div key={index} className="card animated fadeIn fast">
                    <img src={heroe.img} className="card-img-top" alt={`Imagen de ${heroe.nombre}`} />
                    <div className="card-body">
                        <h5 className="card-title">{ heroe.nombre }</h5>
                        <p className="card-text">{ heroe.bio }</p>
                        <p className="card-text"><small className="text-muted">{ heroe.aparicion }</small></p>
                        {
                            props.idx > !null ? (
                            <Link to={`/heroe/${props.idx}`} className="btn btn-outline-primary btn-block">
                                Ver mas..
                            </Link>
                                ) : (
                            <Link to={`/heroe/${index}`} className="btn btn-outline-primary btn-block">
                                Ver mas..
                            </Link>
                                )
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

HeroeTarjeta.propTypes = {
    data: PropTypes.object.isRequired
};