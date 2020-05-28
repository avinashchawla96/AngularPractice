import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocountComponent } from './herocount.component';

describe('HerocountComponent', () => {
  let component: HerocountComponent;
  let fixture: ComponentFixture<HerocountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerocountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
