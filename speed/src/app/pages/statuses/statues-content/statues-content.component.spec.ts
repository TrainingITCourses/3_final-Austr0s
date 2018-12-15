import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuesContentComponent } from './statues-content.component';

describe('StatuesContentComponent', () => {
  let component: StatuesContentComponent;
  let fixture: ComponentFixture<StatuesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
