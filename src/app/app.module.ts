import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@src/app.component';
import { HttpClientModule } from '@angular/common/http';
import { TalentsModule } from '@src/talent-list/talents.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TalentsModule,
    RouterModule.forRoot(
      [
        { path: '', loadChildren: '@src/talent-list/talents.module#TalentsModule' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
