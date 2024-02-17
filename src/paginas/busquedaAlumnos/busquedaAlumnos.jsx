import React, { useState } from "react";

/**         HOOCKS         */
import UseFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import UsePerfilesCompetenciales from "../../hooks/usePerfilesCompetenciales";
import UseAlumnos from "../../hooks/useAlumnos";
import UseFiltrarAlumnos from "../../hooks/useFiltrarAlumnos";

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

    //  FAMILIAS PROFESIONALES SELECCIONADAS PARA FILTRAR
    const [familiasProfesionalesSeleccionadas, setFamiliasProfesionalesSeleccionadas] = useState([]);

    //  PERFILES COMPETENCIALES SELECCIONADAS PARA FILTRAR
    const [perfilesCompetencialesSeleccionadas, setPerfilesCompetencialesSeleccionadas] = useState([]);

    //  ALUMNOS FILTRADOS POR FAMILIAS PROFESIONALES Y PERFILES COMPETENCIALES
    const alumnosFiltrados = UseFiltrarAlumnos(alumnos,perfilesCompetencialesSeleccionadas,familiasProfesionalesSeleccionadas);

    function añadirFamiliaProfesionalSeleccionada(familiaProfesional){
        setFamiliasProfesionalesSeleccionadas([...familiasProfesionalesSeleccionadas,familiasProfesionales.filter((value) => {
            return value.nombre === familiaProfesional;
        })[0]]);
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

    function añadirPerfilCompetencialSeleccionada(perfilCompetencial){
        setPerfilesCompetencialesSeleccionadas([...perfilesCompetencialesSeleccionadas,perfilesCompetenciales.filter((value) => {
            return value.nombrePerfil === perfilCompetencial;
        })[0]]);
    }

    function borrarPerfilCompetencialSeleccionada(perfilCompetencial){
        let perfilCompetencialSeleccionada = perfilesCompetenciales.filter((value) => {
            return value.nombrePerfil === perfilCompetencial;
        })[0];
        let listaFamiliasProfesionalesSeleccionadas = perfilesCompetencialesSeleccionadas.filter(
            (value) => {
                return value.nombrePerfil !== perfilCompetencialSeleccionada.nombrePerfil;
            }
        );
        setPerfilesCompetencialesSeleccionadas(listaFamiliasProfesionalesSeleccionadas);
    }

    return (

        <div className="row busquedaAlumnos">

            <MenuEmpresa></MenuEmpresa>

            {
                !recibidoFamiliasProfesionales && !recibidoPerfilesCompetenciales && !recibidoAlumnos ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="col-lg-12 bg-secondary">
                        <div className="row">
                            <div className="col-lg-12">
                                <h5>Búsqueda de Alumnos</h5>
                            </div>
                            <ListaPerfilesCompetenciales 
                                listaPerfilesCompetenciales={perfilesCompetenciales}
                                añadirPerfilCompetencial={añadirPerfilCompetencialSeleccionada}
                                borrarPerfilCompetencial={borrarPerfilCompetencialSeleccionada}>
                                </ListaPerfilesCompetenciales>
                            <ListaFamiliasProfesionales 
                                listaFamiliasProfesionales={familiasProfesionales} 
                                añadirFamiliaProfesional={añadirFamiliaProfesionalSeleccionada}
                                borrarFamiliaProfesional={borrarFamiliaProfesionalSeleccionada}></ListaFamiliasProfesionales>
                            <div className="col-lg-12">

                                <ResultadoBusquedaAlumnos 
                                    alumnos={alumnosFiltrados}>
                                    </ResultadoBusquedaAlumnos>

                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    )

}

export default BusquedaAlumnos;