import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public proyecto:any={anio:'2025', nombreProyecto:'Formulario Reactivo'}
  public tecnologia: any ={leyenda:'WebApp desarrollada con', tec1:"Angular", tec2:'SpringBoot'}
  public autor:string='Desarrollado por Brayan Majin Gaviria'

}
