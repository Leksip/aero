import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface Alert {
  text: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert$ = new Subject<Alert>();

  constructor() {
  }

  success(text: string) {
    this.alert$.next({
      type: 'success',
      text: text
    });
  }

  warning(text: string) {
    this.alert$.next({
      type: 'warning',
      text: text,
    });
  }
}
