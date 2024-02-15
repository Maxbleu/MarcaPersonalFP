import React, { useState } from "react";

/**       COMPONENTS      */
import MenuEmpresa from "../../components/menuEmpresa/menuEmpresa";
import AjaxLoader from '../../components/ajaxLoader/ajaxLoader';
import ListaFamiliasProfesionales from "../../components/listaFamiliasProfesionales/listaFamiliasProfesionales";
import ResultadoBusquedaProyectos from "../../components/resultadoBusquedaProyectos/resultadoBusquedaProyectos";

/**         HOOCKS         */
import UseFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import UseProyectos from "../../hooks/useProyectos";

const BusquedaProyectos = () => {

    //  FAMILIAS PROFESIONALES
    const [recibidoFamiliasProfesionales, setRecibidoFamiliasProfesionales] = useState(false);
    const familiasProfesionales = UseFamiliasProfesionales(setRecibidoFamiliasProfesionales);

    //  PROYECTOS
    const [recibidoProyectos, setRecibidoProyectos] = useState(false);
    const proyectos = UseProyectos(setRecibidoProyectos);

    return (
        <div className="row busquedaProyectos">
            <MenuEmpresa></MenuEmpresa>
            {
                !recibidoFamiliasProfesionales && !recibidoProyectos ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>Búsqueda de Proyectos</h5>
                            </div>
                            <ListaFamiliasProfesionales listaFamiliasProfesionales={familiasProfesionales}></ListaFamiliasProfesionales>
                            <ResultadoBusquedaProyectos proyectos={proyectos}></ResultadoBusquedaProyectos>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BusquedaProyectos;