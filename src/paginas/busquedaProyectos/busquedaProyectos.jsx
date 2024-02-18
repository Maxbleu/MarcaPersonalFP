import React, { useState, useContext } from "react";

/**       COMPONENTS      */
import MenuEmpresa from "../../components/menuEmpresa/menuEmpresa";
import AjaxLoader from '../../components/ajaxLoader/ajaxLoader';
import ListaFamiliasProfesionales from "../../components/listaFamiliasProfesionales/listaFamiliasProfesionales";
import ResultadoBusquedaProyectos from "../../components/resultadoBusquedaProyectos/resultadoBusquedaProyectos";

/**       HOOCKS         */
import UseFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import UseProyectos from "../../hooks/useProyectos";
import { UseFiltrarProyectosPorFamiliasProfesionales } from "../../hooks/useFiltrarProyectosPorFamiliasProfesionales";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const BusquedaProyectos = () => {

    //  FAMILIAS PROFESIONALES
    const [recibidoFamiliasProfesionales, setRecibidoFamiliasProfesionales] = useState(false);
    const familiasProfesionales = UseFamiliasProfesionales(setRecibidoFamiliasProfesionales);

    //  PROYECTOS
    const [recibidoProyectos, setRecibidoProyectos] = useState(false);
    const proyectos = UseProyectos(setRecibidoProyectos);

    //  FAMILIAS PROFESIONALES SELECCIONADAS PARA FILTRAR
    const [familiasProfesionalesSeleccionadas, setFamiliasProfesionalesSeleccionadas] = useState([]);

    //  PROYECTOS FILTRADOS POR FAMILIAS PROFESIONALES
    const proyectosPorFamiliasProfesionales = UseFiltrarProyectosPorFamiliasProfesionales(proyectos,familiasProfesionalesSeleccionadas)

    //  CONTEXT IDIOMA
    const idioma = useContext(IdiomaSeleccionadaContext);

    function añadirFamiliaProfesionalSeleccionada(familiaProfesional){
        let familiaProfesionalSeleccionada = familiasProfesionales.filter((value) => {
            return value.nombre === familiaProfesional;
        })[0];
        setFamiliasProfesionalesSeleccionadas([...familiasProfesionalesSeleccionadas,familiaProfesionalSeleccionada]);
    }

    function borrarFamiliaProfesionalSeleccionada(familiaProfesional){
        let familiaProfesionalSeleccionada = familiasProfesionales.filter((value) => {
            return value.nombre === familiaProfesional;
        })[0];
        let listaFamiliasProfesionalesSeleccionadas = familiasProfesionalesSeleccionadas.filter(
            (value) => {
                return value.nombre !== familiaProfesionalSeleccionada.nombre;
            }
        );
        setFamiliasProfesionalesSeleccionadas(listaFamiliasProfesionalesSeleccionadas);
    }

    return (
        <div className="row busquedaProyectos">
            <MenuEmpresa></MenuEmpresa>
            {
                !recibidoFamiliasProfesionales && !recibidoProyectos ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="col-lg-12 bg-secondary">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>{idioma.secciones.emp.sec.pro.titulo}</h5>
                            </div>
                            <ListaFamiliasProfesionales listaFamiliasProfesionales={familiasProfesionales} borrarFamiliaProfesional={borrarFamiliaProfesionalSeleccionada} añadirFamiliaProfesional={añadirFamiliaProfesionalSeleccionada}></ListaFamiliasProfesionales>
                            <div className="col-lg-12">
                                <ResultadoBusquedaProyectos proyectos={proyectosPorFamiliasProfesionales}></ResultadoBusquedaProyectos>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BusquedaProyectos;