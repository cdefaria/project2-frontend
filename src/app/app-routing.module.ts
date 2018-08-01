import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { TrendingComponent } from "./trending/trending.component";
import { CommentComponent } from "./comment/comment.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { InterestsComponent } from "./interests/interests.component";
import { RateComponent } from "./rate/rate.component";
import { SearchComponent } from "./search/search.component";
import { ShareComponent } from "./share/share.component";

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
        path: 'trending',
        component: TrendingComponent
    },
    {
        path: 'comments',
        component: CommentComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'interests',
        component: InterestsComponent
    },
    {
        path: 'rates',
        component: RateComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'shares',
        component: ShareComponent
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