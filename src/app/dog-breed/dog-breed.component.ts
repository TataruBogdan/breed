import { Component, OnInit } from '@angular/core';
import { DogBreedService } from './services/dog-breed.service';
import { DogDataRespons } from './interfaces/DogDataRespons';

@Component({
  selector: 'app-dog-breed',
  templateUrl: './dog-breed.component.html',
  styleUrls: ['./dog-breed.component.css'],
})
export class DogBreedComponent implements OnInit {
  constructor(private dogBreedService: DogBreedService) {}

  dogDataRespons?: DogDataRespons;



  // message: { [breed: string]: string[] } = {};

  ngOnInit(): void {
    this.getBreeds();
    // this.getDogImage();
  }

  private getBreeds(): void {
    this.dogBreedService.getDogBreedData().subscribe({
      next: (dogDataRespons: DogDataRespons) => {
        this.dogDataRespons = dogDataRespons;
        console.log(dogDataRespons);
      },
      error: (errorResponse: any) =>
        console.error(`error fetching dog breed data`, errorResponse.error),
    });
  }

  // private getDogImage(): void {
  //   this.dogBreedService.getBreedsImage().subscribe({
  //     next: (dogDataRespons: DogDataRespons) => {
  //       this.dogDataRespons = dogDataRespons;
  //       console.log(dogDataRespons);
  //     },
  //     error: (errorResponse: any) =>
  //       console.error(`error fetching dog breed data`, errorResponse.error),
  //   });
  // }
}
