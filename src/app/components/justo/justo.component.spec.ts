import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustoComponent } from './justo.component';

describe('JustoComponent', () => {
  let component: JustoComponent;
  let fixture: ComponentFixture<JustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
