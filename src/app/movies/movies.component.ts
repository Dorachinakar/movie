import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import {MoviesService} from "../service/movies.service"
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies:Movie[] 
  constructor(private service:MoviesService) {
this.movies = this.service.getallmovies()

   }
   isnew = false
name:string = ""
  ngOnInit(): void {
  }

}
