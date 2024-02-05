import React from "react";
import {Link} from 'react-router-dom';

/**         ESTILO         */
import './menuEmpresa.css';

const MenuEmpresa = () => {

    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark col-sm-12 menuEmpresa">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa">Empresa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa/proyectos">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa/alumnos">Alumnos</Link>
                    </li>    
                </ul>
            </div>
        </nav>

    )

}

export default MenuEmpresa;