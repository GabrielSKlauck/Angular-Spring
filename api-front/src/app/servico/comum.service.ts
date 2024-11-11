import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComumService {

  constructor(private http:HttpClient) { }

  getCep(cep: string): Observable<JSON>{
    return this.http.get<JSON>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
