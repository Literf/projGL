import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthComponent } from './auth/auth.component';
import { MainWindowComponent} from './main-window/main-window.component'
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
 { path: 'main-window',canActivate: [AuthGuardService], component: MainWindowComponent }, 
 { path: 'auth', component: AuthComponent },
 { path: 'users/new', component: FormUserComponent },
 { path: '', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
