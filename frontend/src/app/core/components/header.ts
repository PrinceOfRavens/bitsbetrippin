import { Component } from '@angular/core';

@Component({
    selector: 'bbt-header',
    template: `
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          BitsBeTrippin
        </mat-toolbar-row>
        <mat-toolbar-row>
          Menu Row
        </mat-toolbar-row>
      </mat-toolbar>
      <mat-toolbar color="accent">
        Notification Row
      </mat-toolbar>
    `
})
export class HeaderComponent {
    constructor() {}
}
