import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html'
})
export class MaterialComponent {
  title = 'primeng-material';
  public dateValue = '';

  constructor(private dialogRef: MatDialogRef<MaterialComponent>) {

  }

  submit(event) {
    event.preventDefault();
    console.log('qqq');
    this.dialogRef.close({status: true, value: this.dateValue});
  }
}
