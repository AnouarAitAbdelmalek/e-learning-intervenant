import { Etudiant } from "src/app/etudiant/model/etudiant";

export class Passage {
    id!: number;
    pourcentage!: number;
    etudiant: Etudiant = new Etudiant;
}
