import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { BidComponent } from './bid/bid.component';

const routes: Routes = [
  {
    path: '',
    component: BidComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
