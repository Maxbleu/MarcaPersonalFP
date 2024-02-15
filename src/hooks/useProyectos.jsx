import React, { useEffect, useState } from "react";

/**           SERVICES           */
import { getAllProyectos } from './../services/getAllProyectos';

const UseProyectos = (heRecibidoProyectos) => {

    const [proyectos,setProyectos] = useState([]);

    function obtenerProyectos(){
        getAllProyectos().then(listaProyectos => {
            setProyectos(listaProyectos);
        });
    }

    useEffect(() => {
            obtenerProyectos();
            heRecibidoProyectos();
        },[])

    return ( proyectos )

}

export default UseProyectos;