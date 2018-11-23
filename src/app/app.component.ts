import { Component } from '@angular/core';
import { DataStore } from '@src/stores/data.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private dataStore: DataStore) { }

  onPinch(event: HammerInput) {
    this.dataStore.scale.next(event);
  }

  onPan(event: HammerInput) {
    this.dataStore.pan.next(event);
  }
}
