import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InterestsComponent } from './interests/interests.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TrendingComponent } from './trending/trending.component';
import { RateComponent } from './rate/rate.component';
import { ShareComponent } from './share/share.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InterestsComponent,
    SearchComponent,
    HomeComponent,
    FavoritesComponent,
    TrendingComponent,
    RateComponent,
    ShareComponent,
    CommentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
