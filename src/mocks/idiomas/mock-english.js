//  Este moock almacenará
//  todos los datos de traducción
//  al inglés
const english = {

    "secciones":{
        "alu":{
            name:"Students",
        },
        "esc":{
            name:"Schools",
        },
        "emp":{
            name:"Companies",
            menu:["Company","Proyects","Students"],
            sec:{
                pro:{
                    titulo:"Search proyects",
                    tituloFiltro:"Search by profesional family",
                    tituloResultados:"Results"
                },
                alu:{
                    titulo:"Search students",
                    tituloFiltroFamiliaProfesional:"Search by profesional family",
                    tituloFiltroPerfilComptencial:"Search by competency profile",
                    tituloResultados:"Results"
                }
            }
        }
    },



    "footer":{
        alu:"Students",
        pro:"Proyects",
        emp:"Companies",
        parteAbajo:{
            dwb:"Web Design"
        }
    }

};
export default english;