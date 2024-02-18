import React, { useContext } from "react";

/**         ESTILO         */
import './listaFamiliasProfesionales.css';

/**         COMPONENTES        */
import BotonFiltro from "../botonFiltro/botonFiltro";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const ListaFamiliasProfesionales = (props) => {

    //  CONTEXT IDIOMA
    const idioma = useContext(IdiomaSeleccionadaContext);

    function mostrarFamiliasProfesionales(value) {
        return (
            <BotonFiltro 
                key={value.id + value.nombre} 
                codigo={value.nombre}
                nombre={value.nombre}
                añadir={props.añadirFamiliaProfesional}
                borrar={props.borrarFamiliaProfesional}>
            </BotonFiltro>
        );
    }

    return (

        <div className="col-lg-12 bg-light">

            <div className="row">

                <div className="col-lg-12">

                    <p>{idioma.secciones.emp.sec.alu.tituloFiltroFamiliaProfesional}</p>

                </div>

                <div className="col-lg-12">

                    <div className="row">

                        <div className="col">

                            <ul className="list-inline">

                                {

                                    props.listaFamiliasProfesionales.map(mostrarFamiliasProfesionales)

                                }

                            </ul>

                        </div>
                    
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ListaFamiliasProfesionales;