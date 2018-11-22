export type TalentArrayType = Map<string, TalentModel>;

export class TalentModel {
  constructor(
    public readonly name: string = '',
    public readonly title: string = '',
    public readonly description: string = '',
    public readonly imageName: string = '',
    public readonly values: Array<Array<number>> = [],
    public readonly required: Array<string> = [],
    public readonly coordinate: any = {},
    public readonly type: string = 'Buff',
    public level: number = 0,
    public totalLevel: number = 0,
    public readonly lines: Array<any> = [],
    public readonly dependencies: Array<string> = [],
    public readonly dependenciesTitles: Array<string> = [],
    public readonly size: string = '',
    public readonly isSpecial: boolean = false
  ) {}
}
