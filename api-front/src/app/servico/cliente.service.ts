import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  selecionar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }

  alterar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, obj);
  }

  excluir(obj:Cliente): Observable<Cliente>{
    return this.http.delete<Cliente>(this.url, obj);
  }

}
