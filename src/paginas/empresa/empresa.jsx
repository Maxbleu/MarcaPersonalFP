import React, {useContext} from "react";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

/**         COMPONENTS        */
import MenuEmpresa from "../../components/menuEmpresa/menuEmpresa";

/**         ESTILO         */
import './estilo/empresa.css';

const Empresa = () => {

    const idioma = useContext(IdiomaSeleccionadaContext);

    return (

        <div className="row empresa">

            <MenuEmpresa></MenuEmpresa>

        </div>

    )

}

export default Empresa;