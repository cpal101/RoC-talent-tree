import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ClipboardModule } from 'ngx-clipboard';

import { TalentListComponent } from '@src/talent-list/talent-list.component';
import { TalentComponent } from '@src/talent-list/talent/talent.component';
import { TalentSVGComponent } from '@src/talent-list/talent/talent-svg.component';
import { FormatPipe } from '@src/shared/format.pipe';

library.add(faClipboard);

@NgModule({
    declarations: [
      TalentComponent,
      TalentListComponent,
      TalentSVGComponent,
      FormatPipe
    ],
    imports: [
      MatTabsModule,
      BrowserAnimationsModule,
      NgxSmartModalModule.forChild(),
      ClipboardModule,
      FontAwesomeModule,
      RouterModule.forChild(
        [
          { path: '', component: TalentListComponent }
        ]
      )
    ],
    exports: [
      TalentComponent,
      TalentListComponent,
      TalentSVGComponent,
      FormatPipe
    ]
  })
  export class TalentsModule { }
