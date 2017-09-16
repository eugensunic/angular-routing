import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubOneComponent } from './second-sub-one.component';

describe('SecondSubOneComponent', () => {
  let component: SecondSubOneComponent;
  let fixture: ComponentFixture<SecondSubOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
