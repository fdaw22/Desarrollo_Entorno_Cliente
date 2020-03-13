import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) {

  }

  getAllIdiomas(){
    const path = 'https://restcountries.eu/rest/v2/all';
    return this.http.get<any[]>(path);
  }
}
