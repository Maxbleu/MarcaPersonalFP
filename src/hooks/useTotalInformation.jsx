import React, { useState, useEffect } from "react";

/**     SERVICES     */
import { getAllTotalInformation } from "../services/getAllTotalInformation";


const UseTotalInformation = (heRecibidoLosDatos) => {

    //  Este hoock se encargará
    //  de almacenar los datos que recogamos de
    //  la api de Mocky
    const [totalInformation, setInformacionTotal] = useState({});

    /**
     * Este hoock se encargará de llamar
     * a la api de Mocky y indicará que
     * hemos obtenido los datos de la api
     */
    useEffect(() => {
        obtenerTotalInformation();
    }, []);

    /**
     * Este método se encarga de obtener
     * los datos que del endpoint de la api
     * de Mocky
     */
    function obtenerTotalInformation() {
        getAllTotalInformation().then(totalInformation => {
            setInformacionTotal(totalInformation);
            heRecibidoLosDatos(true);
        });
    }

    return { totalInformation };
}

export default UseTotalInformation;
