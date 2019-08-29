import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'dialog-footer',
  template: `
  <ng-template #tpl>
    <ng-content></ng-content>
  </ng-template>`
})
export class DialogFooterComponent {
  @ViewChild('tpl', {static: false}) template;
}