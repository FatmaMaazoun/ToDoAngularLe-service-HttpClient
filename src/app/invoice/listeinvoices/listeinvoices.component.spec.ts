import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinvoicesComponent } from './listeinvoices.component';

describe('ListeinvoicesComponent', () => {
  let component: ListeinvoicesComponent;
  let fixture: ComponentFixture<ListeinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
