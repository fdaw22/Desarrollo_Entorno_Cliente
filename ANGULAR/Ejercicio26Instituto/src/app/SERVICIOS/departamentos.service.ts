import { Injectable } from '@angular/core';
import{Ciclo} from '../MODELOS/ciclo.mode';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor() { 

  }

  departamentos:Ciclo [] = [{'id':"001",'nombre':"Administracion y gestion",'descripcion':"Administración y Gestión de Empresas. El objetivo fundamental de estos profesionales es desarrollar, de manera efectiva, tareas de gestión y asesoramiento destinadas a alcanzar el correcto funcionamiento de una empresa u organización", 'imagen':"../../assets/img/administracion_gestion.jpg", 'ciclos':[{'id':"TAF",'nombre':"Técnico Superior en Administración y Finanzas"},{'id':"TAD",'nombre':"Técnico Superior en Asistencia a la Dirección"},{'id':"TGA",'nombre':"Técnico en Gestión Administrativa"}]},
  {'id':"002",'nombre':"Edificacion y obra civil",'descripcion':"Abarca las activ'id'ades de construcción de edificios tanto res'id'enciales como no res'id'enciales y la construcción de infraestructuras de transporte, urbanismo…etc.", 'imagen':"../../assets/img/edificacion_obra_civil.jpg", 'ciclos':[{'id':"POC",'nombre':"Técnico Superior en Proyectos de Obra Civil"},{'id':"TPE",'nombre':"Técnico Superior en Proyectos de Edificación"},{'id':"OCO",'nombre':"Técnico Superior en Organización y Control de Obras de Construcción"},{'id':"IDR",'nombre':"Técnico en Obras de Interior, Decoración y Rehabilitación"},{'id':"TEC", 'nombre':"Técnico en Construcción"}]},
  {'id':"003",'nombre':"Electricidad y electronica",'descripcion':"Electricidad = Fenómeno físico y natural. De acuerdo con el mismo diccionario, La Electrónica es el estudio y aplicación del comportamiento de los electrones en diversos medios, como el vacío, los gases y los semiconductores, somet'id'os a la acción de campos eléctricos y magnéticos.", 'imagen':"../../assets/img/electric'id'ad_electronica.jpg", 'ciclos': [{'id':"SEA",'nombre':"Ciclo Formativo de Grado Superior de Sistemas Electrotécnicos y Automatizados"},{'id':"IEA",'nombre':"Ciclo Formativo de Grado Medio de Instalaciones Eléctricas y Automáticas"},{'id':"BEE", 'nombre':"Formación Profesional Nivel Básico de Electricidad y Electrónica"}]},
  {'id':"004",'nombre':"Formacion y orientacion laboral",'descripcion':"El módulo sobre FORMACIÓN Y ORIENTACIÓN LABORAL (FOL) es impart'id'o en los 'Ciclos' Formativos con el fin de que el alumnado pueda familiarizarse con las condiciones de trabajo que va a experimentar a lo largo de su v'id'a laboral, así como con el marco legal en el que estará encuadrado.", 'imagen':"../../assets/img/fol.jpg",'ciclos':[{'id':"TIS",'nombre':"Técnico Superior en Integración Social"},{'id':"TSD",'nombre':"Técnico Superior en Dietética"}]},
  {'id':"005",'nombre':"Informatica",'descripcion':"La Informática es la rama de la Ingeniería que estudia el hardware, las redes de datos y el software necesarios para tratar información de forma automática.", 'imagen':"../../assets/img/informatica.jpg",'ciclos':[{'id':"'ID'O",'nombre':"Informática de Oficina"},{'id':"SMR",'nombre':"Sistemas microinformáticos y redes"},{'id':"ASIR",'nombre':"Administración de sistemas informáticos en red"},{'id':"DAM",'nombre':"Desarrollo de aplicaciones multiplataforma"},{'id':"DAW",'nombre':"Desarrollo de aplicaciones web"}]},
  ];

  getDepartamentos():any []{
    return this.departamentos;
  }
}
