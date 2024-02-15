import React, { useState } from "react";

const BotonFiltro = (props) => {

    const checkboxId = `familia-${props.codigo}-${props.id}`;

    return (

        <li key={checkboxId} className="list-inline-item">
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