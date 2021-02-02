import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Navegabar2 = () => {

    const onSubmit = e => {
        e.preventDefault(); 
        // e.target.reset()
    };

    const [termino, setTermino] = useState({
        termino: ''
    });

    const handleInputChange = (e) => {
        setTermino({
            ...termino,
            [e.target.name] : e.target.value,
        });
    };

    let valor = termino.buscarTexto;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-inverse bg-inverse navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand">
                    <img src="/img-heroes/A-64.png" width="30" height="30" alt="" loading="lazy" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/heroes">Heroes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/">Action</Link>
                                <Link className="dropdown-item" to="/">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Something else here</Link>
                            </div>
                        </li>
                    </ul>

                    <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0">
                        <input name="buscarTexto" className="form-control mr-sm-2" type="search" placeholder="Buscar Héroe" aria-label="Search" onChange={handleInputChange} />
                        <Link to={`/buscar/${valor}`} className="btn btn-outline-primary my-2 my-sm-0" type="button">Buscar</Link>
                    </form>

                </div>
            </nav>
        </div>
    )
}