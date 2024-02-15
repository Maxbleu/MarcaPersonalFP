import React, { useState } from "react";

/**         HOOCKS         */
import UseFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";

/**         COMPONENTS        */
import MenuEmpresa from "../../components/menuEmpresa/menuEmpresa";
import ListaFamiliasProfesionales from "../../components/listaFamiliasProfesionales/listaFamiliasProfesionales";
import AjaxLoader from '../../components/ajaxLoader/ajaxLoader';

const BusquedaAlumnos = () => {

    //  FAMILIAS PROFESIONALES
    const [recibidoFamiliasProfesionales, setRecibidoFamiliasProfesionales] = useState(false);
    const familiasProfesionales = UseFamiliasProfesionales(setRecibidoFamiliasProfesionales);

    //  PERFILES COMPETENCIALES

    //  ALUMNOS

    return (

        <div className="row busquedaAlumnos">

            <MenuEmpresa></MenuEmpresa>

            {
                !recibidoFamiliasProfesionales ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>Búsqueda de Alumnos</h5>
                            </div>
                            <ListaFamiliasProfesionales listaFamiliasProfesionales={familiasProfesionales}></ListaFamiliasProfesionales>
                        </div>
                    </div>
                )
            }

        </div>

    )

}

export default BusquedaAlumnos;