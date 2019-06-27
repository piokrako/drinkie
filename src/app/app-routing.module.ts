import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './components/random/random.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndexComponent } from './components/index/index.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

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
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'drink',
    component: SearchComponent
  },
  {
    path: ':type',
    component: RandomComponent
  },
  {
    path: 'search',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: `reload`})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
