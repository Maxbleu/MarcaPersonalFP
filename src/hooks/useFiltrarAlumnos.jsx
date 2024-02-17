import React from "react";

/**       HOOCKS       */
import { UseFiltrarAlumnosPorFamiliasProfesionales } from "../hooks/useFiltrarAlumnosPorFamiliasProfesionales";
import { UseFiltrarAlumnosPorPerfilesCompetenciales } from "../hooks/useFiltrarAlumnosPorPerfilesCompetenciales";

function comprobarQueNoTengaDuplicados(alumnosFiltradosPorFamiliasProfesionales,alumnosFiltradosPorPerfilesCompetenciales) {

    let alumnosFiltrados;
    
    if(alumnosFiltradosPorFamiliasProfesionales.length < alumnosFiltradosPorPerfilesCompetenciales.length){
        alumnosFiltradosPorFamiliasProfesionales.map((value) => {
            if(!alumnosFiltradosPorPerfilesCompetenciales.includes(value)){
                alumnosFiltradosPorPerfilesCompetenciales.push(value);
            }
        });

        alumnosFiltrados = alumnosFiltradosPorPerfilesCompetenciales;

    }else{

        alumnosFiltradosPorPerfilesCompetenciales.map((value) => {
            if(!alumnosFiltradosPorFamiliasProfesionales.includes(value)){
                alumnosFiltradosPorFamiliasProfesionales.push(value);
            }
        });

        alumnosFiltrados = alumnosFiltradosPorFamiliasProfesionales;

    }

    return alumnosFiltrados;

}

export default function UseFiltrarAlumnos(alumnos, perfilesCompetencialesSeleccionados, familiasProfesionalesSeleccionadas){

    let alumnosFiltrados;

    if(perfilesCompetencialesSeleccionados.length > 0 || familiasProfesionalesSeleccionadas.length > 0){

        let alumnosFiltradosPorPerfilesCompetenciales = UseFiltrarAlumnosPorPerfilesCompetenciales(alumnos, perfilesCompetencialesSeleccionados);
        let alumnosFiltradosPorFamiliasProfesionales = UseFiltrarAlumnosPorFamiliasProfesionales(alumnos, familiasProfesionalesSeleccionadas);

        alumnosFiltrados = comprobarQueNoTengaDuplicados(alumnosFiltradosPorFamiliasProfesionales,alumnosFiltradosPorPerfilesCompetenciales);

    }else{

        alumnosFiltrados = alumnos;

    }

    return alumnosFiltrados;

}