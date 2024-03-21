import { Component } from '@angular/core';
import { FormEtudiantComponent } from '../../forms/form-etudiant/form-etudiant.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  date: Date;

  constructor() {
    this.date = new Date();
  }
}