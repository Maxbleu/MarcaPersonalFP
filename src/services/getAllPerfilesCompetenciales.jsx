import React from "react";

export function getAllPerfilesCompetenciales(){
    return fetch("https://run.mocky.io/v3/89bda0a9-d7ce-4841-a092-3de8bdbd3210")
    .then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}