import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustoCardComponent } from './justo-card.component';

describe('JustoCardComponent', () => {
  let component: JustoCardComponent;
  let fixture: ComponentFixture<JustoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
