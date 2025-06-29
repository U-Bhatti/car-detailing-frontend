import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCustomer } from './existing-customer';

describe('ExistingCustomer', () => {
  let component: ExistingCustomer;
  let fixture: ComponentFixture<ExistingCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistingCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
