//  Este moock almacenará
//  todos los datos de traducción
//  al español
const spanish = {

    "secciones":{
        "alu":{
            name:"Alumnos",
        },
        "esc":{
            name:"Centros Educativos",
        },
        "emp":{
            name:"Empresas",
            menu:["Empresa","Proyectos","Alumnos"],
            sec:{
                pro:{
                    titulo:"Búsqueda de Proyectos",
                    tituloFiltro:"Filtra por familia profesional",
                    tituloResultados:"Resultados"
                },
                alu:{
                    titulo:"Búsqueda de Alumnos",
                    tituloFiltroFamiliaProfesional:"Filtra por familia profesional",
                    tituloFiltroPerfilComptencial:"Filtra por perfiles competenciales",
                    tituloResultados:"Resultados"
                }
            }
        }
    },

    "footer":{
        alu:"Alumnos",
        pro:"Proyectos",
        emp:"Empresas",
        parteAbajo:{
            dwb:"Diseño Web"
        }
    }

};
export default spanish;