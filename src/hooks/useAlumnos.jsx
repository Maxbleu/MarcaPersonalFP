import React, { useEffect, useState } from "react";

/**           SERVICES           */
import { getAllAlumnos } from './../services/getAllAlumnos';

const UseAlumnos = (heRecibidoLosDatos) => {

    const [alumnos,setAlumnos] = useState([]);

    function obtenerAlumnos(){
        getAllAlumnos().then(listaAlumnos => {
            setAlumnos(listaAlumnos);
            heRecibidoLosDatos(true);
        });
    }

    useEffect(() => {
            obtenerAlumnos();
        },[])

    return ( alumnos )

}

export default UseAlumnos;