import { Movie } from './../interface/movie';
import { Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from '../service/movies.service';
@Pipe({
  name: 'movieFilterByName'
})
export class MoviePipe implements PipeTransform {

  transform(movies:Movie[],  src:string): Movie[]{
    if (!src) return movies
     return movies.filter(movie=>movie.name.includes(src))
   
  }
  }


