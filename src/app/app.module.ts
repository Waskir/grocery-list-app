import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListsComponent } from './pages/my-lists/my-lists.component';
import { ListComponent } from './pages/list/list.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListsComponent,
    ListComponent,
    AddListComponent,
    AddItemComponent,
    EditListComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
