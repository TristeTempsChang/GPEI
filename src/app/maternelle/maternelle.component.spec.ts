import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternelleComponent } from './maternelle.component';

describe('MaternelleComponent', () => {
  let component: MaternelleComponent;
  let fixture: ComponentFixture<MaternelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaternelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaternelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
