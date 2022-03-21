import { Component, Input, OnInit } from '@angular/core';
import { Movie} from '../interface/movie'
import {  MoviesService} from '../service/movies.service'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() movie:Movie = {} as Movie
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
  }

}
