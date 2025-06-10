import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule],
    template: `<router-outlet></router-outlet>`,
})

export class AppComponent {
  title = 'Sistema-Cadastro';
}
