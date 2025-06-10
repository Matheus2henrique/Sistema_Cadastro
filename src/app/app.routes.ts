import { provideRouter, Routes } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { IndexComponent } from './componentes/index/index.component';
import { appConfig } from './app.config';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ListaCadastroComponent } from './componentes/lista-cadastro/lista-cadastro.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: IndexComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'listarCadastros',
    component: ListaCadastroComponent
  }

];

export const appRoutes = {
  providers: [provideRouter(routes)]
}
