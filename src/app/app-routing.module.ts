import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthComponent } from './auth/auth.component';
import { MainWindowComponent} from './main-window/main-window.component'
import { AuthGuardService } from './services/auth-guard.service';
import {ListClientsComponent} from './list-clients/list-clients.component'
import { CommonModule } from '@angular/common';

const routes: Routes = [
 { path: 'main-window',canActivate: [AuthGuardService], component: MainWindowComponent }, 
 { path: 'auth', component: AuthComponent },
 { path: 'users/new', component: FormUserComponent },
/* { path: 'clients',
   loadChildren: () =>
  import('./list-clients/clients.module').then(
    (m) => m.Clients
   ),
 },*/
 { path: 'main-window/clients', component: ListClientsComponent},
 { path: '', component: AuthComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
