import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  fileName = 'commonService';
  gotoVolunteer = new Subject<boolean>();
  hideVolunteer = new BehaviorSubject<boolean>(false);
}
