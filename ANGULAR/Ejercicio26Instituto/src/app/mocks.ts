import { Ciclo } from './MODELOS/ciclo.mode';

export const CICLOS: Ciclo[] = [{id:"0",nombre:"Administracion y gestion",descripcion:"Administración y Gestión de Empresas. El objetivo fundamental de estos profesionales es desarrollar, de manera efectiva, tareas de gestión y asesoramiento destinadas a alcanzar el correcto funcionamiento de una empresa u organización", imagen:"../../assets/img/administracion_gestion.jpg", 
                                    ciclos:[{id:"TAF",nombre:"Técnico Superior en Administración y Finanzas"},
                                            {id:"TAD",nombre:"Técnico Superior en Asistencia a la Dirección"},
                                            {id:"TGA",nombre:"Técnico en Gestión Administrativa"}], 
                                                prof: [{nombre:"Juan Ramon Garcia", imagen:"../../assets/img/juan_elloco.jpg",nacimiento:new Date(1999,3,12),salario:1350.45},
                                                       {nombre:"Hugo Vinculante Rodriguez", imagen:"../../assets/img/hugo_Folleti.jpg",nacimiento:new Date(1980,1,22),salario:2000.4}], 
                                                aulas:[{nombre:"aula de administracion numero 9",imagen:"../../assets/img/aula_administracion.jpg"}]},


                                {id:"1",nombre:"Edificacion y obra civil",descripcion:"Abarca las actividades de construcción de edificios tanto residenciales como no residenciales y la construcción de infraestructuras de transporte, urbanismo…etc.", imagen:"../../assets/img/edificacion_obra_civil.jpg", 
                                    ciclos:[{id:"POC",nombre:"Técnico Superior en Proyectos de Obra Civil"},
                                            {id:"TPE",nombre:"Técnico Superior en Proyectos de Edificación"},
                                            {id:"OCO",nombre:"Técnico Superior en Organización y Control de Obras de Construcción"},
                                            {id:"IDR",nombre:"Técnico en Obras de Interior, Decoración y Rehabilitación"},
                                            {id:"TEC", nombre:"Técnico en Construcción"}],
                                                prof: [{nombre:"Laura Estepona Mesa", imagen:"../../assets/img/laura_retarder.jpg",nacimiento:new Date(1973,10,25),salario:1764.64},
                                                       {nombre:"Ozil Martínez del Alamo", imagen:"../assets/img/ozil_elguapo.jpg",nacimiento:new Date(1959,2,3),salario:1500}], 
                                                aulas:[{nombre:"aula de electricidad y electronica numero 12",imagen:"../../assets/img/aula_electricidad_electronica.jpg"}]},



                                {id:"2",nombre:"Electricidad y electronica",descripcion:"Electricidad = Fenómeno físico y natural. De acuerdo con el mismo diccionario, La Electrónica es el estudio y aplicación del comportamiento de los electrones en diversos medios, como el vacío, los gases y los semiconductores, sometidos a la acción de campos eléctricos y magnéticos.", imagen:"../../assets/img/electricidad_electronica.jpg", 
                                    ciclos: [{id:"SEA",nombre:"Ciclo Formativo de Grado Superior de Sistemas Electrotécnicos y Automatizados"},
                                             {id:"IEA",nombre:"Ciclo Formativo de Grado Medio de Instalaciones Eléctricas y Automáticas"},
                                             {id:"BEE", nombre:"Formación Profesional Nivel Básico de Electricidad y Electrónica"}],
                                                prof: [{nombre:"Ramón García López", imagen:"../../assets/img/ramon_garcia.jpg",nacimiento:new Date(1968,12,23),salario:2500.8},
                                                       {nombre:"Diego Verduoso Peregrino", imagen:"../../assets/img/diego_eldeportista.jpg",nacimiento:new Date(1991,8,2),salario:3120.86}], 
                                                aulas:[{nombre:"aula de formacion y orientacion laboral numero 3",imagen:"../../assets/img/aula_formacion_orientacion.jpg"}]},

                                {id:"3",nombre:"Formacion y orientacion laboral",descripcion:"El módulo sobre FORMACIÓN Y ORIENTACIÓN LABORAL (FOL) es impartido en los Ciclos Formativos con el fin de que el alumnado pueda familiarizarse con las condiciones de trabajo que va a experimentar a lo largo de su vida laboral, así como con el marco legal en el que estará encuadrado.", imagen:"../../assets/img/fol.jpg",
                                    ciclos:[{id:"TIS",nombre:"Técnico Superior en Integración Social"},
                                            {id:"TSD",nombre:"Técnico Superior en Dietética"}],
                                                prof: [{nombre:"Auron Estepona Gütierrez Peretier", imagen:"../../assets/img/auro_mendez.jpg",nacimiento:new Date(1982,8,10),salario:1200},
                                                    {nombre:"Abdul Raba Decord", imagen:"../../assets/img/abdul_raba.jpg",nacimiento:new Date(1974,10,3),salario:1350.2}], 
                                                aulas:[{nombre:"aula de edificacion de obra civil numero 1",imagen:"../../assets/img/aula_edificaicon_obra_civil.jpg"}]},

                                {id:"4",nombre:"Informatica",descripcion:"La Informática es la rama de la Ingeniería que estudia el hardware, las redes de datos y el software necesarios para tratar información de forma automática.", imagen:"../../assets/img/informatica.jpg",
                                ciclos:[{id:"IDO",nombre:"Informática de Oficina"},
                                        {id:"SMR",nombre:"Sistemas microinformáticos y redes"},
                                        {id:"ASIR",nombre:"Administración de sistemas informáticos en red"},
                                        {id:"DAM",nombre:"Desarrollo de aplicaciones multiplataforma"},
                                        {id:"DAW",nombre:"Desarrollo de aplicaciones web"}],
                                                prof: [{nombre:"Raul Cimas Vázquez", imagen:"../../assets/img/raul_cimas.jpg",nacimiento:new Date(2000,5,15),salario:1390.233},
                                                       {nombre:"Victor Hermoso Lopetegui", imagen:"../../assets/img/victor_elhermoso.jpg",nacimiento:new Date(1994,7,22),salario:1840.1}], 
                                                aulas:[{'nombre':"aula de informatica numero 5",'imagen':"../../assets/img/aula_informatica.jpg"}]},
                                ];