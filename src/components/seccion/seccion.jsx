import React from "react";
import {Link } from 'react-router-dom';

/**       ESTILO       */
import './seccion.css';

const Seccion = (props) => {

    return (

        <div className="col-lg-3 m-5 pt-5 pb-5 blanco card">

            <Link to={"/".concat(props.ruta)}>

                <img src={props.rutaImg} className="w-100" alt={"Imagen de la sección de ".concat(props.ruta)} />

                <div className="card__content">
                    <h2>{props.nombre}</h2>
                </div>

            </Link>

        </div>

    )

}

export default Seccion;