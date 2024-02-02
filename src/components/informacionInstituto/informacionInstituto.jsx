import React from "react";

/**     MOCKS     */
import redesSociales from './../../mocks/iconos/redesSociales';

/**     COMPONENTE     */
import IconoRedSocial from "../iconoRedSocial/iconoRedSocial";

const InformacionInstituto = () => {

    /**
     * Este método se encarga de mostrar los iconos
     * de las redes sociales de Carlos III
     * @param value 
     * @param index 
     * @returns {IconoRedSocial}
     */
    function mostrarIconosRedesSociales(value, index){
        return <IconoRedSocial key={index} redSocial={value.nombre} rutaImg={value.rutaImg} url={value.url}></IconoRedSocial>
    }

    return (

        <div className="col-lg-12">

            <div className="row">

                <div className="col-lg-12 text-center text-white">

                    <h5><a href="https://cifpcarlos3.es/es" className="text-white">CIFP Carlos III</a></h5>

                </div>

            </div>

            <div className="row">

                <div className="col-lg-12 text-center text-white">

                    <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>

                </div>

            </div>

            <div className="row">

                <div className="col-lg-12 text-center">

                    {redesSociales.map(mostrarIconosRedesSociales)}

                </div>

            </div>

        </div>

    )

}

export default InformacionInstituto;