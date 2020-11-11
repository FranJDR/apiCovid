import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countreis } from '../models/countreis';
import { Region } from '../models/region';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestCountreisService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<Countreis[]> {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map((res: Countreis[]) => res));
  }

  getByName(name: string): Promise<any> {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true').toPromise();
  }

  getByCode(code: string): Promise<any> {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code).toPromise();
  }

}
// return new Promise<void>((resolve, reject) => {
//   let sessionId: string = sessionStorage.getItem(this.jsonID);
//   if (sessionId !== null) {
//     this.participant.getObsParticipant(sessionId).subscribe(res => {
//       this._user = res;
//       resolve();
//     });
//   } else {
//     resolve();
//   }
// });