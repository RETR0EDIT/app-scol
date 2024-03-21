import { Component, OnInit } from '@angular/core';
import { ISpecialite } from '../../ispecialite';
import { SpecService } from '../../services/spec-service.service';
@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrl: './form-specialite.component.css'
})
export class FormSpecialiteComponent {
  searchValue: string = '';
  specialite: ISpecialite[] = [];
  filteredSpecialite: ISpecialite[] = [];

  constructor(private Specialite: SpecService) { }

  ngOnInit() {
    this.specialite = this.Specialite.getSpecialites();
    this.filteredSpecialite = [];
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    if (this.searchValue && this.searchValue.trim() !== '') {
      this.filteredSpecialite = this.specialite.filter(specialite =>
        specialite._libelle.includes(this.searchValue)
      );
    } else {
      this.filteredSpecialite = this.specialite;
    }
  }
}
