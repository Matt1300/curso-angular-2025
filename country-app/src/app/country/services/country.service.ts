import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(resp => CountryMapper.toCountryList(resp)),
        catchError((err) => {
          console.error('Error Fetching', err);
          return throwError(() => new Error(`No se pudo obtener países con la capital: "${query}"`));
        })
      )
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(resp => CountryMapper.toCountryList(resp)),
        delay(2000),
        catchError((err) => {
          console.error('Error Fetching', err);
          return throwError(() => new Error(`No se pudo obtener países con el nombre: "${query}"`));
        })
      )
  }

  searchByAlphaCode(code: string): Observable<Country | undefined> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(resp => CountryMapper.toCountryList(resp)),
        map((countries) => countries.at(0)),
        catchError((err) => {
          console.error('Error Fetching', err);
          return throwError(() => new Error(`No se pudo obtener países con el nombre: "${code}"`));
        })
      )
  }

}
