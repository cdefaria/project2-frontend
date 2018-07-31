import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

const ROUTES: Routes = [
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}