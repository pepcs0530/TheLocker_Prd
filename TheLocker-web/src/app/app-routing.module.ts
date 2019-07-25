import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UsersComponent }      from './users/users.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';

import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AddMembersComponent } from './members/add-members/add-members.component';
import { EditMembersComponent } from './members/edit-members/edit-members.component';

import { KeycardsComponent } from './keycards/keycards.component';
import { LockersComponent } from './lockers/lockers.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/search', component: MembersComponent },
  { path: 'members/new', component: AddMembersComponent},
  { path: 'members/:mem_gen', component: EditMembersComponent},
  { path: 'keycards', component: KeycardsComponent },
  { path: 'lockers', component: LockersComponent },
  { path: 'reports', component: ReportsComponent }

];

@NgModule({
  imports: [ 
    RouterModule,
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}