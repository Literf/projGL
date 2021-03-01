import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthComponent } from './auth/auth.component';
import { MainWindowComponent} from './main-window/main-window.component'
import { AdminWindowComponent} from './admin-window/admin-window.component'
import { ModifUserComponent} from './modif-user/modif-user.component'
import { SearchUserComponent} from './search-user/search-user.component'
import { AuthGuardService } from './services/auth-guard.service';
import { InfoUserComponent } from './info-user/info-user.component';

const routes: Routes = [
 { path: 'main-window',canActivate: [AuthGuardService], component: MainWindowComponent }, 
 { path: 'auth', component: AuthComponent },
 { path: 'admin',canActivate: [AuthGuardService], component: AdminWindowComponent },
 { path: 'users/search',canActivate: [AuthGuardService], component: SearchUserComponent },
 { path: 'user-modif/:id',canActivate: [AuthGuardService], component: ModifUserComponent },
 { path: 'users/new',canActivate: [AuthGuardService], component: FormUserComponent },
 { path: 'info-user',canActivate: [AuthGuardService], component: InfoUserComponent },
 { path: '', component: AuthComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
