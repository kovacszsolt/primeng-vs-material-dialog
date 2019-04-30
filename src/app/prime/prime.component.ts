import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html'
})
export class PrimeComponent {
  title = 'primeng-material';
  @Output() close = new EventEmitter<boolean>();

  submit(event) {
    event.preventDefault();
    this.close.emit(true);
  }
}
