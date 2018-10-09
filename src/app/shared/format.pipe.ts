// Used like `String.format("The value is {0}", 20);` as pipe

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
    transform(val: String, ...args) {
        return val.replace(/{(\d+)}/g, (match, number) => { 
            return typeof args[number] !== 'undefined'
                ? args[number] 
                : match
                ;
        });
    }
}
