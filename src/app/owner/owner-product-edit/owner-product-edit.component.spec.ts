import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProductEditComponent } from './owner-product-edit.component';

describe('OwnerProductEditComponent', () => {
  let component: OwnerProductEditComponent;
  let fixture: ComponentFixture<OwnerProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerProductEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
