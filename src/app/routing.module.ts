import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { EditUserComponent } from "./shared/components/edit-user/edit-user.component";


const  routes :Routes = [
    {
        path: "" , component :DashboardComponent
    },
    {
        path:"home" , component : DashboardComponent
    },
    {
        path:"users" , component : UsersComponent
    },
    {
        path:"users/:userId" , component : UserComponent
    },
    {
        path:"users/:userId/edit" , component : EditUserComponent
    },
    {
        path:"products" , component : ProductsComponent
    },
    
    {
        path:"page-not-found" , component : PageNotFoundComponent
    },
    {
        path:"**" , redirectTo : 'page-not-found'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{}