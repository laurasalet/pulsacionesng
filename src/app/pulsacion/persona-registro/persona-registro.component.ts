import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
persona!:Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona=new Persona;
  }

  add(){
    if(this.persona.identificacion==null){
      alert('Llene los campos vacios')    
      }else if (this.persona.sexo === "Masculino") {
         this.persona.pulsacion = 220 - this.persona.edad;
      } else {
        this.persona.pulsacion = 210 - this.persona.edad;    
      }
      this.persona.pulsacion /= 10;
      alert('Su pulsacion es de'+ this.persona.pulsacion),
      this.personaService.post(this.persona);
  }
}
