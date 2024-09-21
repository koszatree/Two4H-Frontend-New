import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManageShopComponent } from './owner-manage-shop.component';

describe('OwnerManageShopComponent', () => {
  let component: OwnerManageShopComponent;
  let fixture: ComponentFixture<OwnerManageShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerManageShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerManageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
