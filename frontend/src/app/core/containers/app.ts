import { Component } from '@angular/core';

@Component({
    selector: 'bbt-root',
    template: `
        <bbt-fullscreen>
            <bbt-header></bbt-header>

            <router-outlet></router-outlet>
        </bbt-fullscreen>
    `
})
export class AppComponent {}
