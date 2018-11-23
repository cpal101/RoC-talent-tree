import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataStore {
    scale = new Subject<HammerInput>();
    pan = new Subject<HammerInput>();
}
