import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { TestComponent } from './test/test.component';

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
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
