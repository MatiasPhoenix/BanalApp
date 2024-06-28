import { LocalSaveService } from './../../Services/local-save.service';
import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

interface MyElement {text: string}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(private LocalSaveService: LocalSaveService){}

  elementoProva  : string        = "";
  myElements     : MyElement[]   = [];


  ngOnInit(){
    this.downloadStorage()
  }

  downloadStorage(){
    this.myElements = this.LocalSaveService.getElement('elemento');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.myElements, event.previousIndex, event.currentIndex);
    this.LocalSaveService.clear();
    this.LocalSaveService.saveElement('elemento', this.myElements);
    console.log(this.myElements);
  }

  addElement(){
    const tmp: MyElement = {text: this.elementoProva,};
    this.myElements.push(tmp);
    this.LocalSaveService.saveElement('elemento', this.myElements);
    this.elementoProva = '';
  }

  exploreLocalStorage(){
    let proviamo = this.LocalSaveService.getElement('elemento');
    console.log(proviamo);
    this.downloadStorage()

  }

  removeElement(element : string){
    this.LocalSaveService.removeToDoItem('elemento', element);
    this.downloadStorage()
  }
}
