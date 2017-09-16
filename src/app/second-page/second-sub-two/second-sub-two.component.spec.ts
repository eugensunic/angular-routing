import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubTwoComponent } from './second-sub-two.component';

describe('SecondSubTwoComponent', () => {
  let component: SecondSubTwoComponent;
  let fixture: ComponentFixture<SecondSubTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSubTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
