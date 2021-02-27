import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthComponent } from './auth/auth.component';
import { MainWindowComponent} from './main-window/main-window.component'
import { AuthGuardService } from './services/auth-guard.service';
import { CommonModule } from '@angular/common';


const routes: Routes = [
 { path: 'main-window',canActivate: [AuthGuardService], component: MainWindowComponent },
 { path: 'main-window/infos-user',canActivate: [AuthGuardService], component: AuthComponent }, 
 { path: 'auth',component: AuthComponent },
 { path: 'users/new',canActivate: [AuthGuardService], component: FormUserComponent },
 { path: '', component: AuthComponent},
 { path: '', redirectTo: 'main-window', pathMatch: 'full' },
 { path: '**', redirectTo: 'main-window' }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
