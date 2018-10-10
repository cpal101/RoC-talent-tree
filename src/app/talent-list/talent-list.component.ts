import { Component, QueryList, ViewChildren } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { TalentComponent } from '@src/talent-list/talent/talent.component';
import { TalentsService } from '@src/talent-list/talent/talents.service';
import { TalentArrayType, TalentModel } from '@src/talent-list/talent/talent.model';
import { talentListBuilder } from '@src/talent-list/talent-list.builder';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent {
  @ViewChildren(TalentComponent) contentChildren !: QueryList<TalentComponent>;

  public talents: TalentArrayType;
  get shareableLink(): string {
    return window.location.origin + 
           this.location.prepareExternalUrl(`?q=${talentListBuilder.toLevelString(this.talents)}`);
  }

  constructor(
      private talentsService: TalentsService, 
      public ngxSmartModalService: NgxSmartModalService,
      private location: Location,
      private route: ActivatedRoute
    ) {
      this.talents = this.loadTalents();
  }

  private loadTalents(): TalentArrayType {
    let talents = this.talentsService.getTalents();

    // Check if QueryList needs to generate levels
    const query = this.route.snapshot.queryParamMap.get('q');
    if (query) {
      talents = talentListBuilder.fromLevelString(query, talents);
    }

    return talents;
  }

  // Use arrow function so the context of 'this' is preserved
  getTalent = (talentIndex: string): TalentModel => {
    return this.talents.get(talentIndex);
  }

  reset() {
    this.contentChildren.forEach(child => child.reset());
  }

  get totalPoints(): number {
    let result = 0;
    if (this.contentChildren) {
      result = this.contentChildren.reduce((acc, child) => acc + child.talent.level, 0);
    }

    return result;
  }
}
