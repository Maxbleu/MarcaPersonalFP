import React, { useState } from "react";

/**         HOOCKS         */
import UseFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import UsePerfilesCompetenciales from "../../hooks/usePerfilesCompetenciales";
import UseAlumnos from "../../hooks/useAlumnos";

/**         COMPONENTS        */
import MenuEmpresa from "../../components/menuEmpresa/menuEmpresa";
import AjaxLoader from '../../components/ajaxLoader/ajaxLoader';
import ListaFamiliasProfesionales from "../../components/listaFamiliasProfesionales/listaFamiliasProfesionales";
import ListaPerfilesCompetenciales from "../../components/listaPerfilesCompetenciales/listaPerfilesCompetenciales";
import ResultadoBusquedaAlumnos from "../../components/resultadoBusquedaAlumnos/resultadoBusquedaAlumnos";

const BusquedaAlumnos = () => {

    //  FAMILIAS PROFESIONALES
    const [recibidoFamiliasProfesionales, setRecibidoFamiliasProfesionales] = useState(false);
    const familiasProfesionales = UseFamiliasProfesionales(setRecibidoFamiliasProfesionales);

    //  PERFILES COMPETENCIALES
    const [recibidoPerfilesCompetenciales, setRecibidoPerfilesCompetenciales] = useState(false);
    const perfilesCompetenciales = UsePerfilesCompetenciales(setRecibidoPerfilesCompetenciales);

    //  ALUMNOS
    const [recibidoAlumnos, setAlumnos] = useState(false);
    const alumnos = UseAlumnos(setAlumnos);

    return (

        <div className="row busquedaAlumnos">

            <MenuEmpresa></MenuEmpresa>

            {
                !recibidoFamiliasProfesionales && !recibidoPerfilesCompetenciales ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>Búsqueda de Alumnos</h5>
                            </div>
                            <ListaPerfilesCompetenciales listaPerfilesCompetenciales={perfilesCompetenciales}></ListaPerfilesCompetenciales>
                            <ListaFamiliasProfesionales listaFamiliasProfesionales={familiasProfesionales}></ListaFamiliasProfesionales>
                            <ResultadoBusquedaAlumnos alumnos={alumnos}></ResultadoBusquedaAlumnos>
                        </div>
                    </div>
                )
            }

        </div>

    )

}

export default BusquedaAlumnos;