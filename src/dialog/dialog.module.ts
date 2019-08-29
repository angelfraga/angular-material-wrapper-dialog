import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogBaseComponent } from './dialog-base/dialog-base.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';

const components = [
  DialogBaseComponent,
  DialogComponent,
  DialogHeaderComponent,
  DialogBodyComponent,
  DialogFooterComponent
]

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    ...components
  ],
  entryComponents: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class DialogModule {

}