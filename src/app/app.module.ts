import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './routing/routing.model';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { ToDolistComponent } from './to-dolist/to-dolist.component';
import { ItemComponent } from './to-dolist/item/item.component';
import { EditItemComponent } from './to-dolist/edit-item/edit-item.component';
import { AllListComponent } from './to-dolist/all-list/all-list.component';
import { TodayListComponent } from './to-dolist/today-list/today-list.component';
import { ListItemComponent } from './to-dolist/list-item/list-item.component';
import { DatePipe } from '@angular/common';
import { MapToList } from './to-dolist/shared/ilistToList.pipe';
import { CompleteComponent } from './to-dolist/complete/complete.component';
import { ProgressingComponent } from './to-dolist/progressing/progressing.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    SideNavComponent,
    ToDolistComponent,
    ItemComponent,
    EditItemComponent,
    AllListComponent,
    TodayListComponent,
    ListItemComponent,
    MapToList,
    CompleteComponent,
    ProgressingComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
