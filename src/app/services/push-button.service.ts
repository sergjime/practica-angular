import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class PushButtonService {

  private pulsation = new BehaviorSubject<number>(0);
  public push$ = this.pulsation.asObservable();

  constructor() {}

  push(num: number): void {
    this.pulsation.next(num);
  }
}
