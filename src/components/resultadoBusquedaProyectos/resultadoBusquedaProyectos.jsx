import React from "react";

/**            COMPONENTES             */
import ProyectoMinCard from './../proyectoMinCard/proyectoMinCard';

const ResultadoBusquedaProyectos = (props) => {

    function mostrarProyectos(value){
        return <ProyectoMinCard nombre={value.nombre}></ProyectoMinCard>
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
                            props.proyectos.map(mostrarProyectos)
                        }

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ResultadoBusquedaProyectos;