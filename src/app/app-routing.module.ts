import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: 'personaConsulta',
  component: PersonaConsultaComponent 
},
{
path: 'personaRegistro',
component: PersonaRegistroComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
