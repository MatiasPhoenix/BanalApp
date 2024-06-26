import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

    movies = [
      'Episode I',
      'Episode II',
      'Episode III',
      'Episode IV',
      'Episode V',
      'Episode VI',
      'Episode VII',
      'Episode VIII',
      'Episode IX',
    ];

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
      console.log(this.movies);
    }
}
