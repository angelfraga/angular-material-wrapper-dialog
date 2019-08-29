import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'dialog-header',
  template: `
  <ng-template #tpl>
    <ng-content></ng-content>
  </ng-template>`
})
export class DialogHeaderComponent {
   @ViewChild('tpl', {static: false}) template;
}