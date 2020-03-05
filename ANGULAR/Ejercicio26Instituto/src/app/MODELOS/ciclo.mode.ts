import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Ciclos } from './ciclos.mode';
import { Prof } from './prof.mode';
import { Aulas } from './aulas.mode';

export class Ciclo{
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    ciclos:Ciclos[];
    prof:Prof[];
    aulas:Aulas[];
}
