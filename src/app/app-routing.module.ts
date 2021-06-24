import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
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
    path: 'newlist',
    component: AddListComponent
  },
  {
    path: 'editlist/:id',
    component: EditListComponent
  },
  {
    path: 'list/:id/newitem',
    component: AddItemComponent
  },
  {
    path: 'edititem/:id',
    component: EditItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
