import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { MapaComponent } from './views/mapa/mapa.component';

export const routes: Routes = [
  {
    path: '',
    component: MapaComponent,
    data: {
      title: 'Mapa'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'main',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      //{
      //  path: 'dashboard',
      //  loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      //}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
