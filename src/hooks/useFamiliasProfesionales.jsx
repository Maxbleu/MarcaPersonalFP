import React, { useEffect, useState } from "react";

/**         SERVICES         */
import { getFamiliasProfesionales } from "../services/getFamiliasProfesionales";

const UseFamiliasProfesionales = (heRecibidoLosDatos) => {

    const [familiasProfesionales,setFamiliasProfesionales] = useState([]);

    function obtenerFamiliasProfesionales(){
        if(familiasProfesionales.length === 0){
            getFamiliasProfesionales().then(listaFamiliasProfesionales => {
                setFamiliasProfesionales(listaFamiliasProfesionales);
                heRecibidoLosDatos(true);
            });
        }
    }

    useEffect(() => {
        obtenerFamiliasProfesionales();
    },[])

    return ( familiasProfesionales )

}

export default UseFamiliasProfesionales;