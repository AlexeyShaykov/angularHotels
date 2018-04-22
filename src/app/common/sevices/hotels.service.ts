import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { hotels } from '../../data';

@Injectable()
export class HotelsService {
  constructor() {}

  public get hotels(): Observable<Hotel[]> {
    return Observable.of(hotels);
  }
}
