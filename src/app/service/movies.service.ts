import { Injectable } from '@angular/core';
import {  Movie} from '../interface/movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private movies:Movie[] = [{
  name : "god of war",
  actors :["nimrod","dor"],
  isNew : true,
  date : new Date(),
  rank:1
},{
  name : "god of war",
  actors :["nimrod","dor"],
  isNew : true,
  date : new Date(),
  rank:1
}]
  constructor() {
   }
   getallmovies(){
    return this.movies
  }
  insertAmovie(newMovie:Movie){
    this.movies.push(newMovie)
  }
}
