import React from "react";

/**     ESTILO     */
import './cabecera.css';

/**     COMPONENTES     */
import Logo from "../logo/logo";
import Idiomas from "../idiomas/idiomas";
import Titulo from "../titulo/titulo";

const Cabecera = () => {

    return (
        <nav className="row blanco navbar-dark">

            <Logo></Logo>

            <Titulo></Titulo>

            <Idiomas></Idiomas>

        </nav>
    )

}

export default Cabecera;