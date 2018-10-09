import { Injectable } from '@angular/core';
import { TalentModel, TalentArrayType } from '@src/talent-list/talent/talent.model';
import talentJSON from './assets/talents.json';

@Injectable({
    providedIn: 'root'
})
export class TalentsService {
    constructor() { }

    getTalents(): TalentArrayType {
        const result: TalentArrayType = new Map();
        talentJSON.forEach(entity => {
            const talent: TalentModel = Object.assign(new TalentModel(), entity);
            talent.totalLevel = talent.values[0].length;
            result.set(talent.name, talent);
        });
        return result;
    }
}
