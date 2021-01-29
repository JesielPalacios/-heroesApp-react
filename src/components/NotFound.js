import React from 'react'
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
            <div className="container mt-5">
                <h3>Ruta no encontrada</h3>
                <p>
                    <span>
                        A continuación puede dirigirse a la página principal para conocer mejor lo que necesita:<br/><br/><br/>
                        <Link to="/">
                            <button className="btn btn-outline-primary">Ir a Página principal</button>
                        </Link>
                    </span>
                </p>
            </div>
    )
}