import React from "react";

/**         ESTILO          */
import './proyectoMinCard.css';

const ProyectoMinCard = (props) => {

    return (
        <div className="card col-md-3">
            <div className="row card g-0 h-100 w-250">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProyectoMinCard;