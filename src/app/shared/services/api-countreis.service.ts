import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class ApiCountreisService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Country[]> {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map((res: Country[]) => res));
  }

  getByName(name: string): Promise<any> {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true').toPromise();
  }

  getByCode(code: string): Promise<any> {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code).toPromise();
  }

  getByRegion(region: Region): Promise<any> {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + region).toPromise();
  }

}
