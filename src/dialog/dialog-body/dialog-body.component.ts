import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'dialog-body',
  template: `
  <ng-template #tpl>
    <ng-content></ng-content>
  </ng-template>`
})
export class DialogBodyComponent {
   @ViewChild('tpl', {static: false}) template;
}