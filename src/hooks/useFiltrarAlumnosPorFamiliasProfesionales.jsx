import React from "react";

export function UseFiltrarAlumnosPorFamiliasProfesionales(alumnos, familiasProfesionalesSeleccionadas){
    let alumnosFiltrados = alumnos.filter((value) => {
        let hayAlumnosPorFamiliaProfesionalSeleccionada = false;
        if(familiasProfesionalesSeleccionadas.length > 0){
            for(let i = 0; i<familiasProfesionalesSeleccionadas.length; i++){
                for(let j = 0; j<value.ciclos.length; j++){
                    if(!hayAlumnosPorFamiliaProfesionalSeleccionada){
                        hayAlumnosPorFamiliaProfesionalSeleccionada = (value.ciclos[j].familia_profesional.nombre.toUpperCase()) === familiasProfesionalesSeleccionadas[i].nombre;
                    }
                }
            }
        }
        return hayAlumnosPorFamiliaProfesionalSeleccionada;
    });
    return alumnosFiltrados;
}