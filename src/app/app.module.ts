import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { RoutingModule } from './routing.module';
import { UserComponent } from './shared/components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    DashboardComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
