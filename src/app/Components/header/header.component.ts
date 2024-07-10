import { Component } from '@angular/core';
import { LocalSaveService } from './../../Services/local-save.service';

interface MyTutorial {
  banalAppTutorial : boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private LocalSaveService: LocalSaveService){}

  myTutorial: MyTutorial[]=[]
  banalAppTutorial : boolean = true;

  ngOnInit(){
    this.serviceTutorial();
  }

  changeMyTutorial(){
    this.LocalSaveService.saveElement('tutorial', this.banalAppTutorial);
  }

  serviceTutorial(){
    this.banalAppTutorial = this.LocalSaveService.getElement('tutorial');
  }

  apriTutorial(){
    if (this.banalAppTutorial === true) {
      this.banalAppTutorial = false;
    }else{
      this.banalAppTutorial = true;
    }
    this.changeMyTutorial();
  }
}
