import { NgModule } from '@angular/core';
import { FormatPipe } from '@src/shared/format.pipe';

@NgModule({
    declarations: [
        FormatPipe
    ],
    imports: [

    ],
    exports: [
        FormatPipe
    ],
    providers: [],
    bootstrap: []
  })
  export class SharedModule { }
