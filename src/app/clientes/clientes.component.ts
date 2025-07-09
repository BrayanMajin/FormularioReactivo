import { Component } from '@angular/core';
import {Cliente} from './cliente'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes:Cliente[]=[]

  ngOnInit():void{
    this.clientes=[
      {id:1, nombre:'Juan', apellido:'Perez', email:'Juan@unicauca.edu.co', createAt:'2021-05-14'},
      {id:2, nombre:'Andres', apellido:'Sanchez', email:'andres@unicauca.edu.co', createAt:'2021-05-14'},
      {id:3, nombre:'Pedro', apellido:'Cortes', email:'pedro@unicauca.edu.co', createAt:'2021-05-14'}
    ]
  }

}
