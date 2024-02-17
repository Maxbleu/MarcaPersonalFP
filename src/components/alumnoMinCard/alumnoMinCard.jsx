import React from "react";

/**         ESTILO          */
import './alumnoMinCard.css';

/**         MOCKS           */
import banderas from "../../mocks/banderas/mock-banderas";

const AlumnoMinCard = (props) => {

    function mostartBanderas(value){
        return <div className="col-md-4">
            <img key={Math.floor(Math.random()*1000)} src={banderas[value.alpha2].url} className="banderaAlumno" alt="Imagen de la bandera de España" />
        </div>
    }

    function mostrarNiveles(value){
        return <div className="col-md-4 ml-1">
            <p>{value.nivel}</p>
        </div>
    }

    function mostrarCertificado(value){
        return <div className="col-md-4 ml-1">
            <p>{value.certificado === 1 ? "C" : "SC"}</p>
        </div>
    }

    function mostrarCiclos(value){
        return <b> {value.codCiclo} </b>
    }

    return (
        <div className="card col-md-3">
            <div className="row">
                <div className="col-md-5">
                    <img src="https://source.unsplash.com/random/200x200/?proyecto" className="imagenAlumno" />
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="card-title">{props.nombre.concat(" " + props.apellidos)}</h5>
                        </div>
                        <div className="ml-1 col-md-11 informacionAlumno">
                            <div className="row">
                                {
                                    props.idiomas.map(mostartBanderas)
                                }
                            </div>
                            <div className="row">
                                {
                                    props.idiomas.map(mostrarNiveles)
                                }
                            </div>
                            <div className="row">
                                {
                                    props.idiomas.map(mostrarCertificado)
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-11 ml-1">
                                    <p><b>Perfiles</b></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-11 ml-1">
                                    <p><b>Ciclos:</b>{
                                        props.ciclos.map(mostrarCiclos)
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11 mr-2 mt-3 mb-3">
                    <p>{props.sobreMi}</p>
                </div>
            </div>
        </div>

    )

}

export default AlumnoMinCard;