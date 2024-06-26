import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromemoriaComponent } from './promemoria.component';

describe('PromemoriaComponent', () => {
  let component: PromemoriaComponent;
  let fixture: ComponentFixture<PromemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromemoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
