import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {



    transform(value: string, enMayusculas: boolean= true):string{

        return (enMayusculas)
            ? value.toUpperCase()
            : value.toLowerCase();
    //     if (enMayusculas){
    //         return value.toUpperCase();
    //     } else {
    //         return value.toLowerCase();
    //     }
        
     }
        
}