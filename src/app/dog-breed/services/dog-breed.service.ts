import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BreedRespons } from '../interfaces/BreedRespons';
import { DogDataRespons } from '../interfaces/DogDataRespons';
import { DogImageResponse } from '../interfaces/DogImageRespons';

@Injectable({
  providedIn: 'root',
})
export class DogBreedService {
  constructor(private http: HttpClient) {}

  getDogBreedData(): Observable<DogDataRespons> {
    const url: string = `https://dog.ceo/api/breeds/list/all`;

    let resp = this.http.get<DogDataRespons>(url);
    //console.log(resp);
    return resp;
  }

  
  
  getBreedsImage() : Observable<DogImageResponse> {
    const url: string = `https://dog.ceo/api/breeds/image/random`;

    let resp = this.http.get<DogImageResponse>(url);
    
    return resp;
  }
  
}
