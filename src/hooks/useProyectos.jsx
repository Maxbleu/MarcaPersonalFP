import React, { useEffect, useState } from "react";

/**           SERVICES           */
import { getAllProyectos } from './../services/getAllProyectos';

const UseProyectos = (heRecibidoLosDatos) => {

    const [proyectos,setProyectos] = useState([]);

    function obtenerProyectos(){
        if(proyectos.length === 0){
            getAllProyectos().then(listaProyectos => {
                setProyectos(listaProyectos);
                heRecibidoLosDatos(true);
            });
        }
    }

    useEffect(() => {
            obtenerProyectos();
        },[])

    return ( proyectos )

}

export default UseProyectos;