import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../../ietudiant';
import { EtudiantService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  searchValue: string = '';
  etudiants: IEtudiant[] = [];
  filteredEtudiants: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
    this.filteredEtudiants = [];
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    if (this.searchValue && this.searchValue.trim() !== '') {
      this.filteredEtudiants = this.etudiants.filter(etudiant =>
        etudiant._nom.includes(this.searchValue) ||
        etudiant._prenom.includes(this.searchValue) ||
        etudiant.rue.includes(this.searchValue) ||
        etudiant._cp.includes(this.searchValue) ||
        etudiant._ville.includes(this.searchValue) ||
        etudiant.courriel.includes(this.searchValue) ||
        etudiant._genre.includes(this.searchValue) ||
        etudiant._age.toString().includes(this.searchValue) ||
        etudiant._idCandi.toString().includes(this.searchValue)
      );
    } else {
      this.filteredEtudiants = this.etudiants;
    }
  }
}