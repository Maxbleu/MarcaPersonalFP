import React, { useContext, useState, useEffect } from "react";

/**    ESTILO    */
import './idioma.css';

/**    CONTEXTS       */
import AccionAsignarIdiomaContext from "../../contexts/accionAsignarIdiomaContext";

const Idiomas = () => {

    const asignarIdioma = useContext(AccionAsignarIdiomaContext);
    const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

    /**
     * Este método se encarga de enviar
     * el idioma seleccionado por el usuario
     * @param {event} event 
     */
    function enviarIdiomaSeleccionado(event){

        asignarIdioma(event.currentTarget.attributes.value.nodeValue);

    }

    /**
     * Este hoock se encargará que en la primera renderización
     * del componente indicará el tamaño de la ventana.
     * Para en caso del tamaño móvil podamos mostrar el 
     * componente navbar-toggler
     */
    useEffect(() => {
        const manejarCambioDeTamaño = () => {
            setAnchoVentana(window.innerWidth);
        };
    
        window.addEventListener('resize', manejarCambioDeTamaño);
    
        return () => {
            window.removeEventListener('resize', manejarCambioDeTamaño);
        };
    }, []);

    return (

        <div className="col-sm-2 col-lg-1">

            <div className="row">
                {

                    anchoVentana>980 ? (

                        <div className="col-lg-12 idiomas">

                            <span onClick={enviarIdiomaSeleccionado} value="es">
                                <img src="/src/assets/banderas/flag-for-flag-spain-svgrepo-com.svg" className="idioma" alt="Imagen de la bandera de España" />
                            </span>

                            <span onClick={enviarIdiomaSeleccionado} value="en">
                                <img src="/src/assets/banderas/united-kingdom-uk-svgrepo-com.svg" className="idioma" alt="Imagen de la bandera inglesa" />
                            </span>

                        </div>

                    ) : (

                        <div className="col-lg-12 idiomas">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <span onClick={enviarIdiomaSeleccionado} value="es">
                                            <img src="/src/assets/banderas/flag-for-flag-spain-svgrepo-com.svg" className="idioma" alt="Imagen de la bandera de España" />
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <span onClick={enviarIdiomaSeleccionado} value="en">
                                            <img src="/src/assets/banderas/united-kingdom-uk-svgrepo-com.svg" className="idioma" alt="Imagen de la bandera inglesa" />
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    )

                }

            </div>

        </div>

    )

}

export default Idiomas;