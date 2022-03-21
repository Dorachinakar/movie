import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviePipe } from './pipe/movie.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbListModule,NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { IsnewPipe } from './pipe/isnew.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    AddMovieComponent,
    MoviePipe,
    SearchComponent,
    IsnewPipe
  ],
  imports: [
    BrowserModule,NbInputModule,NbCardModule,NbButtonModule,
    BrowserAnimationsModule,NbListModule,NbCardModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
