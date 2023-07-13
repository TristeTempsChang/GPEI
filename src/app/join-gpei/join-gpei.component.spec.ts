import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGPEIComponent } from './join-gpei.component';

describe('JoinGPEIComponent', () => {
  let component: JoinGPEIComponent;
  let fixture: ComponentFixture<JoinGPEIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGPEIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinGPEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
