import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SpecialiteComponent } from './component/specialite/specialite.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { EtudiantParisComponent } from './component/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './component/etudiant-hors-paris/etudiant-hors-paris.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpecialiteComponent,
    EtudiantComponent,
    HomeComponent,
    FooterComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
