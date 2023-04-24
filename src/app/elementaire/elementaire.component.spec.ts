import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaireComponent } from './elementaire.component';

describe('ElementaireComponent', () => {
  let component: ElementaireComponent;
  let fixture: ComponentFixture<ElementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
