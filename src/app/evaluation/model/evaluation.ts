import { Formation } from './../../formation/model/formation';
import { Passage } from './passage';
import { Question } from './question';
export class Evaluation {
    id!: number;
    questions: Question[] = [];
    date!: Date;
    passages: Passage[] = [];
}
