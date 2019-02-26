import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

import { ListCreatorComponent } from './lists/creator/list.creator.component';

import { AuthGuard } from './guards/auth.guard.service';

export const routes = [
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuard]},
      { path: 'login', component: LoginComponent},
      { path: 'new', component: ListCreatorComponent, canActivate:[AuthGuard]},
    ];