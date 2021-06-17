import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'joaquín'
  nombreUpper: string = 'JOAQUÍN'
  nombreCompleto: string = 'jOaQuín GonZalEZ'

  fecha: Date = new Date();


}
