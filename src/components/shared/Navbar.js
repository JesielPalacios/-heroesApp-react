import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Navegabar = () => {
    const onSubmit = e => {
        e.preventDefault(); e.target.reset()
    },

    [termino, setTermino] = useState({
        termino: ''
    })

    let valor = termino.buscarTexto;
    
    const handleInputChange = (e) => {
        setTermino({
            ...termino,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse bg-inverse">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link Link className="navbar-brand">
                    <img src="../../assets/img/A-64.png" alt="" width="30" height="24" className="d-inline-block align-top" />
                        {/* Navbar */}
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/heroes">Heroes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"
                                // href="#"
                                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item">Action</Link></li>
                                    <li><Link className="dropdown-item">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" activeClassName="active" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form onSubmit={onSubmit} className="d-flex">
                            <input
                                name="buscarTexto"
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar Héroe"
                                aria-label="Search"
                                onChange={handleInputChange}
                                // ref={enviarFormulario}
                            />
                            <Link
                                to={`/buscar/${valor}`}
                                className="btn btn-outline-primary btn-block"
                                type="submit"
                                // onClick={}
                            >
                                Buscar
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}