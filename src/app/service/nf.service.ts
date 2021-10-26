import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlBase = 'http://localhost:8080/api/nf/';

@Injectable({
  providedIn: 'root'
})
export class NfService {

  constructor(private http: HttpClient) { }

  listCurrentStatus(): Observable<any>{
    return this.http.get(urlBase);
  }

  listCurrentStatusByUf(uf: string): Observable<any>{
    return this.http.get(`${urlBase}` + uf);
  }

  listCurrentStatusByDate(date: string): Observable<any>{
    return this.http.get(`${urlBase}dt?date=` + date);
  }

  getMostIndisponibleUf(): Observable<any>{
    return this.http.get(`${urlBase}indisponibility`);
  }

}
