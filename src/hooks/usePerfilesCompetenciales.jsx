import React, { useEffect, useState } from "react";

/**           SERVICES           */
import { getAllPerfilesCompetenciales } from './../services/getAllPerfilesCompetenciales';

const UsePerfeliesCompetenciales = (heRecibidoLosDatos) => {

    const [perfilesCompetenciales,setPerfilesCompetenciales] = useState([]);

    function obtenerPerfilesCompetenciales(){
        getAllPerfilesCompetenciales().then(perfilesCompetenciales => {
            let listaPerfilesCompetenciales = perfilesCompetenciales.PerfilesCompetenciales
            setPerfilesCompetenciales(listaPerfilesCompetenciales);
            heRecibidoLosDatos(true);
        });
    }

    useEffect(() => {
            obtenerPerfilesCompetenciales();
        },[])

    return ( perfilesCompetenciales )

}

export default UsePerfeliesCompetenciales;