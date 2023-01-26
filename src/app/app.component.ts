import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numPantalla1 = 0;
  numPantalla2 = 0;
  
  operacion:any;
  resultado:any;

  reseteado(){
    this.resultado = '';
    this.numPantalla1 = 0;
    this.numPantalla2 = 0;
  }
  calcular(){
    console.log(this.numPantalla1);
    console.log(this.operacion);
    this.resultado = this.numPantalla1 + this.operacion + this.numPantalla2;
  }
}
