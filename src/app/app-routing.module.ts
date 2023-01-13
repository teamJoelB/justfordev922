import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MemoRecuComponent } from './memo-recu/memo-recu.component';
import { MemoComponent } from './memo/memo.component';

const routes: Routes = [
  {component: MemoComponent, path: 'my-memo'},
  {component: ConnexionComponent, path: 'login'},
  {component: MemoRecuComponent, path: 'memo-recu'},
  {component: AboutComponent, path: 'about'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
