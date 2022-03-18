import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string):Observable<any>{
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5f9bfdd384783aea5a70458264e1c916`)
  }

  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5f9bfdd384783aea5a70458264e1c916&language=en-US`)
  }
}
