import React from "react";

export function getAllProyectos(){
    return fetch("https://run.mocky.io/v3/4ff9988f-ae98-4678-a536-360d28b7c0fa")
    .then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}