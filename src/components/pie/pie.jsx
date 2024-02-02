import React, { useContext } from "react";

/**       COMPONENTES       */
import DatoTotalPie from "../../components/datoTotalPie/datoTotalPie";
import InformacionInstituto from "../informacionInstituto/informacionInstituto";
import InformacionAbajoFooter from "../informacionAbajoFooter/informacionAbajoFooter";

/**       CONTEXTS       */
import TotalInformationContext from "../../contexts/totalInformacionContext";

const Pie = (props) => {

    //  Usaremos este UseContext para recoger los datos
    //  que han empaqueta desde el componente Home, cuyos
    //  datos han sido recojidos de la propia api de Mocky
    const {totalInformation} = useContext(TotalInformationContext);

    return (

        <footer className="col-lg-12 azul-oscuro">

            <div className="row">

                <div className="col-lg-8 naranja mx-auto">

                    <div className="row">

                        <DatoTotalPie titulo={props.idioma.footer.emp} cantidad={totalInformation.empresas}></DatoTotalPie>

                        <DatoTotalPie titulo={props.idioma.footer.alu} cantidad={totalInformation.alumnos}></DatoTotalPie>

                        <DatoTotalPie titulo={props.idioma.footer.pro} cantidad={totalInformation.proyectos}></DatoTotalPie>

                    </div>

                </div>

            </div>

            <div className="row m-3">

                <InformacionInstituto></InformacionInstituto>

            </div>

            <div className="row m-3">

                <InformacionAbajoFooter parteAbajo={props.idioma.footer.parteAbajo}></InformacionAbajoFooter>

            </div>

        </footer>

    )

}

export default Pie;