import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso = 90;
  altura = 1.78;

  exibir() : void{
  alert("O IMC é :" + this.peso / (this.altura*this.altura));

  /*let imc = this.peso /(this.altura*this.altura);
  alert("O imc é " + imc)
  */
  }
}
