import { Component } from '@angular/core';
import { LocalSaveService } from './../../Services/local-save.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgForm,  } from '@angular/forms';
import { ToastService } from 'angular-toastify';

interface MyElement {
  titoloCard      : string,
  imgCard         : string,
  testoCard       : string,
  collegaUno      : string,
  collegaDue      : string,
  avatar          : string,
  opzioneUnoCard  : boolean,
  opzioneDueCard  : boolean,
  opzioneTreCard  : boolean,
}

@Component({
  selector:    'app-promemoria',
  templateUrl: './promemoria.component.html',
  styleUrl:    './promemoria.component.scss',
})
export class PromemoriaComponent {
  ngOnInit(){
    this.getAllArray()
  }

  constructor(private LocalSaveService: LocalSaveService, private _toastService: ToastService){}

  todo        : MyElement[] = [];

  done        : MyElement[] = [];

  inProgress  : MyElement[] = [];

  pausaItems  : MyElement[] = [];

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
    this.saveAllArray();
  }

  //Sezione dedicata alle nuove CARD//

  tipoDiCard      : string    = "";
  titoloCard      : string    = "";
  testoCard       : string    = "";
  imgCard         : string    = "";
  collegaUno      : string    = "";
  collegaDue      : string    = "";
  avatar          : string    = "../../../assets/Avatars/Avatar00.png";
  schermataCard   : boolean   = false;
  opzioneUnoCard  : boolean   = false;
  opzioneDueCard  : boolean   = false;
  opzioneTreCard  : boolean   = false;
  modificaBoolean : boolean   = false;

  newCard(typeCard : any) : any {
    this.schermataCard = true;
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
    this.saveAllArray();
  }

  saveAllArray(){
    this.LocalSaveService.saveElement('done', this.done);
    this.LocalSaveService.saveElement('inProgress', this.inProgress);
    this.LocalSaveService.saveElement('pausaItems', this.pausaItems);
    this.LocalSaveService.saveElement('todo', this.todo);
    this.avatar = "../../../assets/Avatars/Avatar00.png";
    this.tmpCard = [];
    this.arrayCard = "";
  }
  getAllArray(){
    this.done = this.LocalSaveService.getElement('done');
    this.inProgress = this.LocalSaveService.getElement('inProgress');
    this.pausaItems = this.LocalSaveService.getElement('pausaItems');
    this.todo = this.LocalSaveService.getElement('todo');
  }

  tmpCard : MyElement[] = []
  modificaCard(item : any, arrayCard : string){
    if (this.modificaBoolean == false) {
      this.modificaBoolean = true;
    }else{
      this.modificaBoolean = false;
    }

    if (this.tmpCard.length == 1) {
      this.tmpCard.splice(0, this.tmpCard.length);
    }else{
      this.tmpCard.push(item);
    }

    return this.arrayCard = arrayCard
  }

  arrayCard : string = "";
  removeThisCard(card: any) {
    if (this.arrayCard === "" || this.arrayCard === "done") {
      this.done = this.done.filter(item => item !== card);
      this.saveAllArray();
    }
    switch (this.arrayCard) {
      case 'todo':
        this.todo = this.todo.filter(item => item !== card);
        this.saveAllArray();
        break;

      case 'inProgress':
        this.inProgress = this.inProgress.filter(item => item !== card);
        this.saveAllArray();
        break;

      case 'pausa':
        this.pausaItems = this.pausaItems.filter(item => item !== card);
        this.saveAllArray();
        break;

      default:
        break;
    }
    this.tmpCard = [];
    this.arrayCard = "";
    this.modificaBoolean = false
    this.cardEliminata();
  }

  scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //Notifiche
  cardCreata(){
    this._toastService.info('Nuova Card creata!');
  }
  cardEliminata(){
    this._toastService.info('Card Eliminata!');
  }
}
