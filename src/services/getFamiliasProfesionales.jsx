import React from "react";

export function getFamiliasProfesionales (){
    return fetch("https://run.mocky.io/v3/46574f3f-f0cb-490d-b90c-8f079d29dde9")
    .then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}