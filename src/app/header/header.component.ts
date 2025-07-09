import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombres:String="Juan";
  apellidos:String="Perez";
  Disciplina:String="Soy desarrollador Backend especialista en java y en experiencia de usuario";
  descripcion:String="Estudiante de Ingenieria de Sistemas apasionado por el desarrolloBackend"
}
