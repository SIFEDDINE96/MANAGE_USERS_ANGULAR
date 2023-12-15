import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersManageComponent} from "./users-manage/users-manage.component";

export const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'manage-users', component : UsersManageComponent},
];
