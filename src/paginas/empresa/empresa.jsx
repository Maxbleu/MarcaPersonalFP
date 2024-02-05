import React, {useContext} from "react";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const Empresa = () => {

    const idioma = useContext(IdiomaSeleccionadaContext);

    return (

        <div>

            <h2>{idioma.secciones.emp}</h2>

        </div>

    )

}

export default Empresa;