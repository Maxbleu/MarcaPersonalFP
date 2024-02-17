import React from "react";

export function UseFiltrarAlumnosPorPerfilesCompetenciales(alumnos, perfilesCompetencialesSeleccionados){
    let alumnosFiltrados = alumnos.filter((value) => {
        let hayAlumnosPorPerfilCompetencialSeleccionada = false;
        if(perfilesCompetencialesSeleccionados.length > 0){
            for(let i = 0; i<perfilesCompetencialesSeleccionados.length; i++){
                for(let j = 0; j<value.competencias.length; j++){
                    if(!hayAlumnosPorPerfilCompetencialSeleccionada){
                        hayAlumnosPorPerfilCompetencialSeleccionada = value.competencias[j].nombre === perfilesCompetencialesSeleccionados[i].nombrePerfil;
                    }
                }
            }
        }
        return hayAlumnosPorPerfilCompetencialSeleccionada;
    });
    return alumnosFiltrados;
}