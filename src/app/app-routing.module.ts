import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { ListComponent } from './pages/list/list.component';
import { MyListsComponent } from './pages/my-lists/my-lists.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  },
  {
    path: 'lists',
    component: MyListsComponent
  },
  {
    path: 'list/:id',
    component: ListComponent
  },
  {
    path: 'addlist',
    component: AddListComponent
  },
  {
    path: 'additem',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
