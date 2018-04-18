import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePlayerComponent } from './state-player.component';

describe('StatePlayerComponent', () => {
  let component: StatePlayerComponent;
  let fixture: ComponentFixture<StatePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
