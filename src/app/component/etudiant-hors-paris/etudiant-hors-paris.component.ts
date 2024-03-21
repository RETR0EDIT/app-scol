import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../../ietudiant';
import { EtudiantService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {

  etudiants!: IEtudiant[];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
    this.etudiants = this.etudiants.filter(etudiant => etudiant._ville !== 'Paris');
  }
}