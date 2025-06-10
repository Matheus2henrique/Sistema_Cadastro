import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuntarService {

  private baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  Cadastro(dadosCadastro : any){
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/cadastro` , dadosCadastro));
  }

}
