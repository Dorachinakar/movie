import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { MoviesService } from '../service/movies.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movie:string =""
  actors: string=""
  date:string=""
  rank: number=0
  isNew:boolean=false
  constructor(private service: MoviesService) {}
  insertMovie(
    // movie: HTMLInputElement,
    // actors: HTMLInputElement,
    // date: HTMLInputElement,
    // rank: HTMLInputElement,
    // isNew: HTMLInputElement

  ) {
    // let actorss=actors.value

    // let addmovie = {
    //   name: movie.value,
    //   actors: actorss.split(","),
    //   date: new Date(date.value),
    //   rank: parseFloat(rank.value) ,
    //   isNew: isNew.checked,
    // } as Movie;

    // this.service.insertAmovie(addmovie);

let movie = {
  name:this.movie ,
  actors: this.actors.split(','),
  date: new Date(this.date),
  rank: this.rank,
  isNew:this.isNew
} as Movie
    this.service.insertAmovie(movie);
  }
  ngOnInit(): void {}
}
