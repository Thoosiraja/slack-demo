import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstSidebarComponent } from './first-sidebar/first-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { SearchpopupComponent } from './searchpopup/searchpopup.component';
import { MessageComponent } from './message/message.component';

const appRoute:Routes=[
  {path:'',component:MainComponentComponent},
  {path:'main-component/:id/:name/:type',component:MainComponentComponent},
  
]

@NgModule({
  declarations: [
    SearchpopupComponent,
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FirstSidebarComponent,
    SidebarComponent,
    MainComponentComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
