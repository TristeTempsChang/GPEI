import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAdhererComponent } from './why-adherer.component';

describe('WhyAdhererComponent', () => {
  let component: WhyAdhererComponent;
  let fixture: ComponentFixture<WhyAdhererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAdhererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAdhererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
