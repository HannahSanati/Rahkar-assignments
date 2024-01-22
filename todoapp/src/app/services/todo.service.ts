import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private myBehaviorSubject = new BehaviorSubject<string>('');
  constructor() {}

  setValue(value: string) {
    this.myBehaviorSubject.next(value);
  }
  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
