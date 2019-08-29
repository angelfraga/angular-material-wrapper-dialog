import { Component, Input, Output, EventEmitter , ViewChild} from '@angular/core';
import { DialogComponent } from './../../dialog/dialog/dialog.component';

@Component({
  selector: 'custom-dialog',
  templateUrl: 'custom-dialog.component.html'
})
export class CustomDialogComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Input() name;
  @Output() nameChange = new EventEmitter<string>();
  @Input() animal;
  @Output() animalChange = new EventEmitter<string>();

  @ViewChild(DialogComponent, {static: false}) private dialog;

  saveAndClose() {
    this.animalChange.emit(this.animal);
    this.dialog.close();
  }
}