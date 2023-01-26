import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  num1 = 0;
  num2 = 0;
  
  operacion:any;

  operacion2:any;

  resultado!:number;

  msg = false;

  reseteado(){
    this.resultado = 0;
    this.num1 = 0;
    this.num2 = 0;
  }

  // Esta fue la opcion 1 para calcular
  calcular(){
    if (this.operacion == 'sumar') {
      this.resultado = this.num1 + this.num2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'restar') {
      this.resultado = this.num1 - this.num2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'multiplicar') {
      this.resultado = this.num1 * this.num2;
      console.log(this.resultado);
      this.msg = false;
    } else if (this.operacion == 'dividir') {
      this.resultado = this.num1 / this.num2;
      console.log(this.resultado);
      this.msg = false;
    } else {
      this.resultado = 0;
      this.msg = true;
    }
  }

  //Opcion con menos codigo
  calcular2(num1:number, num2:number, oper:string){
    if (!oper) {
      this.msg = true;
    } else {
      this.msg = false;
    }
    return this.resultado = eval(num1 + oper + num2);
  }
}
