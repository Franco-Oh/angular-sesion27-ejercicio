import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numPantalla1!:number;
  numPantalla2!:number;
  
  operacion:any;

  operacion2:any;

  resultado!:number;

  msg = false;

  reseteado(){
    this.resultado = 0;
    this.numPantalla1 = 0;
    this.numPantalla2 = 0;
  }

  // Esta fue la opcion 1 para calcular
  calcular(){
    if (this.operacion == 'sumar') {
      this.resultado = this.numPantalla1 + this.numPantalla2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'restar') {
      this.resultado = this.numPantalla1 - this.numPantalla2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'multiplicar') {
      this.resultado = this.numPantalla1 * this.numPantalla2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'dividir') {
      this.resultado = this.numPantalla1 / this.numPantalla2;
      console.log(this.resultado);
      this.msg = false;
    } else {
      this.resultado = 0;
      this.msg = true;
    }
  }

  //Opcion con menos codigo
  calcular2(){
    this.resultado = eval(this.numPantalla1 + this.operacion2 + this.numPantalla2);
    if (!this.resultado) {
      this.msg = true;
    } else {
      this.msg = false;
    }
  }
}
