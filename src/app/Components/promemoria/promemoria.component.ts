import {Component, EventEmitter, Output} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList,} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

interface MyElement {
  titoloCard      : string,
  imgCard         : string,
  testoCard       : string,
  collegaUno      : string,
  collegaDue      : string,
  opzioneUnoCard  : boolean,
  opzioneDueCard  : boolean,
  opzioneTreCard  : boolean,
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
    { titoloCard: "Proviamo una prova",
      imgCard: "",
      testoCard:   "un sacco di testo qui dove si scrivono robe",
      collegaUno: "Sempronio",
      collegaDue: "Caio",
      opzioneUnoCard: true,
      opzioneDueCard: false,
      opzioneTreCard: true,
     },
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

  tipoDiCard      : string    = "";
  titoloCard      : string    = "";
  testoCard       : string    = "";
  collegaUno      : string    = "";
  collegaDue      : string    = "";
  schermataCard   : boolean   = false;
  opzioneUnoCard  : boolean   = false;
  opzioneDueCard  : boolean   = false;
  opzioneTreCard  : boolean   = false;



  newCard(typeCard : any) : any {
    this.schermataCard = true;
    typeCard.toStrin
    return this.tipoDiCard = typeCard;
  }
  cancelModal() {
    this.schermataCard = false;
  }

  onSubmit(form: NgForm) {
    switch (this.tipoDiCard) {
      case 'done':
        this.done.push(form.value);
        break;
      case 'inProgress':
        this.inProgress.push(form.value)
        break;
      case 'pausa':
        this.pausaItems.push(form.value)
        break;
      case 'todo':
        this.todo.push(form.value)
        break;
      default:
        console.error('Array non valido selezionato');
    }

    this.schermataCard = false;
    form.reset();
    // alert(JSON.stringify(formGroup.value, null, 2));
  }
}
