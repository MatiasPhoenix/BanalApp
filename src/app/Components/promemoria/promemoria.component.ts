import {Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList,} from '@angular/cdk/drag-drop';

interface MyElement {
  title: string,
  img : string
}

@Component({
  selector: 'app-promemoria',
  templateUrl: './promemoria.component.html',
  styleUrl: './promemoria.component.scss'
})
export class PromemoriaComponent {

  todo : MyElement[] = [
    { title: "Get to work", img: "https://picsum.photos/450/300/?blur=2" },
    { title: "Pick up groceries", img: "" },
    { title: "Fall asleep", img: "https://picsum.photos/200/200/?blur=2" },
    { title: "Vai a casa COJONE", img: "" },
    ];

  inProgress : MyElement[] = [
    { title: "Vla vla bla", img: "" },
    ];

  pausaItems : MyElement[] = [
    { title: "Vla vla bla", img: "" },
    { title: "Fall asleep", img: "https://picsum.photos/200/200/?blur=4" },
    ];

  done : MyElement[] = [
    { title: "Vla vla bla", img: "" },
    { title: "Pick up groceries", img: "https://picsum.photos/600/150/?blur=1" },
    { title: "Go home", img: "" },
    { title: "Porcaccio Dio", img: "https://picsum.photos/200/250/?blur=1" }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }



}
