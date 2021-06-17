import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListsComponent } from './pages/my-lists/my-lists.component';
import { ListComponent } from './pages/list/list.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { AddItemComponent } from './pages/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListsComponent,
    ListComponent,
    AddListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
