import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { IndexComponent } from './components/index/index.component';
import { ListComponent } from './components/list/list.component';
import { DrinkComponent } from './components/drink/drink.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'categories',
    component: ListComponent
  },
  {
    path: 'drink',
    component: DrinkComponent
  },
  {
    path: 'search',
    component: ListComponent
  },
  {
    path: ':type',
    component: RandomComponent
  },
  {
    path: ':type',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
