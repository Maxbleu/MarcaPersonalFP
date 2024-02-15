import React, { useEffect, useState } from "react";

/**         SERVICES         */
import { getFamiliasProfesionales } from "../services/getFamiliasProfesionales";

const UseFamiliasProfesionales = (heRecibidoFamiliasProfesionales) => {

    const [familiasProfesionales,setFamiliasProfesionales] = useState([]);

    function obtenerFamiliasProfesionales(){
        getFamiliasProfesionales().then(listaFamiliasProfesionales => {
            setFamiliasProfesionales(listaFamiliasProfesionales);
        });
    }

    useEffect(() => {
        obtenerFamiliasProfesionales();
        heRecibidoFamiliasProfesionales();
    },[])

    return ( familiasProfesionales )

}

export default UseFamiliasProfesionales;