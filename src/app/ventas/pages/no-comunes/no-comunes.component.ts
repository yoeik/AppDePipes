import { Component} from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  //i18nSelect
 nombre : string = 'Joaquín'; 
 genero: string= 'masculino';

 invitacionMapa = {
   'masculino':'invitarlo',
   'femenino': 'invitarla'

 }

 //i18nPlural
 clientes: string[] = ['Maria', 'Juan', 'Pedro','El rey']
 clientesMapa = {
   '=0': 'no tenemos ningun cliente',
   '=1': 'tenemos un cliente',
   'other': 'tenemos # clientes esperando'

   
 }

 cambiarCliente(){
  this.nombre = 'Susana';
  this.genero = 'femenino';
return 
  
 }

borrarCliente(){
this.clientes.pop()
return this.clientes
}

// KeyVaue Pipe

persona= {
  Nombre: 'Joaquin',
  Edad: 23,
  Direccion: 'Córdoba, Argentina'
}
//Json Pipe
heroes= [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  },
]

  //Async pipe
  miObservable = interval(1000); //0,2,3,4,5

  valorPromesa = new Promise((resolve,reject)=> {

    setTimeout(()=>{
      resolve('Tenemos data promesa');
    }, 3500);
  } )
}
