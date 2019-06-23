import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: ':type',
    component: RandomComponent
  },
  {
    path: 'list/c/list',
    component: CategoriesComponent
  },
  {
    path: '**',
    redirectTo: '/random'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
