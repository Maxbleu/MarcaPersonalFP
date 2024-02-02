import React, { useState } from "react";

/**      ESTILO      */
import './home.css';

/**      COMPONENTES      */
import Seccion from "../../components/seccion/seccion";
import Pie from "../../components/pie/pie";
import AjaxLoader from "../../components/ajaxLoader/ajaxLoader";

/**       HOOCKS       */
import UseTotalInformation from '../../hooks/useTotalInformation';

/**       CONTEXTS       */
import TotalInformationContext from "../../contexts/totalInformacionContext";

const Home = (props) => {

    //  Este hoock se encargará de indicar si
    //  el programa ha recogido los datos
    const [estaBuscando, setEstaBuscando] = useState(false);
    
    //  Este campo recogerá los datos datos
    //  de la api.
    const totalInformation = UseTotalInformation(guardarEstaBuscandoTotalInformacion);

    /**
     * Este método se encargará de indicar
     * que el programa ha recogido los
     * datos de la api de Mocky
     */
    function guardarEstaBuscandoTotalInformacion(){
        setEstaBuscando(true);
    }

    return (
        <>
            {
                !estaBuscando ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <div className="row">

                        <div className="col-lg-12 secciones">

                            <div className="row d-flex justify-content-center">

                                <Seccion rutaImg="/src/assets/secciones/empresa - copia.jpg" ruta="empresa" nombre={props.idioma.secciones.emp}></Seccion>

                                <Seccion rutaImg="/src/assets/secciones/school - copia.jpg" ruta="centroeducativo" nombre={props.idioma.secciones.esc}></Seccion>

                                <Seccion rutaImg="/src/assets/secciones/student - copia.jpg" ruta="alumno" nombre={props.idioma.secciones.alu}></Seccion>

                            </div>

                        </div>

                        <div className="col-lg-12">

                            <div className="row">

                                <TotalInformationContext.Provider value={totalInformation}>

                                    <Pie idioma={props.idioma}></Pie>

                                </TotalInformationContext.Provider>

                            </div>

                        </div>

                    </div>
                )
            }
        </>

    )

}

export default Home;