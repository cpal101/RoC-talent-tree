import { TalentArrayType } from '@src/talent-list/talent/talent.model';

class TalentListBuilder {
    static readonly DELIMITER_ENTITY = ',';
    static readonly DELIMITER_PROPERTY = ':';

    fromLevelString(levelsString: string, talents: TalentArrayType): TalentArrayType {
        const copyTalents = new Map(talents);
        const levels = levelsString.split(TalentListBuilder.DELIMITER_ENTITY);
        levels.forEach(level => {
            if (!level) { return; }

            const [id, lvl] = level.split(TalentListBuilder.DELIMITER_PROPERTY);
            copyTalents.get(id).level = Number(lvl);
        });

        return copyTalents;
    }

    toLevelString(talents: TalentArrayType): string {
        const result = Array.from(talents.values())
            .reduce((acc, cur, i) => acc + 
                `${cur.name.trim()}` +
                `${TalentListBuilder.DELIMITER_PROPERTY}` +
                `${cur.level}` +
                `${TalentListBuilder.DELIMITER_ENTITY}`
            , '');

        return result;
    }
}

export let talentListBuilder = new TalentListBuilder();
