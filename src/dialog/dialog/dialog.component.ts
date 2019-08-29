import { Component, ContentChild , EventEmitter, Input, Output, OnChanges, AfterViewInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { DialogHeaderComponent } from './../dialog-header/dialog-header.component';
import { DialogBodyComponent } from './../dialog-body/dialog-body.component';
import { DialogFooterComponent } from './../dialog-footer/dialog-footer.component';
import { DialogBaseComponent } from './../dialog-base/dialog-base.component';

@Component({
  selector: 'dialog',
  template: ''
})
export class DialogComponent implements OnChanges, AfterViewInit {

  @Input() open: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  @ContentChild(DialogHeaderComponent, { static: false }) header: DialogHeaderComponent;
  @ContentChild(DialogBodyComponent, { static: false }) body: DialogBodyComponent;
  @ContentChild(DialogFooterComponent, { static: false }) footer: DialogFooterComponent;

  private open$ = new BehaviorSubject<boolean>(false);
  private dialogRef: MatDialogRef<DialogBaseComponent, any>;

  constructor(private dialog: MatDialog) {}

  ngOnChanges() {
    this.open$.next(this.open);
  }

  ngAfterViewInit()  {
    const open$ = this.open$.pipe(
      distinctUntilChanged()
    );
    
    open$.pipe(
      filter(value => !!value)
    ).subscribe(() => {
      this.dialogRef = this.dialog.open(DialogBaseComponent, {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: {
          header: this.header.template,
          body: this.body.template,
          footer: this.footer.template
        }
      });

      this.dialogRef.afterClosed().subscribe( () => {
        this.openChange.emit(false);
      });
    });

    open$.pipe(
      filter(value => !value)
    ).subscribe(() => {
      if(this.dialogRef) {
        this.dialogRef.close();
        this.openChange.emit(false);
      }
    });
  }

  close() {
    this.open$.next(false);
  }
}