import React from "react";

export function getAllAlumnos(){
    return fetch("https://run.mocky.io/v3/3d8e46e0-bac4-4aed-8fa2-69db9e53373d")
    .then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}