import {Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(val: string) {
        return this.sanitizer.bypassSecurityTrustStyle(val);
    }
}
