import React, { useContext } from "react";

/**       CONTEXTS       */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const Alumno = () => {

    const idioma = useContext(IdiomaSeleccionadaContext); 

    return (

        <div>

            <h2>{idioma.secciones.alu}</h2>

        </div>

    )

}

export default Alumno;