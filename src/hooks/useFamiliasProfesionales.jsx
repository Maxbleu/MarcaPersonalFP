import React, { useEffect, useState } from "react";

/**         SERVICES         */
import { getFamiliasProfesionales } from "../services/getFamiliasProfesionales";

const UseFamiliasProfesionales = (heRecibidoLosDatos) => {

    const [familiasProfesionales,setFamiliasProfesionales] = useState([]);

    function obtenerFamiliasProfesionales(){
        getFamiliasProfesionales().then(listaFamiliasProfesionales => {
            setFamiliasProfesionales(listaFamiliasProfesionales);
            heRecibidoLosDatos(true);
        });
    }

    useEffect(() => {
        obtenerFamiliasProfesionales();
    },[])

    return ( familiasProfesionales )

}

export default UseFamiliasProfesionales;