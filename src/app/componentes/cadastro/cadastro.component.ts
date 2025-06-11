import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { JuntarService } from '../juntar.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule , FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  dadosCadastro = {
    nome : '',
    cpf : '',
    email : '',
    telefone : '',
    senha: ''
  }

  constructor(
    private router: Router,
    private service : JuntarService
  ){}

  ngOnInit(): void {

  }

  async bttCad(){

    const { nome , cpf , email , telefone , senha } = this.dadosCadastro;

    // if(!nome || !cpf || !email || !telefone || !senha){
    //   alert("Preencha todos os campos !!");
    //   return;
    // }

    if(!nome){
      alert("nome");return
    }
    if(!cpf){
      alert("cpf");return
    }
    if(!email){
      alert("email");return
    }
    if(!telefone){
      alert("telefone");return
    }
    if(!senha){
      alert("senha");return
    }
    try{

      const response = await this.service.cadastro(this.dadosCadastro);

      alert(response.nome +" Foi cadastrado com sucesso");

      this.dadosCadastro = { nome : '' , cpf: '' , email: '' , telefone: '' , senha: ''};
      this.router.navigate(['login'])

    }
    catch(error : any){
      alert("Erro ao cadastrar" + error.message);
    }

  }

  // bttCad(){
  //   this.router.navigate(['login'])
  // }

}
