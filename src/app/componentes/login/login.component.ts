import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JuntarService } from '../juntar.service';
import { Login } from '../../models/login';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule, FormsModule]
})
export class LoginComponent {

  loginData: Login = {
    email: '',
    senha: ''
  };

  constructor(
    private router: Router,
    private juntarService: JuntarService
  ) {}

  async logar() {
    if (!this.loginData.email || !this.loginData.senha) {
      alert('Por favor, preencha email e senha');
      return;
    }

    try {
      const success = await this.juntarService.login(this.loginData);
      if (success) {
        this.router.navigate(['dashboard']);
      } else {
        alert('Email ou senha inválidos.');
      }
    } catch (err) {
      alert('Erro ao tentar logar. Verifique o backend.');
      console.error(err);
    }
  }

  newCad() {
    this.router.navigate(['cadastro']);
  }
}
