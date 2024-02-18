import React, { useContext } from "react";

/**         ESTILO         */
import './listaPerfilesCompetenciales.css';

/**         COMPONENTES        */
import BotonFiltro from "../botonFiltro/botonFiltro";

/**         CONTEXT         */
import IdiomaSeleccionadaContext from "../../contexts/idiomaSeleccionadoContext";

const ListaPerfilesCompetenciales = (props) => {

    //  CONTEXT IDIOMA
    const idioma = useContext(IdiomaSeleccionadaContext);

    function mostrarPerfilesCompetenciales(value) {
        return (
            <BotonFiltro 
                key={value.idPerfil} 
                codigo={value.nombrePerfil} 
                nombre={value.nombrePerfil}
                añadir={props.añadirPerfilCompetencial}
                borrar={props.borrarPerfilCompetencial}>
                </BotonFiltro>
        );
    }

    return (

        <div className="col-lg-12 bg-light">

            <div className="row">

                <div className="col-lg-12">

                    <p>{idioma.secciones.emp.sec.alu.tituloFiltroPerfilComptencial}</p>

                </div>

                <div className="col-lg-12">

                    <div className="row">

                        <div className="col">

                            <ul className="list-inline">

                                {

                                    props.listaPerfilesCompetenciales.map(mostrarPerfilesCompetenciales)

                                }

                            </ul>

                        </div>
                    
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ListaPerfilesCompetenciales;