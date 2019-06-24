import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: ':type',
    component: RandomComponent
  },
  {
    path: '**',
    redirectTo: '/random'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
