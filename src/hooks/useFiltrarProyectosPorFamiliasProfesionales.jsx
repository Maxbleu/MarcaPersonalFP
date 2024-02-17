import React, { useEffect } from "react";

export function UseFiltrarProyectosPorFamiliasProfesionales(proyectos, familiasProfesionalesSeleccionadas){
    let proyectosFiltrados = proyectos.filter((value) => {
        let hayProyectoPorFamiliaProfesionalSeleccionada = false;
        if(familiasProfesionalesSeleccionadas.length > 0){
            for(let i = 0; i<familiasProfesionalesSeleccionadas.length; i++){
                for(let j = 0; j<value.ciclos.length; j++){
                    if(!hayProyectoPorFamiliaProfesionalSeleccionada){
                        hayProyectoPorFamiliaProfesionalSeleccionada = value.ciclos[j].familia_profesional.codigo === familiasProfesionalesSeleccionadas[i].codigo;
                    }
                }
            }
        }else{
            hayProyectoPorFamiliaProfesionalSeleccionada = true;
        }
        return hayProyectoPorFamiliaProfesionalSeleccionada;
    });
    return proyectosFiltrados;
}