import React, { useState } from "react";

/**          ESTILO            */
import './botonFiltro.css';

const BotonFiltro = (props) => {

    const checkboxId = `familia-${props.codigo}-${props.id}`;

    const [estaSeleccionado, setEstaSeleccionado] = useState(false);

    function accionBoton(event){
        let siEstaraSeleccionado = !estaSeleccionado ? true : false;
        if(siEstaraSeleccionado){
            props.añadir(event.currentTarget.innerText);
        }else{
            props.borrar(event.currentTarget.innerText);
        }
        setEstaSeleccionado(siEstaraSeleccionado);
    }

    return (

        <li key={checkboxId} className="list-inline-item" value={props.nombre} onChange={accionBoton}>
            <div className="customCheckBoxHolder">
                <input
                    type="checkbox"
                    id={checkboxId}
                    className="customCheckBoxInput"
                />
                <label htmlFor={checkboxId} className="customCheckBoxWrapper">
                    <div className="customCheckBox">
                        <div className="inner">{props.nombre}</div>
                    </div>
                </label>
            </div>
        </li>

    )

}

export default BotonFiltro;