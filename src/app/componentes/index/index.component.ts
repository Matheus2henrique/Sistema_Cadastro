import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  muda(){
    this.router.navigate(['login'])
  }

}
