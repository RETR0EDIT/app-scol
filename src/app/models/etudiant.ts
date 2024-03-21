import { IEtudiant } from "../ietudiant";

export class Etudiant implements IEtudiant{
    constructor(
        public _nom: string,
        public _prenom: string,
        public rue: string,
        public _cp: string,
        public _ville: string,
        public courriel: string,
        public _genre: string,
        public _age: number,
        public _idCandi: number
    ) {}

        getEtudiant(): string {
            return "Nom: " + this._nom + ", Prenom: " + this._prenom + ", Rue: " + this.rue + ", Code Postal: " + this._cp + ", Ville: " + this._ville + ", Courriel: " + this.courriel + ", Genre: " + this._genre + ", Age: " + this._age + ", ID Candidat: " + this._idCandi;
        }
        setEtudiant(nom: string, prenom: string, rue: string, cp: string, ville: string, courriel: string, genre: string, age: number, idCandi: number): void {
            this._nom = nom;
            this._prenom = prenom;
            this.rue = rue;
            this._cp = cp;
            this._ville = ville;
            this.courriel = courriel;
            this._genre = genre;
            this._age = age;
            this._idCandi = idCandi;
        }

}
