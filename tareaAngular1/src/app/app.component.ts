import { Component } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  mostrar: boolean = false;

  toggleMostrar(){
    this.mostrar = !this.mostrar;
  }

  productos: Producto[] = [
    {nombre: "Zapatillas", costo: "Caras"},
    {nombre: "Remera", costo: "Baratongui"},
    {nombre: "Saco", costo: "Un riñon"},
  ];

}
