import React from "react";

/**         ESTILO          */
import './proyectoMinCard.css';

/**         COMPONENTS        */
import Tooltip from '../tooltip/tooltip';

const ProyectoMinCard = (props) => {

    function mostrarAlumnosProyecto(value){
        return <span><br/>{value.nombre}</span>;
    }

    function mostrarCiclos(value){
        return <Tooltip title={value.nombre}>
            {" " + value.codCiclo + " " + "|"}
        </Tooltip>
    }

    return (
        <div className="card col-md-3">
            <div className="row">
                <div className="col-md-5">
                    <img src="https://source.unsplash.com/random/500x500/?proyecto" className="imagenAlumno" />
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-12">
                            <h5>{props.nombre}</h5>
                        </div>
                        <div className="col-md-12 bg-light">
                            <b>ALUMNOS:</b>{
                                props.estudiantes.map(mostrarAlumnosProyecto)
                            }
                        </div>
                        <div className="col-md-12 bg-light">
                            <b>Tutor:</b> {props.docente_id}
                        </div>
                        <div className="col-md-12 bg-light">
                            <b>Ciclos:</b> {
                                props.ciclos.map(mostrarCiclos)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProyectoMinCard;