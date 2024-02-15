import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotCardComponent } from './slot-card.component';

describe('SlotCardComponent', () => {
  let component: SlotCardComponent;
  let fixture: ComponentFixture<SlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
