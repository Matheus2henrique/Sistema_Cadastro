import { Component, OnInit } from '@angular/core';
import { JuntarService } from '../juntar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cadastro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cadastro.component.html',
  styleUrl: './lista-cadastro.component.css'
})
export class ListaCadastroComponent implements OnInit
{
    cadastros: any[] = [];

    constructor(private juntarService: JuntarService) {}

    ngOnInit() {
      this.juntarService.listarCadastros().then(data => {
        this.cadastros = data;
      });
    }
  }
