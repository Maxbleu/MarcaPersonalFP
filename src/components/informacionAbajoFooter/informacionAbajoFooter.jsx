import React from "react";

/**       ESTILO       */
import './informacionAbajoFooter.css';

const InformacionAbajoFooter = (props) => {

    return (

        <div className="col-lg-6 mx-auto">

            <div className="row">

                <div className="col-7 col-lg-2">

                    <img src="/src/assets/logo/mp-logoReves.png" className="imgAbajoFooter" alt="Logo Marca Personal" />

                </div>

                <div className="col-lg-10 parrafoAbajoFooter">

                    <p className="text-white"><b>Marca Personal FP</b> | {props.parteAbajo.dwb} CFGS Desarrollo de Aplicaciones Web © 2023</p>

                </div>

            </div>

        </div>

    )

}

export default InformacionAbajoFooter;