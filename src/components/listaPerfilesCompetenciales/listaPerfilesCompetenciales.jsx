import React from "react";

/**         ESTILO         */
import './listaPerfilesCompetenciales.css';

/**         COMPONENTES        */
import BotonFiltro from "../botonFiltro/botonFiltro";

const ListaPerfilesCompetenciales = (props) => {

    function mostrarPerfilesCompetenciales(value) {
        return (
            <BotonFiltro key={value.idPerfil} codigo={value.nombrePerfil} nombre={value.nombrePerfil}></BotonFiltro>
        );
    }

    return (

        <div className="col-lg-12 bg-light">

            <div className="row">

                <div className="col-lg-12">

                    <p>Filtra por perfiles competenciales</p>

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