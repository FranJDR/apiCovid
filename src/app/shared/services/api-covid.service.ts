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
          country.Date.includes('01-28') ||
          country.Date.includes('02-28') ||
          country.Date.includes('03-28') ||
          country.Date.includes('04-28') ||
          country.Date.includes('05-28') ||
          country.Date.includes('06-28') ||
          country.Date.includes('07-28') ||
          country.Date.includes('08-28') ||
          country.Date.includes('09-28') ||
          country.Date.includes('10-28') ||
          country.Date.includes('11-28') ||
          country.Date.includes('12-28') 
        )
        && country.Province === '')))
      .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler = (error: HttpErrorResponse) => {
    return throwError(error.message || 'server Error');
  }
}
