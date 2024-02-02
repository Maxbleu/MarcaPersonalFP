import React from "react";

/**     ESTILO     */
import './iconoRedSocial.css';

const IconoRedSocial = (props) => {

    return (

        <a href={props.url}>

            <img src={props.rutaImg} className="iconoRS" alt={props.redSocial.concat(" de la Carlos III")} />

        </a>

    )

}

export default IconoRedSocial;