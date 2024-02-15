import React from "react";

/**         ESTILO          */
import './proyectoMinCard.css';

const ProyectoMinCard = (props) => {

    return (
        <div class="card col-md-3">
            <div class="row card g-0 h-100 w-250">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.nombre}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProyectoMinCard;