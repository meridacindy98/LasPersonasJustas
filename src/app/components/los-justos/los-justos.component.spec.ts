import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosJustosComponent } from './los-justos.component';

describe('LosJustosComponent', () => {
  let component: LosJustosComponent;
  let fixture: ComponentFixture<LosJustosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosJustosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosJustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
