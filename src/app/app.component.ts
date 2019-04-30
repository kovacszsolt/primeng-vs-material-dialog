import { Component, ViewChild } from '@angular/core';
import { MaterialComponent } from './material/material.component';
import { MatDialog } from '@angular/material';
import { AutocompComponent } from './material/autocomp/autocomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primeFormVisible = false;
  primeDialogAutoCompleteVisible = false;
  @ViewChild('op') op;

  dateValue = '';
  searchValue = '';

  constructor(private dialog: MatDialog) {
  }


  primeFormClose(event) {
    this.primeFormVisible = false;
  }

  overlayShow() {
    this.op.toggle(true);
  }

  materialAutocompShow(event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AutocompComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.searchValue = result.value;
      } else {
        this.searchValue = 'cancel';
      }
    });
  }

  materialShow(event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(MaterialComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dateValue = result.value;
      } else {
        this.dateValue = 'cancel';
      }
    });
  }

  primePickerShow(event) {
    this.primeDialogAutoCompleteVisible = true;
  }
}
