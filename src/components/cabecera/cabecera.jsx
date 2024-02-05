import React from "react";

/**     ESTILO     */
import './cabecera.css';

/**     COMPONENTES     */
import Logo from "../logo/logo";
import Idiomas from "../idiomas/idiomas";
import Titulo from "../titulo/titulo";

const Cabecera = (props) => {

    return (
        <nav className="row blanco navbar-dark">

            <Logo></Logo>

            <Titulo></Titulo>

            <Idiomas asignarIdiomaSeleccionado = {props.asignarIdiomaSeleccionado}></Idiomas>

        </nav>
    )

}

export default Cabecera;