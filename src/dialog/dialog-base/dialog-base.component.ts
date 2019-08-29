import { Component, ContentChild , Inject, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogHeaderComponent } from './../dialog-header/dialog-header.component';
import { DialogBodyComponent } from './../dialog-body/dialog-body.component';
import { DialogFooterComponent } from './../dialog-footer/dialog-footer.component';

@Component({
  selector: 'dialog-base',
  templateUrl: 'dialog-base.component.html'
})
export class DialogBaseComponent {

 @ViewChild('ng-tempalte', {static: true}) template; 

  constructor(
    public dialogRef: MatDialogRef<DialogBaseComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      header?: EmbeddedViewRef,
      body?: EmbeddedViewRef,
      footer?: EmbeddedViewRef,
    }
  ) { }
}