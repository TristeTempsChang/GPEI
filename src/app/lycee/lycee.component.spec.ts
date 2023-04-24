import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyceeComponent } from './lycee.component';

describe('LyceeComponent', () => {
  let component: LyceeComponent;
  let fixture: ComponentFixture<LyceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyceeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
