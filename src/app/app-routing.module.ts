import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { SpecialiteComponent } from './component/specialite/specialite.component';
import { EtudiantParisComponent } from './component/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './component/etudiant-hors-paris/etudiant-hors-paris.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'etudiant-paris', component: EtudiantParisComponent },
  { path: 'etudiant-hors-paris', component: EtudiantHorsParisComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }