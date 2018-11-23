import { Component, QueryList, ViewChildren, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { TalentComponent } from '@src/talent-list/talent/talent.component';
import { TalentsService } from '@src/talent-list/talent/talents.service';
import { TalentArrayType, TalentModel } from '@src/talent-list/talent/talent.model';
import { talentListBuilder } from '@src/talent-list/talent-list.builder';
import { Subscription } from 'rxjs';

interface Window {
  visualViewport: any;
}

declare var window: Window;

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss']
})
export class TalentListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(TalentComponent) contentChildren !: QueryList<TalentComponent>;
  scale = 1;
  finalScale = 1;
  pan = {x: 0, y: 0};
  origin = {x: 0, y: 0};
  subscription: Subscription;
  debug = '';

  public talents: TalentArrayType;
  get shareableLink(): string {
    return '';
    // return window.location.origin + 
    //        this.location.prepareExternalUrl(`?q=${talentListBuilder.toLevelString(this.talents)}`);
  }
  constructor(
      private talentsService: TalentsService, 
      public ngxSmartModalService: NgxSmartModalService,
      private location: Location,
      private route: ActivatedRoute,
      // @Inject('Window') private window: Window,
      private elRef: ElementRef,
    ) {
      this.talents = this.loadTalents();
  }

  onStart(event: HammerInput) {
    this.debug = event.type;
  }

  onPinch(event: HammerInput) {
    this.scale = this.finalScale * event.scale; 
    this.debug = event.type;
  }

  onFinished(event: HammerInput) {
    this.finalScale = this.scale;
    this.debug = event.type;
  }

  ngAfterViewInit(): void {
    // const width = 868;
    // console.log(window.visualViewport);
    // const windowWidth = window.visualViewport.width;
    // this.debug = `${windowWidth} / ${width} = ${windowWidth / width}`;
    // this.scale = windowWidth / width;
  }

  ngOnInit(): void {
    const width = 868;
    console.log(window.visualViewport);
    const windowWidth = window.visualViewport.width;
    this.debug = `${windowWidth} / ${width} = ${windowWidth / width}`;
    this.scale = windowWidth / width;
    // this.subscription = this.dataStore.scale.subscribe(input => { 
    //   this.debug = input.type;
    //   this.scale = this.scale * input.scale; 
    //   // this.origin = {x: input.center.x, y: input.center.y};
    // });
    // this.subscription = this.dataStore.pan.subscribe(input => { 
    //   this.pan.x += input.deltaX; 
    //   this.pan.y += input.deltaY; 
    //   this.origin = {x: input.center.x, y: input.center.y};
    // });
  }

  ngOnDestroy(): void {
     this.subscription.unsubscribe();
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

  // TODO: Improve linter to force use of minimal 'void' when no return is used (?)

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
