import { HammerGestureConfig } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
        const availableOptions = [
            'touchAction'
        ];
        const options = {};

        availableOptions.forEach(prop => {
            const value = element.dataset[prop.toLowerCase()];
            if (value) {
                Object.assign(options, {[prop]: value});
            }
        });

        const hammer = new Hammer(element, options);
        
        // keep default angular config
        hammer.get('pan').set({enable: true, direction: Hammer.DIRECTION_ALL });
        hammer.get('pinch').set({enable: true, direction: Hammer.DIRECTION_ALL });
        // hammer.get('rotate').set({enable: true});

        // retain support for angular overrides object
        // tslint:disable-next-line:forin
        for (const eventName in this.overrides) {
            hammer.get(eventName).set(this.overrides[eventName]);
        }
  
      return hammer;
    }
}
