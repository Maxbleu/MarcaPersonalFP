import React, { useContext } from "react";

/**            COMPONENTES             */
import ProyectoMinCard from './../proyectoMinCard/proyectoMinCard';

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const ResultadoBusquedaProyectos = (props) => {

    //  CONTEXT IDIOMA
    const idioma = useContext(IdiomaSeleccionadaContext);

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

                <p>{idioma.secciones.emp.sec.pro.tituloResultados}</p>

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