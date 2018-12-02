import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignCardComponent } from './sign-card.component';

describe('SignCardComponent', () => {
  let component: SignCardComponent;
  let fixture: ComponentFixture<SignCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
