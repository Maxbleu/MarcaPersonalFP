import React, { useContext } from "react";
import {Link} from 'react-router-dom';

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

/**         ESTILO         */
import './menuEmpresa.css';

const MenuEmpresa = () => {

    const idioma = useContext(IdiomaSeleccionadaContext);

    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark col-sm-12 menuEmpresa">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa">{idioma.secciones.emp.menu[0]}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa/proyectos">{idioma.secciones.emp.menu[1]}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/empresa/alumnos">{idioma.secciones.emp.menu[2]}</Link>
                    </li>    
                </ul>
            </div>
        </nav>

    )

}

export default MenuEmpresa;