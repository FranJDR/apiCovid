import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {

  constructor(
    private http: HttpClient
  ) { }

  getCauntry(country: string): Observable<any> {
    return this.http.get('https://api.covid19api.com/dayone/country/' + country)
      .pipe(map((res: any) => res.filter(country =>
        (
          country.Date.includes('28') ||
          country.Date.includes('29') ||
          country.Date.includes('30') ||
          country.Date.includes('31')
        )
        && country.Province === '')))
      .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler = (error: HttpErrorResponse) => {
    return throwError(error.message || 'server Error');
  }
}
