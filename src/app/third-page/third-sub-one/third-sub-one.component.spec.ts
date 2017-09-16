import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSubOneComponent } from './third-sub-one.component';

describe('ThirdSubOneComponent', () => {
  let component: ThirdSubOneComponent;
  let fixture: ComponentFixture<ThirdSubOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSubOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
