import { Movie } from './../interface/movie';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isnewfilter'
})
export class IsnewPipe implements PipeTransform {

  transform(movies: Movie[], isnew: boolean): Movie[] | undefined {
    if(!isnew) return movies
    return movies.filter(movie=>movie.isNew == true)
  }

}
