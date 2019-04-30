import {NativeDateAdapter} from '@angular/material';
import {Injectable} from '@angular/core';
import { Platform } from '@angular/cdk/platform';
@Injectable()
export class DateHuAdapter extends NativeDateAdapter {
  constructor() {
    super('hu-HU', new Platform());
  }
  getFirstDayOfWeek(): number {
    return 1;
  }

}
