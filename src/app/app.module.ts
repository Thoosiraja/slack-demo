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

const appRoute:Routes=[
  {path:'',component:MainComponentComponent},
  {path:'main-component/:name',component:MainComponentComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FirstSidebarComponent,
    SidebarComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
