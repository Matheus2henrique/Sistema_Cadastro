import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class JuntarService {

  private baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  cadastro(dadosCadastro : any){
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/cadastro` , dadosCadastro));
  }

 login(login: Login): Promise<boolean> {
  return firstValueFrom(this.http.post<boolean>(`${this.baseUrl}/login`, login));
  }

  listarCadastros(): Promise<any[]> {
  return firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/cadastro`));
  }





}
