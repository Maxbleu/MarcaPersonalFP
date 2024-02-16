import React from "react";

/**            COMPONENTES             */
import ProyectoMinCard from './../proyectoMinCard/proyectoMinCard';

const ResultadoBusquedaAlumnos = (props) => {

    function mostrarAlumnos(value){
        return <ProyectoMinCard key={value.id} nombre={value.nombre}></ProyectoMinCard>
    }

    return (

        <div className="col-lg-12">

            <div className="row">

                <div className="col-lg-12">

                    <p>Resultados</p>

                </div>

                <div className="col-lg-12 bg-light">

                    <div className="row">

                        {
                            props.alumnos.map(mostrarAlumnos)
                        }

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ResultadoBusquedaAlumnos;