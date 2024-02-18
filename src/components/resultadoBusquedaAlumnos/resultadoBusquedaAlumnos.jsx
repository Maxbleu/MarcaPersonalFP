import React, { useContext } from "react";

/**            COMPONENTES             */
import AlumnoMinCard from "../alumnoMinCard/alumnoMinCard";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const ResultadoBusquedaAlumnos = (props) => {

    //  CONTEXT IDIOMA
    const idioma = useContext(IdiomaSeleccionadaContext);

    function mostrarAlumnos(value){
        const key = value.nombre.concat(Math.floor(Math.random()*999));
        return <AlumnoMinCard 
                key={key}
                avatar={value.avatar}
                nombre={value.nombre} 
                apellidos={value.apellidos} 
                idiomas={value.idiomas} 
                ciclos={value.ciclos}
                sobreMi={value.sobre_mi}></AlumnoMinCard>
    }

    return (

        <div className="row">

            <div className="col-lg-12">

                <p>{idioma.secciones.emp.sec.alu.tituloResultados}</p>

            </div>

            <div className="col-lg-12 bg-light">

                <div className="row">

                    {
                        props.alumnos.map(mostrarAlumnos)
                    }

                </div>

            </div>

        </div>

    )

}

export default ResultadoBusquedaAlumnos;