import {Component, EventEmitter, Output} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList,} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface MyElement {
  title: string,
  img : string,
  text: string,
}

@Component({
  selector: 'app-promemoria',
  templateUrl: './promemoria.component.html',
  styleUrl: './promemoria.component.scss',
})
export class PromemoriaComponent {

  todo : MyElement[] = [
    // { title: "Get to work", img: "https://picsum.photos/450/250/?blur=2", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
    // { title: "Pick up groceries", img: "", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
    // { title: "Fall asleep", img: "https://picsum.photos/450/250/?blur=1", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },

  ];

  inProgress : MyElement[] = [
    // { title: "Vla vla bla", img: "", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
  ];

  pausaItems : MyElement[] = [
    // { title: "Vla vla bla", img: "", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
    // { title: "Fall asleep", img: "https://picsum.photos/450/250/?blur=4", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
  ];

  done : MyElement[] = [
    // { title: "Vla vla bla", img: "", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
    // { title: "Pick up groceries", img: "https://picsum.photos/450/250/?blur=1", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },
    // { title: "Go home", img: "", text: "aslkdalskdjlkjasdflkjasflkjsdflkjasflkjsflkjsdfnpbvoopjkfnjkngopjkjkbjkbfikijbjkkjfjkb" },

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


  //Sezione dedicata alle nuove CARD//
  schermataCard : boolean = false;
  titoloCard : string = "";
  testoCard : string = "";
  opzioneUnoCard : boolean = false;
  opzioneDueCard : boolean = false;
  opzioneTreCard : boolean = false;



  newCard(){
    return this.schermataCard = true;
  }
  cancelModal() {
    this.schermataCard = false;
  }





    alertFormValues(formGroup: FormGroup) {
      alert(JSON.stringify(formGroup.value, null, 2));
    }
}
