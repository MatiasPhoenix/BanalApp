import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSaveService {

  constructor() { }

  saveElement(key:string,value:any):void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getElement(key:string):any {
    const arrayString = localStorage.getItem(key);
    return arrayString ? JSON.parse(arrayString) : [];
  }

  removeToDoItem(key: string, text: string): void {
    let myElement = this.getElement(key);
    myElement = myElement.filter((item: { text: string; }) => item.text !== text);
    this.saveElement(key, myElement);
  }
  clear():void{
    localStorage.clear();
  }
}
