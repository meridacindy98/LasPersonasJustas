import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJustoComponent } from './search-justo.component';

describe('SearchJustoComponent', () => {
  let component: SearchJustoComponent;
  let fixture: ComponentFixture<SearchJustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
