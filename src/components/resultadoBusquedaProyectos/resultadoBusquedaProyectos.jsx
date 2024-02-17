import React from "react";

/**            COMPONENTES             */
import ProyectoMinCard from './../proyectoMinCard/proyectoMinCard';

const ResultadoBusquedaProyectos = (props) => {

    function mostrarProyectos(value){
        return <ProyectoMinCard 
                key={value.id} 
                nombre={value.nombre} 
                estudiantes={value.estudiantes}
                docente_id={value.docente_id}
                ciclos={value.ciclos}></ProyectoMinCard>
    }

    return (

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

    )

}

export default ResultadoBusquedaProyectos;