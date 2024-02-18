import React, { useContext } from "react";

/**         CONTEXT           */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const CentroEducativo = () => {

    const idioma = useContext(IdiomaSeleccionadaContext);

    return (

        <div>

            <h2>{idioma.secciones.esc.name}</h2>

        </div>

    )

}

export default CentroEducativo;