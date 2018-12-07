import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@src/app.component';
import { HttpClientModule } from '@angular/common/http';
import { TalentsModule } from '@src/talent-list/talents.module';
import { RouterModule } from '@angular/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBug, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { MainSideComponent } from './main-side/main-side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

library.add(faBug, faCodeBranch);

@NgModule({
  declarations: [
    AppComponent,
    MainSideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TalentsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      [
        { path: '', loadChildren: '@src/talent-list/talents.module#TalentsModule' }
      ]
    ),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
