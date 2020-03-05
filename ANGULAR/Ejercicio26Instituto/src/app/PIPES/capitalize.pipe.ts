import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, tipo: boolean): string {
    let result=value;
    let numero=tipo;
    switch(numero){
      case true:{
        result=result.replace(/\b\w/g, l => l.toUpperCase());
        break;
      }
      case false:{
        let cadena=result.substr(1,result.length);
        result=result.charAt(0).toUpperCase()+cadena;
        break;
      }
    }
    return result;
  }

}
