import React from "react";

const DatoTotalPie = (props) => {

    return (

        <div className="col-lg-4">

            <div className="row">

                <div className="col-lg-12 text-center text-white">

                    <b>{props.titulo}</b>

                </div>

            </div>

            <div className="row">

                <div className="col-lg-12 text-center text-white">

                    <p className="display-4">{props.cantidad}</p>

                </div>

            </div>

        </div>

    )

}

export default DatoTotalPie;