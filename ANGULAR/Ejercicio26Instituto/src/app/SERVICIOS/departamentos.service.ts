import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor() { 

  }

  departamentos:any [] = [{id:"001",nombre:"Administracion y gestion",descripcion:"Administración y Gestión de Empresas. El objetivo fundamental de estos profesionales es desarrollar, de manera efectiva, tareas de gestión y asesoramiento destinadas a alcanzar el correcto funcionamiento de una empresa u organización", imagen:"../../assets/img/administracion_gestion.jpg"},
  {id:"002",nombre:"Edificacion y obra civil",descripcion:"Abarca las actividades de construcción de edificios tanto residenciales como no residenciales y la construcción de infraestructuras de transporte, urbanismo…etc.", imagen:"../../assets/img/edificacion_obra_civil.jpg"},
  {id:"003",nombre:"Electricidad y electronica",descripcion:"Electricidad = Fenómeno físico y natural. De acuerdo con el mismo diccionario, La Electrónica es el estudio y aplicación del comportamiento de los electrones en diversos medios, como el vacío, los gases y los semiconductores, sometidos a la acción de campos eléctricos y magnéticos.", imagen:"../../assets/img/electricidad_electronica.jpg"},
  {id:"004",nombre:"Formacion y orientacion laboral",descripcion:"El módulo sobre FORMACIÓN Y ORIENTACIÓN LABORAL (FOL) es impartido en los Ciclos Formativos con el fin de que el alumnado pueda familiarizarse con las condiciones de trabajo que va a experimentar a lo largo de su vida laboral, así como con el marco legal en el que estará encuadrado.", imagen:"../../assets/img/fol.jpg"},
  {id:"005",nombre:"Informatica",descripcion:"La Informática es la rama de la Ingeniería que estudia el hardware, las redes de datos y el software necesarios para tratar información de forma automática.", imagen:"../../assets/img/informatica.jpg"},
  ];

  getDepartamentos():any []{
    return this.departamentos;
  }
}
